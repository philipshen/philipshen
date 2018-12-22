import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { getShortMonth } from '../utils/helpers'

import Color from '../styles/color'
import { ExperienceTypeConfig } from '../models/experience-type'

import experiences from '../data/career/experience'

// Some constants...
const DAYS_IN_MONTH = 31
const widthPerYear = 1280
const widthPerMonth = widthPerYear / 12
const widthPerDay = widthPerMonth / DAYS_IN_MONTH
const TIMELINE_HEIGHT = 300
const EXPERIENCE_HEIGHT = 12
const EXPERIENCE_MARGIN = 10

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: scroll;
  height: ${TIMELINE_HEIGHT}px;
  position: relative;
`

const BaseTimeline = styled.div`
  display: flex;
  background-color: ${Color.light_gray};
  height: 2px;
  width: ${props => props.width}px;
  position: relative;
`

const MonthMarker = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 80px;
  left: ${props => props.left - 40}px;

  :hover {
    h5 {
      opacity: 1;
    }

    .line {
      opacity: 0;
    }
  }

  .line {
    height: 20px;
    width: 2px;
    background-color: ${Color.light_gray};
    opacity: 0.6;
    transition: all 0.2s ease-in-out;
  }

  h5 {
    opacity: 0;
    position: absolute;
    margin: auto;
    font-weight: normal;
    color: ${Color.light_text};
    margin-bottom: 0;
    font-size: ${rhythm(3/4)};
    top: 2px;
    transition: all 0.3s ease-in-out;
    z-index: 10;
    cursor: default;
  }
`

const ExperienceTitle = styled.h5`
  color: white;
  margin-left: 12px;
  margin-right: 12px;
  margin-top: ${rhythm(1/2)};
  font-weight: 500;
  margin-bottom: ${rhythm(1/4)};
  max-height: ${rhythm(1)};
`

const ExperienceSubtitle = styled.h6`
  font-weight: normal;
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  opacity: 0.8;
  margin-bottom: ${rhythm(1/2)};
`

const Experience = styled.div`
  background-color: ${props => props.color};
  position: absolute;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  /* min-height: 12px; */
  max-height: ${EXPERIENCE_HEIGHT}px;
  border-radius: 4px;
  top: ${props => props.top}px;
  transition: max-height 0.3s ease-in-out;
  white-space: nowrap;

  div {
    visibility: hidden;
  }

  :hover {
    max-height: 1000px; /* For animation. Set to bigger than anything we'll get */
    z-index: 11; /* Should appear over the base timeline stuff */
    min-width: fit-content;
    div {
      visibility: visible;
    }
  }
`

export default class Timeline extends Component {

  constructor(props) {
    super(props)

    this.startDate = new Date(2017, 0, 1)
    this.endDate = new Date()
    this.endDate.setMonth(this.endDate.getMonth() + 1)
    this.numberOfMonths = this.getMonthsBetween(this.startDate, this.endDate)
  }

  render() {
    // Inclusive

    return (
      <Container>
        <BaseTimeline
          width={this.numberOfMonths * widthPerMonth}
        >
        </BaseTimeline>
        {this.renderMonthMarkers()}
        {this.renderExperiences()}
      </Container>
    )
  }

  renderExperiences() {
    return Object.keys(experiences).map(key => {
      const experience = experiences[key]
      const experienceTypeConfig = ExperienceTypeConfig.get(experience.type)

      // Set the left distance
      let left
      if (experience.end_date) {
        left = this.getMonthsBetween(experience.end_date, new Date()) * widthPerMonth
        // Offset it by the number of days...
        left += (DAYS_IN_MONTH - experience.end_date.getDate()) * widthPerDay
      } else {
        left = 0
      }

      /*
        Need to adjust the width by days

        1. Because the left margin is offset based on (DAYS_IN_MONTH - endDate.getDate()) days,
        we are shifted RIGHT by that number of days ("offset days")

        2. Additionally, we will already be shifted LEFT by DAYS_IN_MONTH because of how "getMonthsBetween" works
        (it's not inclusive)

        3. At the end of this, we want the right end of our "experience" to be moved LEFT of the beginning
        of the target month by (startDate.getDate()) days; in other words, the width needs to be
        DECREASED by startDate.getDate() days.

        4. This is the same as adding 

        4. Because of (1) and (2), we are already shifted LEFT by endDate.getDate() days. We
        need to adjust by shifting RIGHT endDate.getDate() - startDate.getDate() days.
      */
      const endDate = experience.end_date || new Date(2019, 0, 1)
      let width = this.getMonthsBetween(experience.start_date, endDate) * widthPerMonth
      // Days offset
      width += (endDate.getDate() - (experience.start_date.getDate() - 1)) * widthPerDay

      return (
        <Experience
          key={key}
          color={experienceTypeConfig.color}
          left={left} 
          width={width}
          top={this.getYValueForLevel(experience.level)}
        >
          <div>
            <ExperienceTitle>
              {experience.title && `${experience.title}`}
              {experience.title && experience.organization && ' - '}
              {experience.organization && `${experience.organization}`}
            </ExperienceTitle>
            <ExperienceSubtitle>
              {getShortMonth(experience.start_date.getMonth())} {experience.start_date.getFullYear()}
              {
                experience.end_date
                ?
                ` - ${getShortMonth(experience.end_date.getMonth())} ${experience.end_date.getFullYear()}`
                :
                ` - Present`
              }
            </ExperienceSubtitle>
          </div>
        </Experience>
      )
    })
  }

  renderMonthMarkers() {
    let markers = []

    const date = new Date(this.endDate.getTime())
    // Doesn't include first/last months; special markers for those
    for (let i = 1; i < this.numberOfMonths; i++) {
      // Decrement the month
      date.setMonth(date.getMonth() - 1)

      markers.push(
        <MonthMarker left={i * widthPerMonth}>
          <div className={'line'} />
          <h5>{getShortMonth(date.getMonth())} '{date.getFullYear().toString().substr(-2)}</h5>
        </MonthMarker>
      )
    }

    return markers
  }

  getMonthsBetween(date1, date2) {
    return date2.getMonth() - date1.getMonth()
      + (12 * (date2.getFullYear() - date1.getFullYear()))
  }

  getYValueForLevel(level) {
    // The level in the timeline. It's organized like:
    /*
      level 3
      level 1
      --------------------------------------------
      level 0
      level 2

      So odds are below the line and evens are above it.

      0, 1 -> 1 distance from the timeline. 2, 3 -> 2 distance. And so forth. Need to do
      (n // 2 + 1) to get the level away from the timeline.
    */
    const levelFromTimeline = Math.floor(level / 2) + 1
    // Absolute distance
    let distanceFromTimelineCenter = levelFromTimeline * (EXPERIENCE_HEIGHT + EXPERIENCE_MARGIN)

    if (level <= 1) {
      // For 0 and 1, where we're right next to the base timeline, add some padding
      // Just to adjust a little bit
      distanceFromTimelineCenter += 2
    }

    const isAboveTimeline = level % 2 === 1
    if (isAboveTimeline) {
      // Calculations are from the TOP, so when calculating TOP value 
      // of components above the timeline, don't include its own height
      distanceFromTimelineCenter *= -1
    } else {
      distanceFromTimelineCenter -= EXPERIENCE_HEIGHT
    }

    // To get the Y value, we need to get the timeline center and then add our distance.
    return (TIMELINE_HEIGHT / 2) + distanceFromTimelineCenter
  }

}
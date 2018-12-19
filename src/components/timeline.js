import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { getShortMonth } from '../utils/helpers'

import Color from '../styles/color'
import { ExperienceTypeConfig } from '../models/experience-type'

import experiences from '../data/career/experience'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-x: scroll;
  min-height: 300px;
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
      opacity: 1;
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
    bottom: -20px;
    transition: all 0.3s ease-in-out;
  }
`

const Experience = styled.div`
  background-color: ${props => props.color};
  position: absolute;
  left: ${props => props.left}px;
  width: ${props => props.width}px;
  height: 12px;
  border-radius: 4px;

  margin-bottom: 24px;
`

// Some constants...
const DAYS_IN_MONTH = 31

export default class Timeline extends Component {

  constructor(props) {
    super(props)

    this.startDate = new Date(2017, 0, 1)
    this.endDate = new Date(2019, 0, 1)
    this.numberOfMonths = this.getMonthsBetween(this.startDate, this.endDate)

    /*
      Required so using 'window' here doesn't cause Gatsby build to fail
      (build does not happen in context of browser)
    */
    if (typeof window === 'undefined') return

    const widthPerYear = window.outerWidth * 0.8;
    this.widthPerMonth = widthPerYear / 12;
    this.widthPerDay = this.widthPerMonth / DAYS_IN_MONTH;
  }

  render() {
    // Inclusive

    return (
      <Container>
        <BaseTimeline
          width={this.numberOfMonths * this.widthPerMonth}
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
        left = this.getMonthsBetween(experience.end_date, new Date()) * this.widthPerMonth
        // Offset it by the number of days...
        left += (DAYS_IN_MONTH - experience.end_date.getDate()) * this.widthPerDay
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
      let width = this.getMonthsBetween(experience.start_date, endDate) * this.widthPerMonth
      // Days offset
      width += (endDate.getDate() - (experience.start_date.getDate() - 1)) * this.widthPerDay

      return (
        <Experience
          key={key}
          color={experienceTypeConfig.color}
          left={left}
          width={width}
        >
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
        <MonthMarker left={i * this.widthPerMonth}>
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

}
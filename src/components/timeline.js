import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { getShortMonth } from '../utils/helpers'

import Color from '../styles/color'

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

export default class Timeline extends Component {

  constructor(props) {
    super(props)

    const widthPerYear = window.outerWidth * 0.8;
    this.widthPerMonth = widthPerYear / 12;

    this.startDate = new Date(2017, 0, 1)
    this.endDate = new Date()
    this.numberOfMonths = this.getMonthsBetween(this.startDate, this.endDate)
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
      </Container>
    )
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
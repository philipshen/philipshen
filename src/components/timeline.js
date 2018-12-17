import React, { Component } from 'react'
import styled from 'styled-components'

import Color from '../styles/color'

// One year should fit on the screen
const oneYearWidth = window.outerWidth * 0.8;
const oneMonthWidth = oneYearWidth / 12;

// The start date for us will be January 2017
const startDate = new Date(2017, 0 , 1)
const endDate = new Date()

// Get the number of months between those dates
var months
months = endDate.getFullYear() - startDate.getFullYear() * 12;
months -= startDate.getMonth() + 1
months += endDate.getMonth()

console.log(months)
console.log(oneMonthWidth)

const Container = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  min-height: 300px;
`

const BaseTimeline = styled.div`
  background-color: ${Color.light_gray};
  height: 2px;
  width: ${months * oneMonthWidth}px;
`

export default class Timeline extends Component {

  render() {
    return (
      <Container>
        <BaseTimeline />
      </Container>
    )
  }

}
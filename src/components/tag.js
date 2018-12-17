import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { rhythm } from '../utils/typography'

import tags from '../data/blog/_tags.js'

const Container = styled.h6`
  background-color: ${props => props.color};
  padding-top: ${rhythm(1/8)};
  padding-bottom: ${rhythm(1/8)};
  padding-left: 8px;
  padding-right: 8px;
  margin-right: 12px;
  margin-bottom: ${rhythm(1/4)};
  border-radius: 4px;
  color: white;
  font-weight: normal;
  display: inline-block;
  float: right;
  letter-spacing: 0.5px;
`

export default class Tag extends Component {

  render() {
    const tagInfo = tags[this.props.tag]

    return (
      <Container color={tagInfo.color}>
        {tagInfo.name}
      </Container>   
    )
  }

}

Tag.propTypes = {
  tag: PropTypes.string.isRequired
}
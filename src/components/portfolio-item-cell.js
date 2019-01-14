import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import Color from '../styles/color'

const RightContent = styled.div`
  margin-left: 12px;
`

const Title = styled.h4`
  margin-bottom: ${rhythm(1/4)};
`

const Subtitle = styled.h5`
  font-weight: normal;
  color: ${Color.subtitle_text};
  margin-bottom: 0;
`

const Image = styled.div`
  height: ${rhythm(5/2)};
  width: ${rhythm(5/2)};
  border-radius: ${rhythm(5/4)};
  border: 2px solid black;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(1)};

  cursor: pointer;

  :hover {
    ${Title}, ${Subtitle} {
      text-decoration: underline;
    }
  }
`

export default class PortfolioItemCell extends Component {

  render() {
    const { item } = this.props

    return (
      <Container>
        <Image />
        <RightContent>
          <Title>{item.name}</Title>
          <Subtitle>{item.short_description}</Subtitle>
        </RightContent>
      </Container>
    )
  }

}

PortfolioItemCell.propTypes = {
  item: PropTypes.object.isRequired
}
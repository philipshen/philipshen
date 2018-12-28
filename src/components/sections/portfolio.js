import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

import { Container } from './shared'
import Color from '../../styles/color'

const PortfolioContainer = styled(Container)`
  display: flex;
`

const LeftContent = styled.div`
  flex: 1;

  h1 {
    margin-bottom: ${rhythm(1/2)};
  }
`

const RightContent = styled.div`
  flex: 1;
`

const Subtitle = styled.h5`
  font-weight: normal;
  color: ${Color.subtitle_text};
`

export default class Portfolio extends Component {

  render() {
    return (
      <PortfolioContainer>
        <LeftContent>
          <h1>Portfolio</h1>
          <Subtitle>Here's a little gallery for me to showcase my work...projects completed, art made, all that stuff.</Subtitle>
        </LeftContent>
        <RightContent />
      </PortfolioContainer>
    )
  }

}
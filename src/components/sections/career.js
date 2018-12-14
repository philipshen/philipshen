import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

import { Container } from './shared'

import Color from '../../styles/color'

const Section = styled.div`
  flex: 1;
  margin-bottom: ${rhythm(1)};
`

const Title = styled.h2`
  margin-bottom: ${rhythm(1/2)};
`

const Subtitle = styled.h5`
  color: ${Color.subtitle_text};
  font-weight: normal;
`

export default class Career extends Component {

  render() {
    return (
      <Container>
        <h1>Career</h1>
        <div style={{display: 'flex'}}>
          <Section style={{marginRight: '1rem'}}>
            <Title>Skills</Title>
            <Subtitle>
              I don't even have any good skills. You know like nunchuck skills, bowhunting skills, computer hacking skills...
            </Subtitle>
          </Section>
          <Section>
            <Title>Tools</Title>
            <Subtitle>
              Why do you have, like, a bunch of weird tools in a hidden compartment in your car?
            </Subtitle>
          </Section>
        </div>
        <Section>
          <Title>Timeline</Title>
          <Subtitle>A timeline of all my experience</Subtitle>
        </Section>
        <Section>
          <Title>Certifications</Title>
        </Section>
      </Container>
    )
  }

}
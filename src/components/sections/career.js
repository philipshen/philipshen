import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

import { Container } from './shared'
import SkillBar from '../skill-bar'
import Timeline from '../timeline'

import Color from '../../styles/color'

import skills from '../../data/career/skills'

const Section = styled.div`
  flex: 1;
  margin-bottom: ${rhythm(2)};
`

const Title = styled.h2`
  margin-bottom: ${rhythm(1/2)};
`

const Subtitle = styled.h5`
  color: ${Color.subtitle_text};
  font-weight: normal;
  margin-bottom: ${rhythm(1)};
`

const BarContainer = styled.div`

`

const ExperienceTimeline = styled(Timeline)`
  overflow: visible;
`

export default class Career extends Component {

  constructor(props) {
    super(props)

    const numberOfTopSkills = 5

    this.topSkills = []
    const skillValues = skills.values()
    for (let i = 0; i < numberOfTopSkills; i++) {
      const skill = skillValues.next()
      if (skill.done) break
      this.topSkills.push(skill.value)
    }
  }

  render() {
    return (
      <Container>
        <h1 style={{marginBottom: rhythm(2)}}>Career</h1>
        <div style={{display: 'flex'}}>
          <Section style={{marginRight: '2rem'}}>
            <Title>Skills</Title>
            <Subtitle>
              I don't even have any good skills. You know like nunchuck skills, bowhunting skills, computer hacking skills...
            </Subtitle>
            <BarContainer>
              {
                this.topSkills.map(skill => 
                  <SkillBar key={skill.key} skill={skill} />
                )
              }
            </BarContainer>
          </Section>
          <Section>
            <Title>Tools</Title>
            <Subtitle>
              Why do you have, like, a bunch of weird tools in a hidden compartment in your car?
            </Subtitle>
            <BarContainer>
            </BarContainer>
          </Section>
        </div>
        <Section>
          <Title>Timeline</Title>
          <Subtitle>A timeline of all my experience</Subtitle>
          <ExperienceTimeline />
        </Section>
      </Container>
    )
  }

}
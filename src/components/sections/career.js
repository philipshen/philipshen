import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'
import { Link } from 'gatsby'

import { Container, horizontalMargin } from './shared'
import SkillBar from '../skill-bar'
import Timeline from '../timeline'

import Color from '../../styles/color'
import { media } from '../../styles/style-utils'

import skills from '../../data/career/skills'
import tools from '../../data/career/tools'

const CareerContainer = styled(Container)`
  padding-left: 0;
  padding-right: 0;
`

const CareerTitle = styled.h1`
  margin-bottom: ${rhythm(2)};
  margin-left: ${horizontalMargin};
`

const ToolsAndSkillsContainer = styled.div`
  display: flex;
  margin-left: ${horizontalMargin};
  margin-right: ${horizontalMargin};

  ${media.handheld`
    flex-direction: column;
  `}
`

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
  margin-bottom: ${rhythm(3/2)};
`

const BarContainer = styled.div`
  margin-bottom: ${rhythm(3/2)};
`

const ExperienceTimeline = styled(Timeline)`
  overflow: visible;
`

const MoreLink = styled(Link)`
  text-decoration: none;
  color: ${Color.blue};

  h5 {
    color: ${Color.blue};
  }

  :hover {
    text-decoration: underline;
  }
`

export default class Career extends Component {

  constructor(props) {
    super(props)

    // This is the max, just bc of how the loop is written
    const numberOfTopSkills = 5

    this.topSkills = []
    this.topTools = []
    const skillValues = skills.values()
    const toolValues = tools.values()
    for (let i = 0; i < numberOfTopSkills; i++) {
      // Add top skill
      const skill = skillValues.next()
      if (skill.done) break
      this.topSkills.push(skill.value)

      // Add top break
      const tool = toolValues.next()
      if (tool.done) break
      this.topTools.push(tool.value)
    }
  }

  render() {
    return (
      <CareerContainer>
        <CareerTitle>Career</CareerTitle>
        <ToolsAndSkillsContainer>
          <Section style={{marginRight: '2rem'}}>
            <Title>Skills</Title>
            <Subtitle>
              I don't even have any good skills. You know like nunchuck skills, bowhunting skills, computer hacking skills...
            </Subtitle>
            <BarContainer>
              {
                this.topSkills.map(skill => 
                  <SkillBar
                    key={skill.key}
                    skill={skill}
                    link={`/skill/${skill.key}`}
                  />
                )
              }
            </BarContainer>
            <MoreLink to="/skills">
              <h5>
                More Skills >
              </h5>
            </MoreLink>
          </Section>
          <Section>
            <Title>Tools</Title>
            <Subtitle>
              Why do you have, like, a bunch of weird tools in a hidden compartment in your car?
            </Subtitle>
            <BarContainer>
              {
                this.topTools.map(tool => 
                  <SkillBar
                    key={tool.key}
                    skill={tool}
                    link={`/tool/${tool.key}`}
                  />
                )
              }
            </BarContainer>
            <MoreLink to="/tools">
              <h5>
                More Tools >
              </h5>
            </MoreLink>
          </Section>
        </ToolsAndSkillsContainer>
        <Section>
          <Title style={{
            marginLeft: horizontalMargin, 
            marginRight: horizontalMargin
          }}>
            Timeline
          </Title>
          <Subtitle style={{
            marginLeft: horizontalMargin,
            marginRight: horizontalMargin
          }}>
            A timeline of all my experience
          </Subtitle>
          <ExperienceTimeline />
        </Section>
      </CareerContainer>
    )
  }

}
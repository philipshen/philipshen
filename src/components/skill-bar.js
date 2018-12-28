import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import { SkillLevel, SkillLevelConfig } from '../models/skill-level'

const Image = styled.div`
  height: ${rhythm(5/2)};
  width: ${rhythm(5/2)};
  border-radius: ${rhythm(5/4)};
  border: 2px solid ${props => props.color};
`

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`

const Title = styled.h5`
  margin-bottom: ${rhythm(1/2)};
`

const BarContainer = styled.div`
  display: flex;
  align-items: center;
`

const Bar = styled.div`
  width: ${props => ((props.level + 1) / Object.keys(SkillLevel).length) * 100}%;
  background-color: ${props => props.color};
  height: 16px;
  border-radius: 4px;
`

const SkillLevelLabel = styled.h6`
  font-weight: normal;
  font-size: 15;
  margin-bottom: 0;
  margin-left: 12px;
`

const Container = styled.div`
  display: flex;
  margin-bottom: ${rhythm(1)};

  cursor: pointer;

  :hover {
    ${Title} {
      text-decoration: underline;
    }
  }
`

export default class SkillBar extends Component {

  render() {
    const skillLevelConfig = SkillLevelConfig.get(this.props.skill.level)
    console.log(this.props.skill)
    console.log(skillLevelConfig)

    return (
      <Container>
        <Image color={skillLevelConfig.color}></Image>
        <Content>
          <Title>{this.props.skill.name}</Title>
          <BarContainer>
            <Bar level={this.props.skill.level} color={skillLevelConfig.color}></Bar>
            <SkillLevelLabel>{skillLevelConfig.name}</SkillLevelLabel>
          </BarContainer>
        </Content>
      </Container>
    )
  }

}

SkillBar.propTypes = {
  skill: PropTypes.object.isRequired
}
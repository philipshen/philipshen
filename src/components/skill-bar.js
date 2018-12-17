import React, { Component } from 'react';
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import { SkillLevel, SkillLevelConfig } from '../models/skill-level'

const Container = styled.div`
  display: flex;
`

const Image = styled.div`
  height: ${rhythm(5/2)};
  width: ${rhythm(5/2)};
  border-radius: ${rhythm(5/4)};
  background-color: lightcyan;
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
  flex: 1;
  background-color: ${props => SkillLevelConfig.get(props.level).color};
  height: 16px;
  border-radius: 4px;
`

const SkillLevelLabel = styled.h6`
  font-weight: normal;
  font-size: 15;
  margin-bottom: 0;
  margin-left: 12px;
`

export default class SkillBar extends Component {

  render() { 
      return (
        <Container>
          <Image></Image>
          <Content>
            <Title>Swift for iOS Development</Title>
            <BarContainer>
              <Bar level={SkillLevel.MASTER}></Bar>
              <SkillLevelLabel>Master</SkillLevelLabel>
            </BarContainer>
          </Content>
        </Container>
      )
  }

}
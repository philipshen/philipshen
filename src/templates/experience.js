import React from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'
import { getLongMonth } from '../utils/helpers'

import Layout from '../components/layout'
import Breadcrumbs from '../components/breadcrumbs'

import experiences from '../data/career/experience'

import { ExperienceTypeConfig } from '../models/experience-type'
import Color from '../styles/color'

const Container = styled.div`
  flex: 1;
  margin-left: 3vw;
  margin-right: 3vw;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${rhythm(1/2)};

  h1 {
    margin-bottom: 0;
  }
`

const TypeTagContainer = styled.div`
  display: flex;
  background-color: ${props => props.color};
  padding-left: 8px;
  padding-right: 8px;
  padding-top: ${rhythm(1/4)};
  padding-bottom: ${rhythm(1/4)};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  height: fit-content;
  margin-left: 16px;
`

const TypeTag = styled.h5`
  color: white;
  font-weight: normal;
  margin-bottom: 0;
`

const Date = styled.h4`
  color: ${Color.subtitle_text};
  font-weight: normal;
`

const Description = styled.p`
  line-height: ${rhythm(5/4)};
  max-width: 700px;
`

export default class Experience extends React.Component {

  render() {
    const experience = experiences[this.props.pageContext.experienceKey]
    const experienceTypeConfig = ExperienceTypeConfig.get(experience.type)

    return (
      <Layout spacer={true}>
        <Container>
          <Breadcrumbs
            crumbs={[
              {to: "/#career", name: "Career"},
              {to: "/#career", name: "Timeline"}
            ]}
          />
          <TitleContainer>
            <h1>
              {experience.title && experience.title}
              {experience.title && experience.organization && ' - '}
              {experience.organization && experience.organization}
            </h1>
            <TypeTagContainer color={experienceTypeConfig.color}>
              <TypeTag>
                {experienceTypeConfig.name}
              </TypeTag>
            </TypeTagContainer>
          </TitleContainer>
          <Date>
            {getLongMonth(experience.start_date.getMonth())} {experience.start_date.getFullYear()}
            {
              experience.end_date
              ?
              ` - ${getLongMonth(experience.end_date.getMonth())} ${experience.end_date.getFullYear()}`
              :
              ` - Present`
            }
          </Date>
          <Description>{experience.description}</Description>
        </Container>
      </Layout>
    )
  }

}
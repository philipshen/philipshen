import React, { Component } from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Breadcrumbs from '../components/breadcrumbs'

import skills from '../data/career/skills'
import tools from '../data/career/tools'

const Container = styled.div`
  margin-left: 3vw;
  margin-right: 3vw;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-bottom: 0;
  }
`

export default class Skill extends Component {

  render() {
    const context = this.props.pageContext
    const skillInfo = context.datasource === 'skills' ? skills.get(context.key) : tools.get(context.key)
    // The breadcrumb at the top is just the datasource
    // basically, type datasource = 'skills' | 'tools'
    const crumb = context.datasource.charAt(0).toUpperCase() + context.datasource.slice(1)

    return (
      <Layout spacer={true}>
        <Container>
          <Breadcrumbs
            crumbs={[
              {to: '/#career', name: crumb}
            ]}
          />
          <TitleContainer>
            <h1>{skillInfo.name}</h1>
          </TitleContainer>
        </Container>
      </Layout>
    )
  }

}
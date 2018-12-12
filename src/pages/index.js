// @flow
import React, { Component } from 'react'
import Waypoint from 'react-waypoint'

import { Section } from '../models/header-config.js'

import Layout from '../components/layout'

import Home from '../components/sections/home'
import Blog from '../components/sections/blog'

class IndexPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      scrolledSection: Section.HOME
    }
  }

  render() {
    return (
      <Layout
        shouldHideHeader={this.state.scrolledSection !== Section.HOME}
        currentHeaderSection={this.state.scrolledSection}
      >
        <Waypoint
          onEnter={() => this.setState({scrolledSection: Section.HOME})}
          onLeave={() => this.setState({scrolledSection: Section.BLOG})}
        >
          <div>
            <Home />
          </div>
        </Waypoint>
        <Waypoint
          onEnter={() => this.setState({scrolledSection: Section.BLOG})}
        >
          <div>
            <Blog />
          </div>
        </Waypoint>
      </Layout>
    )
  }

}

export default IndexPage

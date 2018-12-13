// @flow
import React, { Component } from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'
import { media } from '../styles/style-utils'

import { Section } from '../models/header-config.js'

import Layout from '../components/layout'

import Home from '../components/sections/home'
import Career from '../components/sections/career'
import Portfolio from '../components/sections/portfolio'
import Blog from '../components/sections/blog'

const Anchor = styled.div`
  display: block;
  position: relative;
  visibility: hidden;

  /* This matches the header heights! */
  ${media.computer`
    top: -72px;
  `}

  ${media.tablet`
    top: -54px;
  `}

  ${media.phone`
    top: -44px;
  `}
`

class IndexPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      section: Section.HOME
    }
  }

  render() {
    /*
      TODO: We need to update the header. When an anchor tag is reached, the section should changed.
      The change depends on the direction of the scroll, too. If scrolling up, we're now
      in the previous section. Otherwise, we're in the old section.

      Waypoint ignores direction; enter is when something enters the screen anywhere, and 
      leave is when it leaves. not ideal :()
    */

    return (
      <Layout
        // shouldHideHeader={this.state.scrolledSection !== Section.HOME}
        shouldHideHeader={false}
        currentHeaderSection={this.state.section}
      >
        <Home />
        <Anchor id="career">
          <Waypoint
            // onEnter={() => this.setState({section: Section.HOME})}
            // onLeave={() => this.setState({section: Section.CAREER})}
          />
        </Anchor>
        <Career />
        <Anchor id="portfolio">
          <Waypoint
            // onEnter={() => this.setState({section: Section.CAREER})}
            // onLeave={() => this.setState({section: Section.PORTFOLIO})}
          />
        </Anchor>
        <Portfolio />
        <Anchor id="blog">
          <Waypoint
            // onEnter={() => this.setState({section: Section.PORTFOLIO})}
            // onLeave={() => this.setState({section: Section.BLOG})}
          />
        </Anchor>
        <Blog />
      </Layout>
    )
  }

}

export default IndexPage

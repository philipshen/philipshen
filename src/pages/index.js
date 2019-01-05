import React, { Component } from 'react'
import styled from 'styled-components'
import Waypoint from 'react-waypoint'
import { rhythm } from '../utils/typography'

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

  /* This matches the header heights! Plus padding for good measure */
  top: -${rhythm(1)};
`

export default class IndexPage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      section: Section.HOME,
      portfolioReversed: false
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
        shouldHideHeader={this.state.section !== Section.HOME}
        currentHeaderSection={this.state.section}
      >
        <Home />
        <Anchor id="career">
          <Waypoint
            onEnter={({ previousPosition }) => {
              // We're "leaving" a section (i.e. changing the state.section) once we scroll UP past its header
              // We're "entering" a section once we scroll DOWN... all the way until it's fully on the screen
              if (previousPosition === 'above') {
                this.setState({section: Section.HOME})
              }
            }}
            onLeave={({ currentPosition }) => {
              if (currentPosition === 'above') {
                this.setState({section: Section.CAREER})
              }
            }}
          />
        </Anchor>
        <Career />
        <Anchor id="portfolio">
          <Waypoint
            onEnter={({ previousPosition }) => {
              if (previousPosition === 'above') {
                this.setState({section: Section.CAREER})
              }
            }}
            onLeave={({ currentPosition }) => {
              if (currentPosition === 'above') {
                this.setState({
                  section: Section.PORTFOLIO,
                  portfolioReversed: true
                })
              }
            }}
          />
        </Anchor>
        <Portfolio colorsReversed={this.state.portfolioReversed}/>
        <Anchor id="blog">
          <Waypoint
            onEnter={({ previousPosition }) => {
              if (previousPosition === 'above') {
                this.setState({section: Section.PORTFOLIO})
              }
            }}
            onLeave={({ currentPosition }) => {
              if (currentPosition === 'above') {
                this.setState({section: Section.BLOG})
              }
            }}
          />
        </Anchor>
        <Blog />
      </Layout>
    )
  }

}

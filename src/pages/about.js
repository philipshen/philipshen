import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

import { Section } from '../models/header-config'
import Color from '../styles/color'

import Layout from '../components/layout'

const Container = styled.div`
  padding-left: 3vw;
  padding-right: 3vw;
  padding-top: ${rhythm(1)};

  h1 {
    margin-bottom: ${rhythm(2)};
  }

  a {
    color: ${Color.blue};
    text-decoration: none;
  }

  p {
    margin-bottom: ${rhythm(2)};
  }
`

// Just make it easier to write this out...
const qAndA = {
  "Who made this site?": "Phil",
  "How is this site so dang fast?": `This site is powered by ${makeLink('gatsbyjs.org', 'Gatsby')}!`,
  "How does this site look so nice?": `This site was made with the help of ${makeLink('styled-components.com', 'styled-components')} and ${makeLink('material-ui.com/style/icons/', 'Material Icons')}`,
  "Why does this site seem unfinished?": `Because it is. I got a bit busy, and functionally it did what I need it to, so I decided to put it on hold for a while.`
}

function makeLink(url, text) {
  return `<a href="https://${url}" target="_blank" rel="noopener noreferrer">${text}</a>`
}

export default class AboutPage extends Component {

  render() {
    return (
      <Layout
        spacer={true}
        currentHeaderSection={Section.ABOUT}
      >
        <Container>
          <h1>About</h1>
          {
            Object.keys(qAndA).map(key => {
              return (
                <div>
                  <h4>{key}</h4>
                  <p dangerouslySetInnerHTML={{__html: qAndA[key]}} />
                </div>
              )
            })
          }
        </Container>
      </Layout>
    )
  }

}
import React, { Component } from 'react'
import styled from 'styled-components'
import ContactButtons from './contact-buttons'
import { rhythm } from '../utils/typography'

import Color from '../styles/color.js'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${rhythm(1)};
  align-items: center;
  background-color: ${Color.light_gray};
`

const CopyrightText = styled.p`
  margin-top: ${rhythm(1/2)};
  margin-bottom: ${rhythm(3/4)};
  font-size: ${rhythm(3/4)};
  color: ${Color.subtitle_text};
`

class Footer extends Component {

  render() {
    return (
      <Container>
        <ContactButtons />
        <CopyrightText>Copyright 2019, Philip Shen</CopyrightText>
      </Container>
    )
  }

}

export default Footer
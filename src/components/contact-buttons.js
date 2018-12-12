import React, { Component } from 'react'
import styled from 'styled-components'
import Icon from './svg-icons'
import { media } from '../styles/style-utils.js'

const Container = styled.div`
  display: inline-flex;
`

const Button = styled.div`
  height: 32px;
  width: 32px;
  margin-left: 12px;
  margin-right: 12px;

  ${media.large`
    height: 40px;
    width: 40px;
  `}
`

interface ButtonInfo {
  iconName: string;
  link: string;
}

const contactButtons: ButtonInfo[] = [
  {iconName: 'email', link: 'mailto:philphilphil.hello@gmail.com'},
  {iconName: 'medium', link: 'https://medium.com/@philipshen13'},
  {iconName: 'linkedin', link: 'https://www.linkedin.com/in/phil-shen/'},
  {iconName: 'github', link: 'https://github.com/philipshen'},
  {iconName: 'stackoverflow', link: 'https://stackoverflow.com/users/7416008/philip-s'},
]

class ContactButtons extends Component {

  render() {
    return (
      <Container>
        {
          contactButtons.map((buttonInfo: ButtonInfo) => (
            <Button>
              <a href={buttonInfo.link}  target="_blank" rel="noopener noreferrer">
                <Icon name={buttonInfo.iconName} viewBox={buttonInfo.iconName === 'email' ? '0 0 35 28' : '0 0 32 32'}/>
              </a>
            </Button>
          ))
        }
      </Container>
    )
  }

}

export default ContactButtons


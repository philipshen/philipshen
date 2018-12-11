// @flow
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import disableScroll from 'disable-scroll'

import Logo from './logo'
import { Menu } from '@material-ui/icons'

import Color from '../styles/color'
import { media } from '../styles/style-utils'

const HeaderContainer = styled.div`
  display: flex;
  background-color: white;
  width: 100%;
  z-index: 99;

  /* For some reason, these styles aren't applied if directly set to MenuButton... */
  .menuButton {
    display: none;
    margin-left: 12px;
    height: 40px;
    width: 40px;
    transition: transform 200ms;
  }

  .headerFooting {
    display: none;
    flex: 1 !important;
    width: 100%;
    align-items: flex-end;
    min-height: 40px;
  }

  .headerDivider {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 8px;
    background-color: ${Color.primary_color};
  }

  ${media.phone`
    /* Collapse the nav bar */
    h5 {
      font-weight: normal;
    }

    .headerButton {
      flex: 0.15;
      margin-left: 16px;
    }

    .logo {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .headerFooting {
      display: flex;
    }

    .menuButton {
      display: block;
    }

    .headerDivider {
      display: block;
    }
  `};

  ${media.tablet`
    height: 54px;
    padding-left: 20px;
    padding-top: 16px;
  `}

  ${media.computer`
    height: 72px;
    padding-left: 24px;
    padding-top: 16px;
  `}
`

// Just calc this here for convenience
const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  z-index: 2;

  ${media.phone`
      position: fixed !important;
      right: 100%;
      height: 100vh;
      width: 60%;
      padding-right: 32px;
      display: inline-flex;
      flex-direction: column;
      align-items: flex-start;

      transition: transform 300ms ease-in-out;
      transform: ${props => props.visible && `translate(100%)`};
  `}
`

const Overlay = styled.div`
  display: none;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0.2;
  z-index: 1;

  /* Only ever visible on phone, with collapsing header */
  ${media.phone`
    display: ${props => props.visible ? 'block' : 'none'};
  `}
`

const HeaderButton = styled(Link)`
  text-decoration: none;
  color: ${Color.dark_text};
  margin-left: 100;

  ${media.handheld`
    margin-right: 24px;
  `}

  ${media.computer`
    margin-right: 36px;
  `}

  ${media.large`
    margin-right: 48px;
  `}

  :hover {
    opacity: 0.8;
  }
`

// Most styles are in the "HeaderContainer" styles. Didn't work when put here.
const MenuButton = styled(Menu)`
  :hover {
    opacity: 0.8;
  }

  transform: ${props => props.buttonsVisible ? 'rotate(180deg)' : 'rotate(0deg)'};
`

interface HeaderButtonData {
  name: string;
  to: string;
}

class Header extends React.Component {

  constructor(props) {
    super(props)

    this.buttons = [
      {to: "/", name: 'Home'},
      {to: "/", name: 'Career'},
      {to: "/", name: 'Portfolio'},
      {to: "/", name: 'Blog'}
    ]

    this.state = {
      visible: false // Only going to be applicable to phones
    }
  }

  render() {
    return (
      <HeaderContainer>
        {/* COLLAPSED HEADER ON MOBILE */}
        <MenuButton
          className={'menuButton'}
          onClick={this.toggleHeaderVisibility.bind(this)}
          buttonsVisible={this.state.visible}
        />
        <Overlay
          visible={this.state.visible}
          onClick={this.toggleHeaderVisibility.bind(this)}
        />
        {/* EXPANDED HEADER ON DESKTOP */}
        <HeaderButtonsContainer
          visible={this.state.visible}  
        >
          <HeaderButton
            to="/"
            className={'headerButton logo'}
          >
            <Logo />
          </HeaderButton>
          {
            this.buttons.map((buttonData: HeaderButtonData) => {
              return (
                <HeaderButton
                  key={buttonData.name}
                  to={buttonData.to}
                  className={'headerButton'}
                >
                  <h5>{buttonData.name}</h5>
                </HeaderButton>
              )
            })
          }
          <div className={'headerFooting headerButton'}>
            <HeaderButton
            >
              <h5>
                Contact Me
              </h5>
            </HeaderButton>
          </div>
          <div className={'headerDivider'} />
        </HeaderButtonsContainer>
      </HeaderContainer>
    )
  }

  toggleHeaderVisibility() {
    this.setState(({ visible }) => {
      if (visible)
        disableScroll.off()
      else
        disableScroll.on()

      return {
        visible: !visible
      }
    })
  }

}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: ''
}

export default Header

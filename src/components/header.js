// @flow
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Logo from './logo'
import { Menu } from '@material-ui/icons'

import Color from '../styles/color'
import { media } from '../styles/style-utils'

const HeaderContainer = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  width: 100%;

  .menuButton {
    color: ${Color.dark_text};
    margin-left: 12px;
    display: none;
    height: 40px;
    width: 40px;
  }

  ${media.phone`
    height: 44px;

    /* Collapse the nav bar */
    .headerButton {
      display: none;
    }

    .menuButton {
      display: block;
    }
  `};

  ${media.tablet`
    height: 54px;
    padding-left: 20px;
    padding-top: 16px;
  `}

  ${media.normal`
    height: 72px;
    padding-left: 24px;
    padding-top: 16px;
  `}

`

const HeaderButton = styled(Link)`
  text-decoration: none;
  color: ${Color.dark_text};
  margin-left: 100;

  ${media.handheld`
    margin-right: 24px;
  `}

  ${media.normal`
    margin-right: 36px;
  `}

  ${media.large`
    margin-right: 48px;
  `}

  :hover {
    opacity: 0.8;
  }
`

const HeaderLogo = styled(Logo)`
  background-color: red;
`

// Most styles are in the "HeaderContainer" styles. Didn't work when put here.
const MenuButton = styled(Menu)`
  :hover {
    opacity: 0.8;
  }
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
      collapsed: true
    }
  }

  render() {
    return (
      <HeaderContainer>
        {/* COLLAPSED HEADER ON MOBILE */}
        <MenuButton className={'menuButton'} />
        {/* EXPANDED HEADER ON DESKTOP */}
        <HeaderButton
          to="/"
          className={'headerButton'}
        >
          <HeaderLogo />
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
      </HeaderContainer>
    )
  }

}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: '',
}

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Headroom from 'react-headroom'

import { media } from '../styles/style-utils'

import Header from './header'
import Footer from './footer'

import './layout-styles.css'

const Spacer = styled.div`
  /* This matches the header size. */
  ${media.phone`
    height: 44px;
  `}

  ${media.tablet`
    height: 54px;
  `}

  ${media.computer`
    height: 72px;
  `}
`

export const Layout = props => (
  (
    <>
      <Helmet
        title={"Philip Shen"}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      >
        <html lang="en" />
      </Helmet>
      {
        props.blockHeader
        ?
        <Header
          title={"Title"}
          currentSection={props.currentHeaderSection}
        />
        :
        <Headroom
          wrapperStyle={{position: 'fixed', zIndex: 98, width: '100%'}}
          disable={!props.shouldHideHeader}
        >
          <Header
            title={"Title"}
            currentSection={props.currentHeaderSection}
          />
        </Headroom>
      }
      <div style={{zIndex: -1, overflow: 'hidden', minHeight: '100vh'}}>
        {props.spacer ? <Spacer /> : null}
        {props.children}
      </div>
      <Footer />
    </>
  )
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  blockHeader: PropTypes.bool,
  shouldHideHeader: PropTypes.bool,
  currentHeaderSection: PropTypes.number.isRequired, // Must be from 'Section' pseudo-enum
  spacer: PropTypes.bool
}

Layout.defaultProps = {
  shouldHideHeader: true
}

export default Layout

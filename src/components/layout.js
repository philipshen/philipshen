import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Headroom from 'react-headroom'

import Header from './header'
import Footer from './footer'

import './layout-styles.css'

class Layout extends Component {

  render() {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'description', content: 'Sample' },
                { name: 'keywords', content: 'sample, something' },
              ]}
            >
              <html lang="en" />
            </Helmet>
            {
              this.props.blockHeader
              ?
              <Header
                title={data.site.siteMetadata.title}
                currentSection={this.props.currentHeaderSection}
              />
              :
              <Headroom
                wrapperStyle={{position: 'fixed', zIndex: 98, width: '100%'}}
                disable={!this.props.shouldHideHeader}
              >
                <Header
                  title={data.site.siteMetadata.title}
                  currentSection={this.props.currentHeaderSection}
                />
              </Headroom>
            }
            <div style={{zIndex: -1, overflow: 'hidden', minHeight: '100vh'}}>
              {this.props.children}
            </div>
            <Footer />
          </>
        )}
      />
    )
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  blockHeader: PropTypes.boolean,
  shouldHideHeader: PropTypes.boolean,
  currentHeaderSection: PropTypes.number.isRequired // Must be from 'Section' pseudo-enum
}

Layout.defaultProps = {
  shouldHideHeader: true
}

export default Layout

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'

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
            <Header
              title={data.site.siteMetadata.title}
            />
            <div>
              {this.props.children}
            </div>
          </>
        )}
      />
    )
  }

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

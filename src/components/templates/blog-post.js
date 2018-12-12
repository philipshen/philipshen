import React, { Component } from 'react'

import Layout from '../layout.js'

class BlogPost extends Component {

  render() {
    return (
      <Layout blockHeader={true}>
        <p>Hello there, my guys!</p>
      </Layout>
    )
  }

}

export default BlogPost
import React, { Component } from 'react'
import styled from 'styled-components'

import BlogPostCell from '../blog-post-cell'

import blogPosts from '../../data/blog/_blog-posts'

const Container = styled.div`
  min-height: 100vh;
  padding-left: 3vw;
  padding-right: 3vw;
`

const Content = styled.div`
  display: flex;
`

const Posts = styled.div`
  flex: 3;
`

const Filters = styled.div`
  flex: 2;
  background-color: lightcyan;
`

class Blog extends Component {

  render() {
    return (
      <Container>
        <h1>Blog</h1>
        <Content>
          <Posts>
            {
              blogPosts.map((post) => (
                <BlogPostCell post={post} />
              ))
            }
          </Posts>
          <Filters>
          </Filters>
        </Content>
      </Container>
    )
  }

}

export default Blog
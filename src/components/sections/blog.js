import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'

import { Container } from './shared'
import BlogPostCell from '../blog-post-cell'

import blogPosts from '../../data/blog/_blog-posts'

const BlogContainer = styled(Container)`
  margin-bottom: ${rhythm(4)};
`

const Content = styled.div`
  display: flex;
`

const Posts = styled.div`
  flex: 3;
`

const Filters = styled.div`
  flex: 2;
`

export default class Blog extends Component {

  render() {
    return (
      <BlogContainer>
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
      </BlogContainer>
    )
  }

}
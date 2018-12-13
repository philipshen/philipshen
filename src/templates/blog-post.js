import React, { Component } from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import Color from '../styles/color'

import { rhythm } from '../utils/typography'

import Layout from '../components/layout.js'

const BlogContainer = styled.div`
  margin: auto;
  max-width: 700px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: ${rhythm(2)};
  align-items: center;
  padding-bottom: ${rhythm(4)};

  h2 {
    padding-top: ${rhythm(3/2)};
  }

  h3 {
    padding-top: ${rhythm(5/4)};
  }

  p {
    line-height: ${rhythm(3/2)};
  }
`

const TitleText = styled.h1`
  margin-bottom: ${rhythm(1/2)};
`

const DateText = styled.h4`
  font-weight: normal;
  color: ${Color.subtitle_text};
`

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout blockHeader={true}>
      <BlogContainer>
        <TitleText>{post.frontmatter.title}</TitleText>
        <DateText>{post.frontmatter.date}</DateText>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </BlogContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
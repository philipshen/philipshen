import React from 'react'
import styled from 'styled-components'
import { graphql, Link } from 'gatsby'
import { rhythm } from '../utils/typography'

import Layout from '../components/layout.js'
import Tag from '../components/tag'

import Color from '../styles/color'

const BlogContainer = styled.div`
  margin: auto;
  max-width: 700px;
  padding-left: 12px;
  padding-right: 12px;
  margin-top: ${rhythm(1)};
  align-items: center;
  padding-bottom: ${rhythm(8)};

  h2 {
    padding-top: ${rhythm(3/2)};
  }

  h3 {
    padding-top: ${rhythm(5/4)};
  }

  p {
    line-height: ${rhythm(3/2)};
  }

  a {
    color: ${Color.blue};
    text-decoration: none;
  }

  li {
    line-height: ${rhythm(3/2)};
  }

  blockquote {
    font-style: italic;
    color: ${Color.subtitle_text};
    border-left: 8px solid ${Color.light_gray};
    margin-left: 0;
    padding-left: 1em;
  }
`

const TitleText = styled.h1`
  margin-bottom: ${rhythm(1/2)};
`

const TagContainer = styled.div`
  display: flex;
  margin-bottom: ${rhythm(1)};
`

const Metadata = styled.h5`
  font-weight: normal;
  color: ${Color.subtitle_text};
  margin-bottom: ${rhythm(1/4)};
`

const MetadataContainer = styled.div`
  margin-bottom: ${rhythm(1)};
  padding-bottom: ${rhythm(3/4)};
  padding-top: ${rhythm(1)};
  border-top: 1px solid ${Color.light_gray};
  border-bottom: 1px solid ${Color.light_gray};
`

const BackLink = styled(Link)`
  text-decoration: none;

  h5 {
    color: ${Color.subtitle_text};
    font-weight: normal;
  }

  :hover {
    text-decoration: underline;
  }

  :active {
    text-decoration-color: ${Color.subtitle_text};
  }
`

export default props => {
  const post = props.data.markdownRemark

  return (
    <Layout spacer={true}>
      <BlogContainer>
        <BackLink
          to="/#blog"
        >
          <h5>{'< '} Back to blog</h5>
        </BackLink>
        <TitleText>{post.frontmatter.title}</TitleText>
        <TagContainer>
          {
            post.frontmatter.tags.map(tag => {
              return <Tag key={tag} tag={tag} />
            })
          }
        </TagContainer>
        <MetadataContainer>
          <Metadata>
            {post.frontmatter.date}
          </Metadata>
          <Metadata>
            {post.timeToRead} min read
          </Metadata>
          {
            post.frontmatter.author &&
            <Metadata>
              {post.frontmatter.media} written by {post.frontmatter.author}{' '}
              {
                post.frontmatter.link &&
                <>
                  •{' '}
                  <a href={post.frontmatter.link} target="_blank" rel="noopener noreferrer">
                    Link
                  </a>
                </>
              }
            </Metadata>
          }
        </MetadataContainer>
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </BlogContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
        author
        media
        link
      }
    }
  }
`
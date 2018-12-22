import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'
import { getFormattedDate } from '../utils/helpers'

import Icon from './svg-icons'

import tags from '../data/blog/_tags.js'

import Color from '../styles/color'

const Container = styled.div`
  padding-top: ${rhythm(1/2)};
  padding-bottom: ${rhythm(1/2)};
  margin-bottom: ${rhythm(3/4)};

  :hover {
    h4, h5 {
      text-decoration: underline;
    }
  }

  .link {
    display: flex;
    justify-content: space-between;
    text-decoration: none;
  }
`

const Title = styled.h4`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`

const Date = styled.h5`
  font-weight: normal;
  color: ${Color.subtitle_text};
  margin-bottom: 0;
`

const TagContainer = styled.div`
  max-width: 40%;
`

const Tag = styled.h6`
  background-color: ${props => props.color};
  padding-top: ${rhythm(1/8)};
  padding-bottom: ${rhythm(1/8)};
  padding-left: 8px;
  padding-right: 8px;
  margin-left: 12px;
  margin-bottom: ${rhythm(1/4)};
  border-radius: 4px;
  color: white;
  font-weight: normal;
  display: block;
  float: right;
  letter-spacing: 0.5px;
`

const MediumButton = styled.div`
  height: 20px;
  width: 20px;
  margin-left: 8px;
`

class BlogPostCell extends Component {

  render() {
    const Content = (
      <>
        <div>
          <Title>
            {this.props.post.title}
            {
              this.props.post.medium &&
              <MediumButton>
                <Icon name={'medium'} />
              </MediumButton>
            }
          </Title>
          <Date>{getFormattedDate(this.props.post.date)}</Date>
        </div>
        <TagContainer>
          {
            this.props.post.tags.map(tag => {
              const tagInfo = tags[tag]

              return (
                <Tag
                  key={tag}
                  color={tagInfo.color}
                >
                  {tag}
                </Tag>
              )
            })
          }
        </TagContainer>
      </>
    )

    return (
      <Container>
        {
          this.props.post.medium
          ?
          <a
            className="link"
            href={this.props.post.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Content}
          </a>
          :
          <Link
            className="link"
            to={this.props.post.url}
          >
            {Content}
          </Link>
        }
      </Container>
    )
  }

}

BlogPostCell.propTypes = {
  post: PropTypes.object.isRequired,
}

export default BlogPostCell
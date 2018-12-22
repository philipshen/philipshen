import React, { Component } from 'react'
import styled from 'styled-components'
import { rhythm } from '../../utils/typography'
import { StaticQuery, graphql } from 'gatsby'
import { media } from '../../styles/style-utils'
import { Tune } from '@material-ui/icons'

import { Container } from './shared'
import BlogPostCell from '../blog-post-cell'
import FilterCheckbox from '../filter-checkbox'

import Color from '../../styles/color'

import tags from '../../data/blog/_tags'
import mediumPosts from '../../data/blog/_medium-posts'

const FilterButtonAction = {
  CLEAR: 0,
  SET: 1
}

const Content = styled.div`
  flex: 3;
`

const Posts = styled.div`
  flex: 3;
`

const PostsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${rhythm(3/2)};

  h1 {
    margin-bottom: 0 !important;
  }
`

const FilterIcon = styled(Tune)`
  color: ${Color.dark_text};
  height: 32px !important;
  width: 32px !important;
  display: none !important;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }

  ${media.handheld`
    display: block !important;
  `}
`

const Filters = styled.div`
  flex: 2;
  margin-left: 3vw;

  ${media.handheld`
    display: none;
    /* position: fixed;
    top: 0;
    width: 100%; */
  `}
`

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  ::after {
    content: "";
    flex: auto;
  }
`

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rhythm(5/4)};

  h2 {
    height: ${rhythm(2)};
    margin-top: ${rhythm(1/2)};
  }

  h2, h4 {
    margin-bottom: 0;
  }

  h4 {
    margin-top: ${rhythm(1/4)};
    font-weight: normal;
    color: ${Color.blue};
    cursor: pointer;
  }
`

const BlogContainer = styled(Container)`
  display: flex;
  margin-bottom: ${rhythm(4)};
`

export default class Blog extends Component {

  constructor(props) {
    super(props)

    // Opposite filter. Items in this set are NOT filtered out
    this.state = {
      currentFilters: new Set(Object.keys(tags)),
      filterAction: FilterButtonAction.CLEAR
    }

    this.addFilterTag = this.addFilterTag.bind(this)
    this.removeFilterTag = this.removeFilterTag.bind(this)
    this.getSortedBlogPosts = this.getSortedBlogPosts.bind(this)
    this.checkboxRefs = {}
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    tags
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const blogPosts = this.getSortedBlogPosts(
            data.allMarkdownRemark.edges.map(post => ({
              ...post.node.frontmatter,
              url: post.node.fields.slug
            })),
            mediumPosts
          )

          return (
            <BlogContainer>
              <Content>
                <PostsHeader>
                  <h1>Blog</h1>
                  <FilterIcon
                    onClick={() => console.log('Hello Inka')}
                  />
                </PostsHeader>
                <Posts>
                  {
                    blogPosts.map((post) => {
                      let dontFilter = false
                      for (const tag of post.tags) {
                        if (this.state.currentFilters.has(tag)) {
                          dontFilter = true
                          break
                        }
                      }
                      
                      if (dontFilter)
                        return (
                          <BlogPostCell post={post} key={post.title} />
                        )
                      else
                        return null
                    })
                  }
                </Posts>
              </Content>
              <Filters>
                <FilterHeader>
                  <h2>Filter</h2>
                  <h4 onClick={() => {
                    let newFilters
                    let newAction
                    let checkboxAction

                    switch (this.state.filterAction) {
                      case FilterButtonAction.CLEAR:
                        newFilters = new Set()
                        newAction = FilterButtonAction.SET
                        checkboxAction = 'deselect'
                        break
                      case FilterButtonAction.SET:
                        newFilters = new Set(Object.keys(tags))
                        newAction = FilterButtonAction.CLEAR
                        checkboxAction = 'select'
                        break
                      default:
                        break
                    }

                    Object.keys(this.checkboxRefs).forEach(ref => this.checkboxRefs[ref][checkboxAction]())
                    this.setState({currentFilters: newFilters, filterAction: newAction})
                  }}>
                    {
                      this.state.filterAction === FilterButtonAction.CLEAR
                      ?
                      "Clear All"
                      :
                      "Set All"
                    }
                  </h4>
                </FilterHeader>
                <FilterContainer>
                  {
                    Object.keys(tags).map(key => {
                      const tag = tags[key]
                      
                      // Todo: Handle subtags
                      return (
                        <FilterCheckbox
                          key={key}
                          name={tag.name}
                          ref={ref => this.checkboxRefs[key] = ref}
                          onPress={selected => {
                            if (selected)
                              this.addFilterTag(tag.name)
                            else
                              this.removeFilterTag(tag.name)
                          }}
                          color={tag.color}
                        />
                      )
                    })
                  }
                </FilterContainer>
              </Filters>
            </BlogContainer>
          )
        }}
      />
    )
  }

  addFilterTag(tag) {
    this.setState(({ currentFilters }) => ({
      currentFilters: new Set(currentFilters.add(tag)),
      filterAction: FilterButtonAction.CLEAR
    }))
  }

  removeFilterTag(tag) {
    this.setState(({ currentFilters }) => {
      const newFilters = new Set(currentFilters)
      newFilters.delete(tag)

      let filterAction = newFilters.size === 0 ? FilterButtonAction.SET : FilterButtonAction.CLEAR
      return {currentFilters: newFilters, filterAction}
    })
  }

  getSortedBlogPosts(mdBlogs, mediumBlogs) {
    let mdPointer = 0
    let mediumPointer = 0

    let blogPosts = []
    while (mdPointer < mdBlogs.length && mediumPointer < mediumBlogs.length) {
      if (mdBlogs[mdPointer].date < mediumBlogs[mediumPointer].date) {
        blogPosts.push(mediumBlogs[mediumPointer])
        mediumPointer++
      } else {
        blogPosts.push(mdBlogs[mdPointer])
        mdPointer++
      }
    }

    blogPosts = blogPosts.concat(mdBlogs.slice(mdPointer))
    blogPosts = blogPosts.concat(mediumBlogs.slice(mediumPointer))
    
    return blogPosts
  }

}
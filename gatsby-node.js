const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const experiences = require(`./src/data/career/experience`)
const skills = require(`./src/data/career/skills`)
const tools = require(`./src/data/career/tools`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // Create pages for experiences
  Object.keys(experiences).forEach(key => {
    // const experience = experiences(key)
    createPage({
      path: `experience/${key}`,
      component: path.resolve(`./src/templates/experience.js`),
      context: {
        experienceKey: key
      }
    })
  })

  // Create pages for skills
  skills.forEach(skill => {
    createPage({
      path: `skill/${skill.key}`,
      component: path.resolve(`./src/templates/skill.js`),
      context: {
        key: skill.key,
        datasource: 'skills'
      }
    })
  })

  // Create pages for tools
  tools.forEach(tool => {
    createPage({
      path: `tool/${tool.key}`,
      component: path.resolve(`./src/templates/skill.js`),
      context: {
        key: tool.key,
        datasource: 'tools'
      }
    })
  })

  // Create blog post pages
  return new Promise(resolve => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `blog${node.fields.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}
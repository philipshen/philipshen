const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const experiences = require(`./src/data/career/experience`)

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
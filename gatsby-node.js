const path = require('path')
const blogPosts = require('./src/data/blog/_blog-posts')

// Create pages for each blog post that's NOT from medium
exports.createPages = ({ actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    for (const post of blogPosts) {
      if (post.medium) continue

      const slug = post.title.toLowerCase().replace(/ /g, '-')
      console.log(slug)
      createPage({
        path: slug,
        component: path.resolve('./src/components/templates/blog-post.js'),
        context: {
          // Data passed here is available as GQL vars
        }
      })
    }

    resolve()
  })
}
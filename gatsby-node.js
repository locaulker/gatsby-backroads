const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      tours:allContentfulTour{
        edges {
          node {
            slug
          }
        }
      }
      posts:allContentfulPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tourTemplate.js"),
      context: {
        slug: node.slug,
      },
    })
  })

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve("./src/templates/blogTemplate.js"),
      context: {
        slug: node.slug,
      }
    })
  })

  // Constants
  const posts = data.posts.edges
  const postsPerPage = 5
  const numPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
      component: path.resolve('./src/templates/blogListTemplate.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      }
    })
  })

}
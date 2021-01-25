/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

exports.createPages = ({graphql, actions}) => {
  return graphql(
    `{
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `,
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Get the templates
    const projectsTemplate = path.resolve(`./src/templates/projects.tsx`)

    // Create post pages
    const projects = result.data.allMarkdownRemark.edges
    projects.forEach((project, index) => {
      const previous = index === projects.length - 1 ? null : projects[index + 1].node
      const next = index === 0 ? null : projects[index - 1].node

      actions.createPage({
        path: project.node.fields.slug,
        component: projectsTemplate,
        context: {
          slug: project.node.fields.slug,
          previous,
          next,
        },
      })
    })
  })
}

exports.onCreateNode = ({node, actions, getNode}) => {
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    actions.createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })
}

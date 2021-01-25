import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import Bio from '../components/bio';
import ProjectCard from '../components/project_card';


interface Props {
  readonly data: PageQueryData
}

const Index: React.FC<Props> = ({data}) => {
  const siteTitle = data.site.siteMetadata.title
  const projects = data.allMarkdownRemark.edges

  return (
    <Layout title={siteTitle}>
      <Head title="All Projects"/>
      <Bio />
      <article>
        <div className={`page-content`}>
          {projects.map(({node}) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <ProjectCard key={node.fields.slug} slug={node.fields.slug} excerpt={node.excerpt} date={node.frontmatter.date} title={title} images={node.frontmatter.images}/>
            )
          } )}
        </div>
      </article>
    </Layout>
  )
}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: {
          date: string
          title: string
          images: any
        }
      }
    }[]
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {published: {ne: false}}}
      sort: {fields: [frontmatter___date], order: DESC}
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            images
          }
        }
      }
    }
  }
`
export default Index

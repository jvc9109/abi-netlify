import React from 'react';
import { graphql, Link } from 'gatsby';
import { styled } from '../styles/theme';

import Head from '../components/head';
import Layout from '../components/layout';


interface Props {
  readonly data: PageQueryData
  readonly pageContext: {
    previous?: any
    next?: any
  }
}


const StyledUl = styled('ul')`
  list-style-type: none;

  li::before {
    content: '' !important;
    padding-right: 0 !important;
  }
`

const ProjectTemplate: React.FC<Props> =({data, pageContext}) => {
  const project = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const {previous, next} = pageContext

  return (
    <Layout>
      <Head title={project.frontmatter.title} description={project.excerpt}/>
      <article>
        <header>
          <h1>{project.frontmatter.title}</h1>
          <p>{project.frontmatter.date}</p>
        </header>
        <div className={`page-content`}>
          <div dangerouslySetInnerHTML={{__html: project.html}}/>
            <StyledUl>
              {previous && (
                <li>
                  <Link to={previous.fields.slug} rel="next">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}
              {next && (
                <li>
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              </li>
              )}
            </StyledUl>
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
  markdownRemark: {
    id?: string
    excerpt?: string
    html: string
    fields?: {
      slug: string
    }
    frontmatter: {
      title: string
      date: string
    }
  }

}

interface ImageQueryData {
  allImageSharp: {
    edges: {
      node: {
        id: string
        fluid: object
      }
    }[]
  }
}

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      excerpt(pruneLength: 2500)
      html
      frontmatter {
        title
        date(formatString: "MMMM, YYYY")
      }
    }
  }
`

export default ProjectTemplate

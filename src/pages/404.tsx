import { graphql } from 'gatsby';
import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';


interface Props {
  readonly data: PageQueryData
}

export default class NotFoundPage extends React.Component<Props> {
  render() {
    const {data} = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout title={siteTitle}>
        <Head title="404: Not Found"/>
          <h1>Page not found</h1>
      </Layout>
    )
  }

}

interface PageQueryData {
  site: {
    siteMetadata: {
      title: string
    }
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

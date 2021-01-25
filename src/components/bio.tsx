import { graphql, StaticQuery } from 'gatsby';
import React from 'react';

type StaticQueryData = {
  site: {
    siteMetadata: {
      description: string
      social: {
        instagram: string
      }
    }
  }
}

const Bio: React.FC = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            description
            social {
              instagram
            }
          }
        }
      }
    `}
    render={(data: StaticQueryData): React.ReactElement | null => {
      const {description, social} = data.site.siteMetadata
      return (
        <div>
          <h1> {description} </h1>
          <p>
            By Abril Celaya <br/>
            <a href={social.instagram} target="__blank">Instagram</a>
          </p>
        </div>
      )
    }}
  />
)

export default Bio

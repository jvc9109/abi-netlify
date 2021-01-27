import { graphql, StaticQuery } from 'gatsby';
import React from 'react';


type StaticQueryData = {
  site: {
    siteMetadata: {
      description: string
      author: {
        name: string
        email: string
      }
      social: {
        pinterest: string
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
            author {
              name
              email
            }
            social {
              pinterest
            }
          }
        }
      }
    `}
    render={(data: StaticQueryData): React.ReactElement | null => {
      const {description, social, author} = data.site.siteMetadata
      return (
        <div>
          <h1> {author.name} </h1>
          <p> {description} </p>
          <small>
            <a href={social.pinterest} target="__blank">Pinterest</a>
          </small> <br/>
          <small>{author.email}</small>
        </div>
      )
    }}
  />
)

export default Bio

import { Link, graphql, StaticQuery } from 'gatsby';
import { format } from 'path';
import { string } from 'prop-types';
import React from 'react';
import About from '../pages/about';
import Slider from "react-slick";
import Img from 'gatsby-image';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  readonly title?: string
  readonly slug: string
  readonly excerpt?: string
  readonly date?: string
  readonly images?: any
}

const ProjectCard: React.FC<Props> = ({title, slug, excerpt, date, images }) => (
    <StaticQuery
      query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                id
                fluid(maxWidth: 600, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      `}
      render={(data: ImageQueryData): React.ReactElement | null => {
        const imagesFromQuery = data.allImageSharp.edges
        return(
            <div>
                <h3>
                  <Link to={slug}>{title}</Link>
                </h3>
                <small>{date}</small>
                <p> {console.log(imagesFromQuery)} </p>
                <Slider>
                  {
                    imagesFromQuery.map( ({node}) => {
                      var filename = node.fluid.src.replace(/^.*[\\\/]/, '')
                        if (images.includes(filename)) {
                          return(<Img fluid={node.fluid}/>)
                        }
                    })
                  }
                </Slider>
                <p dangerouslySetInnerHTML={{__html: excerpt}} />
              </div>
        )
      }}
    />
)

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



export default ProjectCard

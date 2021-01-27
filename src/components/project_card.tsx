import { Link, graphql, StaticQuery } from 'gatsby';
import React from 'react';
import Slider from "react-slick";
import Img from 'gatsby-image';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Button, Col, Row } from 'react-bootstrap';

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
                fluid(maxWidth: 500, quality: 100) {
                    ...GatsbyImageSharpFluid_noBase64
                }
              }
            }
          }
        }
      `}
      render={(data: ImageQueryData): React.ReactElement | null => {
        const imagesFromQuery = data.allImageSharp.edges
        return(
            <Row className="project-cards__container">
              <Col>
                <h3>
                    <Link to={slug}>{title}</Link>
                  </h3>
                  <p dangerouslySetInnerHTML={{__html: excerpt}} />
                  <Link className="more_details___link" to={slug}> &#8594; Ver más </Link>
              </Col>
                <Col md="6" >
                    {
                      imagesFromQuery.map( ({node}) => {
                        var filename = node.fluid.src.replace(/^.*[\\\/]/, '')
                          if (images.includes(filename)) {
                            return(<Img key={node.id} fluid={node.fluid}/>)
                          }
                      })
                    }
                </Col>
            </Row>
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

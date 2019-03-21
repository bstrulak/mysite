import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Lightbox from "./lightbox"

const Images = ({props}) => (
    <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
                relativePath
                name
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                  aspectRatio
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Lightbox images={data.images.edges.filter(n =>n.node.relativePath.startsWith(props))} />}
  />
)
export default Images
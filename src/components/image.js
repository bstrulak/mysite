import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Image = () => (
        <StaticQuery
                query={graphql`
                        query {
                                placeholderImage: file(relativePath: { eq: "backgrounds/bg1.jpg" }) {
                                        childImageSharp {
                                                fluid(maxWidth: 2520) {
                                                        ...GatsbyImageSharpFluid
                                                }
                                        }
                                }
                        }
                `}
                render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
        />
)

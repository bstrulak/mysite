import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql } from 'gatsby'

const Image = props => (
        <StaticQuery
                query={graphql`
                        query {
                                images: allFile {
                                        edges {
                                                node {
                                                        relativePath
                                                        name
                                                        childImageSharp {
                                                                sizes(maxWidth: 2880) {
                                                                        src
                                                                        srcSet
                                                                        aspectRatio
                                                                        sizes
                                                                        base64
                                                                }
                                                        }
                                                }
                                        }
                                }
                        }
                `}
                render={data => {
                        const image = data.images.edges.find(n => n.node.relativePath.includes(props.filename))
                        if (!image) {
                                return null
                        }

                        const imageSizes = image.node.childImageSharp.sizes
                        return (
                                <Img
                                        alt={props.alt}
                                        sizes={imageSizes}
                                        style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'cover !important',
                                                objectPosition: '0% 0% !important',
                                                transition: 'opacity 20s !important',
                                        }}
                                />
                        )
                }}
        />
)

export default Image

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import styled from 'styled-components'


const Wrapper = styled.div`
        margin: 1.8rem auto;
        padding-right: 10px;
        padding-left: 10px;
        max-width: 80vw; 
        -webkit-columns: 15em;
        columns: 15em;
        column-gap: 0.8em;
        
`
const ImageWrapper = styled.div`
    margin: 1em 0;
    padding: .25rem;
        border: 1px solid ${({theme}) => theme.colors.bgresp};;
        border-radius: .25rem;
  -webkit-column-break-inside: avoid;
  page-break-inside: avoid; /* Firefox is dumb */
  break-inside: avoid;
  max-width:300px;
  :first-child {
  margin-top: 0;
}
`
const Gallery = ( {props} ) => (
    
  <StaticQuery
    query={graphql`
    query {
            images: allFile {
                    edges {
                            node {
                                    relativePath
                                    name
                                    childImageSharp {
                                            fluid(maxWidth: 420) {
                                                ...GatsbyImageSharpFluid
                                            }
                                    }
                            }
                    }
            }
    }
`}
    render={{props}, data => {
        return (
        <Wrapper>
            {   data.images.edges.filter(n =>n.node.relativePath.startsWith(props)).map(n => (
                <ImageWrapper><Img
                    key={n.node.childImageSharp.fluid.src}
                    fluid={n.node.childImageSharp.fluid}
                /></ImageWrapper>
                
                )
                )
            }
        </Wrapper>)
        
    }
    }
  />
)

export default Gallery
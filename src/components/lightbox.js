import React, { Component, Fragment } from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog"
import { FaAngleLeft, FaAngleRight, FaTimes } from 'react-icons/fa'

const LightboxContainer = styled.div`
  margin: 1.8rem auto;
       
        -webkit-columns: 15em;
        columns: 250px 3;
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
const PreviewButton = styled.button`
  background-color: black;
  border: none;
  padding: 0;
  margin: 0;
  width:100%;
`
const Overlay = styled(DialogOverlay)`
  background: rgba(0, 0, 0, 0.85);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;  
  overflow: hidden;
  display:flex;
  justify-content: center;
  align-items: center;
        
`


const OverlayContentWrapper = styled(DialogContent)`
`
const ImageNavigation = styled.div`
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 2rem;
        

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.transparent};
    `
    
const CloseDiv = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size:1.5rem;
`

const LeftRightDiv = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  width: 100%;
  justify-content: space-between;

  z-index: 1000;
  

  } 

`
const OverlayContent = styled.div`
  
  text-align: center;
  overflow: hidden;
  height: auto; 
  width: ${props => props.vw};
  object-fit: contain;
      
`
const OverlayImageWrap = styled.div`
width: 100%
height: 100%;
`


const StyledImage = styled(Img)`
  max-height: 100%:
  max-width: 100%;
        
        
        `


export default class Lightbox extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
  }
  constructor(props) {
    super(props)

    this.state = {
        showLightbox: false,
        selectedImage: null,
        selectedId: null,
      }
      this.keyPressed = this.keyPressed.bind(this);
  }

  keyPressed(event){
    if (this.state.showLightbox) {
      /* Left arrow pressed */
      if(event.keyCode == 37){
        this.slideLeft()
        }
        /* right arrow pressed */
      else if (event.keyCode == 39) {
        this.slideRight()
        }
    }
  }

  slideLeft = () => {
    this.setState({ showLightbox: true})
      this.state.selectedId === 0 ? this.setState({ selectedId: this.props.images.length -1 }) : this.setState({ selectedId: this.state.selectedId - 1 })
  }

  slideRight = () => {
    this.setState({ showLightbox: true})
    this.state.selectedId === this.props.images.length -1 ? this.setState({ selectedId: 0 }) : this.setState({ selectedId: this.state.selectedId + 1 })
  }
  componentDidMount(){
    document.addEventListener("keydown", this.keyPressed, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyPressed, false);
  }
  render() {
    const { images } = this.props
    const { selectedImage, showLightbox, selectedId } = this.state
    
    return (
        <Fragment>
      <LightboxContainer>
        {images.map((image, index) => (
            
            <ImageWrapper key={image.node.childImageSharp.fluid.src}  >
                <PreviewButton
          type="button"
          onClick={() => this.setState({ showLightbox: true, selectedImage: image, selectedId: index })}
          
        >
            <Img fluid={image.node.childImageSharp.fluid} /></PreviewButton>
          </ImageWrapper>
         
        ))}
      </LightboxContainer>
        {showLightbox && (
          <Overlay isOpen={this.state.showLightbox} onDismiss={() => this.setState({ showLightbox: false })} >
          
          <OverlayContentWrapper>
          <ImageNavigation>
            <CloseDiv>
              
              <button type="button" onClick={() => this.setState({ showLightbox: false })}><FaTimes></FaTimes> </button>
            </CloseDiv>
            <LeftRightDiv>
              <button type="button" onClick={this.slideLeft}><FaAngleLeft></FaAngleLeft></button>
              <button type="button" onClick={this.slideRight}><FaAngleRight></FaAngleRight></button>
          </LeftRightDiv>
          </ImageNavigation>
          
          <OverlayContent  vw ={images[this.state.selectedId].node.childImageSharp.fluid.aspectRatio  < 1 ? Math.round(Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * images[this.state.selectedId].node.childImageSharp.fluid.aspectRatio) - 50 + "px" : "80vw"}>
          
            <OverlayImageWrap>
               <StyledImage fluid={images[this.state.selectedId].node.childImageSharp.fluid} 
               />
               </OverlayImageWrap>
          </OverlayContent>
          </OverlayContentWrapper>
        </Overlay>
        )}
      </Fragment>
    )
  }
}
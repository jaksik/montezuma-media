import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'

class Lightbox extends Component {
  state = {
    showLightbox: false,
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
    const { images } = this.props
    console.log("Images: ", images)
    const { showLightbox, selectedImage } = this.state
    return (
      <>
        <Gallery>
          {images.map((img, i) => {
              console.log("img", img)
              return (
            <GalleryItem key={img.image.childImageSharp.fluid.src}>
              <a href={img.image.childImageSharp.fluid.src} alt="Car Image" onClick={e => this.handleClick(e, i)}>
                <StyledImg fluid={img.image.childImageSharp.fluid}/>
              </a>
            </GalleryItem>
          )})}
        </Gallery>

        <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>

            <Button style={{right:`100px`, top:`0`}} onClick={this.closeModal}>Close</Button>

          <LightboxContent>

            <Button style={{left:`0`}} onClick={this.goBack} disabled={selectedImage === 0}>
              &#10094;
              </Button>
              <Button style={{right:`0`}} onClick={this.goForward} disabled={selectedImage === images.length - 1}>
              &#10095;
              </Button>
              <div onClick={this.closeModal}>
                <Img fluid={images[selectedImage].image.childImageSharp.fluid} style={{maxHeight:`80vh`}} className={(images[selectedImage].image.childImageSharp.fluid.aspectRatio > 1 ? "landscape" : "portrait")} imgStyle={{width:(images[selectedImage].image.childImageSharp.fluid.aspectRatio > 1 ? `100%` : `auto`)}}/>
              </div>

          </LightboxContent>

        </LightboxModal>

      </>
    )
  }
}

const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%; // or whatever
  & > img {
    object-fit: cover !important; // or whatever
    object-position: 0% 0% !important; // or whatever
  }
`

const Gallery = styled.div`
  display: grid;
  position: relative;
  z-index: 3;
  grid-template-columns: 1fr;
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }

  grid-gap: 15px;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`

const GalleryItem = styled.div`
`

const Button = styled.button`
  z-index: 2;
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  border: none;
  user-select: none;
  -webkit-user-select: none;
  background: none;
  :hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`

const LightboxModal = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const LightboxContent = styled.div`
  overflow: hidden;
  margin: 15px;
  max-width: 900px;
  width: 100%;
  position: relative
`

const Controls = styled.div`
`

const LeftRight = styled.div`
 
`

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox

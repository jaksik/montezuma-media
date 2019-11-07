import React, { Component, Fragment } from 'react'
import { Row, Col } from "reactstrap"
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import "./lightbox.css"

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
        <Row className="no-gutters">
          {images.map((img, i) => {
            return (
              <Col xs="6" lg="4" key={img.image.childImageSharp.fluid.src}>
                <a href={img.image.childImageSharp.fluid.src} alt="" onClick={e => this.handleClick(e, i)}>
                  <Img fluid={img.image.childImageSharp.fluid} style={{}}/>
                </a>
              </Col>
            )
          })}
        </Row>

        <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>

          <Button style={{right:`100px`, top:`0`}} onClick={this.closeModal}>Close</Button>

          <div className="lightbox-content">

            <Button style={{left:`0`}} onClick={this.goBack} disabled={selectedImage === 0}>&#10094;</Button>
            <Button style={{right:`0`}} onClick={this.goForward} disabled={selectedImage === images.length - 1}>&#10095;</Button>
              
            {/* <Img fluid={images[selectedImage].image.childImageSharp.fluid} style={{maxHeight:`80vh`}} className={(images[selectedImage].image.childImageSharp.fluid.aspectRatio > 1 ? "landscape" : "portrait")} imgStyle={{width:(images[selectedImage].image.childImageSharp.fluid.aspectRatio > 1 ? `100%` : `auto`)}}/> */}
            <div className={(images[selectedImage].image.childImageSharp.fluid.aspectRatio > 1 ? "landscape-img" : "portrait")}>
            <Img fluid={images[selectedImage].image.childImageSharp.fluid} style={{}}/>

            </div>
          </div>

        </LightboxModal>

      </>
    )
  }
}


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
    background-color: rgba(0, 0, 0, 0.9);
  }
`

const LightboxModal = styled.div`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
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

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox

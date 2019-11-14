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
    console.log("index", index)
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
    const { images, name } = this.props
    console.log("Images: ", images)
    const { showLightbox, selectedImage } = this.state

    const one = images.slice(0, images.length/3);
    const two = images.slice(images.length/3, images.length/3 * 2);
    const three = images.slice(images.length/3 * 2, images.length);

    console.log("one: ", one)
    console.log("two: ", two)
    console.log("three: ", three)


    return (
      <>
        <Row className="no-gutters">
          <Col xs="6" lg="4" xl="3">
            {one.map((img, i) => {
              return (
                  <a href={img.image.childImageSharp.fluid.src} alt={name + `image`} onClick={e => this.handleClick(e, i)} key={img.image.childImageSharp.fluid.src}>
                    <Img fluid={img.image.childImageSharp.fluid} style={{margin:`10px 5px`}}/>
                  </a>
              )
            })}
          </Col>
          <Col xs="6" lg="4" xl="3">
            {two.map((img, i) => {
              return (
                  <a href={img.image.childImageSharp.fluid.src} alt={name + `image`} onClick={e => this.handleClick(e, Math.ceil(images.length/3) + i -1)} key={img.image.childImageSharp.fluid.src}>
                    <Img fluid={img.image.childImageSharp.fluid} style={{margin:`10px 5px`}}/>
                  </a>
              )
            })}
          </Col>
          <Col xs="6" lg="4" xl="3">
            {three.map((img, i) => {
              return (
                  <a href={img.image.childImageSharp.fluid.src} alt={name + `image`} onClick={e => this.handleClick(e, Math.ceil(images.length/3) * 2 + i -1)} key={img.image.childImageSharp.fluid.src}>
                    <Img fluid={img.image.childImageSharp.fluid} style={{margin:`10px 5px`}}/>
                  </a>
              )
            })}
          </Col>
          <Col xs="6" lg="4" xl="3">
            {three.map((img, i) => {
              return (
                  <a href={img.image.childImageSharp.fluid.src} alt={name + `image`} onClick={e => this.handleClick(e, Math.ceil(images.length/3) * 2 + i -1)} key={img.image.childImageSharp.fluid.src}>
                    <Img fluid={img.image.childImageSharp.fluid} style={{margin:`10px 5px`}}/>
                  </a>
              )
            })}
          </Col>
        </Row>

        <LightboxModal visible={showLightbox} className="row no-gutters align-items-center p-0" onKeyUp={e => this.handleKeyDown(e)}>
          <Button style={{right:`10px`, top:`0`}} onClick={this.closeModal}>X</Button>
          <div className="lightbox-content">
            <Button style={{left:`0`}} onClick={this.goBack} disabled={selectedImage === 0}>&#10094;</Button>
            <Button style={{right:`0`}} onClick={this.goForward} disabled={selectedImage === images.length - 1}>&#10095;</Button>  
            <div className={(images[selectedImage].image.childImageSharp.fluid.aspectRatio > 1 ? `landscape-img` : `portrait`)}>
              <Img fluid={images[selectedImage].image.childImageSharp.fluid} style={{margin:`10px auto`}} style={{width:`100%`}}/>
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

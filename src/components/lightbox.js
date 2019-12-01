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
    const { showLightbox, selectedImage } = this.state
    console.log("props", this.props)
    const one = images.slice(0, images.length/4);
    const two = images.slice(images.length/4, images.length/4 * 2);
    const three = images.slice(images.length/4 * 2, images.length/4 * 3);
    const four = images.slice(images.length/4 * 3, images.length);

    return (
      <>
        <Row className="no-gutters">
          <Col xs="6" xl="3">
            {one.map((img, i) => {
              return (
                  <a href={img.image.childImageSharp.fluid.src} alt={name + `image`} onClick={e => this.handleClick(e, i)} key={img.image.childImageSharp.fluid.src}>
                    <Img fluid={img.image.childImageSharp.fluid} style={{margin:`10px 5px`}}/>
                  </a>
              )
            })}
          </Col>
          <Col xs="6" xl="3">
            {two.map((img, i) => {
              return (
                  <a href={img.image.childImageSharp.fluid.src} alt={name + `image`} onClick={e => this.handleClick(e, Math.ceil(images.length/4) + i)} key={img.image.childImageSharp.fluid.src}>
                    <Img fluid={img.image.childImageSharp.fluid} style={{margin:`10px 5px`}}/>
                  </a>
              )
            })}
          </Col>
          <Col xs="6" xl="3">
            {three.map((img, i) => {
              return (
                  <a href={img.image.childImageSharp.fluid.src} alt={name + `image`} onClick={e => this.handleClick(e, Math.ceil(images.length/4) * 2 + i)} key={img.image.childImageSharp.fluid.src}>
                    <Img fluid={img.image.childImageSharp.fluid} style={{margin:`10px 5px`}}/>
                  </a>
              )
            })}
          </Col>
          <Col xs="6" xl="3">
            {four.map((img, i) => {
              return (
                  <a href={img.image.childImageSharp.fluid.src} alt={name + `image`} onClick={e => this.handleClick(e, Math.ceil(images.length/4) * 3 + i)} key={img.image.childImageSharp.fluid.src}>
                    <Img fluid={img.image.childImageSharp.fluid} style={{margin:`10px 5px`}}/>
                  </a>
              )
            })}
          </Col>
        </Row>

        <LightboxModal visible={showLightbox} className="row no-gutters align-items-center p-0" onKeyUp={e => this.handleKeyDown(e)}>
          <Close className="close-button" onClick={this.closeModal}>X</Close>
          <div className="lightbox-content">
            <Button style={{left:`10px`, opacity:(selectedImage === 0 ? `0%` : `100%`)}} onClick={this.goBack} disabled={selectedImage === 0}>&#10094;</Button>
            <Button style={{right:`10px`, opacity:(selectedImage === images.length - 1 ? `0` : `100`)}} onClick={this.goForward} disabled={selectedImage === images.length - 1}>&#10095;</Button>  
            <div className={(images[selectedImage].image.childImageSharp.fluid.aspectRatio > 1 ? `landscape-img` : `portrait`)}>
              <Img fluid={images[selectedImage].image.childImageSharp.fluid} style={{margin:`10px auto`}} style={{width:`100%`}}/>
            </div>
          {/* <p style={{textAlign:`center`, width:`100%`, paddingTop:`15px`, position:`absolute`, bottom: `0`, backgroundImage: `radial-gradient(black, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0))`}}>{images[selectedImage].title}</p> */}
          <p style={{textAlign:`center`, width:`100%`, paddingTop:`15px`, position:`absolute`, bottom: `0`}}>{images[selectedImage].title}</p>

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
  font-size: 2rem;
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
const Close = styled.button`
  z-index: 2;
  cursor: pointer;
  position: absolute;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
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

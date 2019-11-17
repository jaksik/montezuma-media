import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import "./landing-lightbox.css"

class Lightbox extends Component {
  state = {
    selectedImage: 0,
  }

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
    setInterval(this.goForward, 5000);
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
  }

  goBack = () => {
    if (this.state.selectedImage === 0) {
      this.setState({ selectedImage: this.props.images.length - 1})
    } else {
      this.setState({ selectedImage: this.state.selectedImage - 1 })
    }
  }

  goForward = () => {
    if (this.state.selectedImage < this.props.images.length - 1) {
        this.setState({ selectedImage: this.state.selectedImage + 1 })
    } else {
        this.setState({ selectedImage: 0 })
    }
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
      if (keyCode === 37) {
        // Left Arrow Key
        this.goForward();
      }
      if (keyCode === 39) {
        // Right Arrow Key
        this.goForward();
      }
  }

  render() {
    const { images } = this.props
    const { showLightbox, selectedImage } = this.state
    const image = images[selectedImage].node.childImageSharp.fluid

    return (
      <>
        <LightboxModal className="align-items-center p-0" style={{position:`fixed`, width:`100%`, height:`100%`}} onKeyUp={e => this.handleKeyDown(e)}>
          <Button style={{right:`10%`}} onClick={this.goBack}>&#10094;</Button>
          <Button style={{right:`0`}} onClick={this.goForward}>&#10095;</Button>
          <Img fluid={image} imgStyle={{margin:0}} style={{position:`initial`, width:`100%`}}/>
        </LightboxModal>
      </>
    )
  }
}


const Button = styled.button`
  z-index: 2;
  cursor: pointer;
  position: absolute;
  bottom: 0%;
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
  z-index: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`

Lightbox.propTypes = {
  images: PropTypes.array.isRequired,
}

export default Lightbox

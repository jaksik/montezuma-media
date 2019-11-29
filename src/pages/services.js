import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./index.css"

const ServicesPage = ({ data }) => {
  console.log("data ata data: ", data)
  return (
  <div style={{width:`100%`}}>
    <Layout>
      <h1 className="pl-3">Our Services</h1>
      <Row className="no-gutters service-container">
        <h4 className="w-100">Adventure Follows</h4><br/>

        <Col xs="12" md="7" lg="8"className="primary-color pr-sm-2">
          <strong>Capture Your Next Adventure</strong><br/>
          <p className="page-text"> 
            Are you wanting to capture and share the experience from your next big adventure?
            Montezuma Media is passionate about capturing and sharing the moments from those once in a lifetime adventures.
            Whether it's on skis or on a belay, we're eager to be by your side capturing that life-changing moment exactly how you felt it.
          </p>
         
        </Col>
        <Col xs="12" md="5" lg="4" className="align-self-center">
          <ul>
            <li>Includes Photo/Video Editing</li>
            <li>Recieve photos in digital format</li>
            <li>$99/hour, 8 hour/day max billing</li>
          </ul>
        </Col>
        <Col xs="12">
        <div className="film-strip">
            {data.allFile.edges.map((image, index) => {
              return (
                <div className="strip-photo">
                  <Img sizes={image.node.childImageSharp.sizes}/>
                  </div>
              )
            })}
          </div>
        </Col>
      </Row>
      
      <Row className="no-gutters service-container">
      <h4 className="pb-2 w-100">Wall and Canvas Prints</h4>

        <Col xs="12" md="7" lg="8"className="primary-color pr-sm-2">
          <strong>Bring Inspiration To Your Space</strong><br/>
          <p className="page-text"> 
            All photos and videos on this website are available for purchase in printed and digital formats. All prints include a digital copy.
            Fill the walls of your business or home with inspirational photos from around the globe or right in your backyard (if your backyard is Colorado).
            The images on this website have been reduced in size to improve site performance, but purchases include full size images. Contact us for quotes.
          </p>
          
        </Col>
        <Col xs="12" md="5" lg="4" className="align-self-center">
          <ul>
            <li>Canvas, poster, framed prints, and digital</li>
            <li>Wide range of sizes available</li>
            <li>Retail and bulk order discounts</li>
          </ul>
        </Col>
        <Col xs="12">
        <div className="film-strip">
            {data.canvas.edges.map((image, index) => {
              return (
                <div className="product-photo">
                  <Img sizes={image.node.childImageSharp.sizes}/>
                  </div>
              )
            })}
          </div>
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <AniLink fade to="/contact/">
          <button className="contact-button">Contact</button>
        </AniLink>
      </Row>
    </Layout>
  </div>
)}

export default ServicesPage

export const query = graphql`
query {
  allFile( filter: { relativePath: { regex: "/adventure/.*.jpg/" }}) {
    edges {
      node {
        childImageSharp {
          sizes(maxWidth: 320) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
  canvas: allFile( filter: { relativePath: { regex: "/mockups/.*.jpg/" }}) {
    edges {
      node {
        childImageSharp {
          sizes(maxWidth: 320) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
}
`
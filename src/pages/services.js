import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./index.css"

const ServicesPage = ({ data }) => {
  const imgArray = data.allFile.edges
  console.log("data: ", imgArray)
  return (
  <div style={{width:`100%`}}>
    <Layout>
      <h1 className="primary-color text-center mb-5">Services</h1>
      <Row className="no-gutters service-container">
        <Col xs="12" className="pb-2">
        <h3>Adventure Photography</h3>
        </Col>
      <Col xs="12" sm="6" md="7" lg="8"className="primary-color pr-sm-2">
        <strong >Capture Your Next Adventure</strong><br/>
        <p className="page-text"> 
          Are you wanting to capture and share the experience from your next big adventure?
          Connor is a proffesional photographer who lives for adventure and would love to accompany you.
          From below sea level to the highest peaks, on skis or on a belay, Connor can be at your side capturing those once in a lifetime
          moments of triumph.
        </p>
      </Col>
      <Col xs="12" sm="6" md="5" lg="4" className="align-self-center">
      <ul>
          <li>Day and Overnight Trips</li>
          <li>Hourly and Daily Rates</li>
          <li>Foreign or Domestic</li>
          <li>Marine, Desert, Forest, or Alpine</li>
          <li>$99/hour, 8 hour max billing</li>
        </ul>
      </Col>
        
      </Row>
      <div className="film-strip">
            {data.allFile.edges.map((image, index) => {
              return (
                <div className="strip-photo">
                  <Img sizes={image.node.childImageSharp.sizes}/>
                  </div>
              )
            })}
        </div>
      <Row className="justify-content-center">
        <AniLink fade to="/contact/">
          <button className="contact-button">Contact Connor</button>
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
}
`
import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./index.css"

const ServicesPage = ({ data }) => (
  <div style={{width:`100%`}}>
    <Layout>
      <h1 className="primary-color text-center">Services</h1>
      <Row className="no-gutters align-items-center">
        <Col xs="12" sm="6" md="7" lg="8"className="primary-color pr-sm-2">
          <h2>Adventure Follows</h2>
          <h4>$149/hour or $499/day</h4>
          <p>Do you go on awesome adventures and need a photographer? Connor offers daily and hourly rates to acompany you as a photographer on your next adventure.</p>
          <ul>
            <li>Hour by Hour Rates</li>
            <li>Overnight Trips</li>
            <li>Ski Follows</li>
          </ul>
        </Col>
        <Col xs="12" sm="6" md="5" lg="4" className="align-items-center" style={{width:`40%`}}>
          <Img fluid={data.file.childImageSharp.fluid} style={{}}/>
        </Col>
      </Row>

      <div className="line-divider"></div>

      <Row className="no-gutters align-items-center">
        <Col xs="12" sm="6" md="7" lg="8"className="primary-color pr-sm-2">
          <h2>Adventure Follows</h2>
          <h4>$149/hour or $499/day</h4>
          <p>Do you go on awesome adventures and need a photographer? Connor offers daily and hourly rates to acompany you as a photographer on your next adventure.</p>
          <ul>
            <li>Hour by Hour Rates</li>
            <li>Overnight Trips</li>
            <li>Ski Follows</li>
          </ul>
        </Col>
        <Col xs="12" sm="6" md="5" lg="4" className="align-items-center" style={{width:`40%`}}>
          <Img fluid={data.file.childImageSharp.fluid} style={{}}/>
        </Col>
      </Row>

      <div className="line-divider"></div>
      
      <button>Contact Us</button>
    </Layout>
  </div>
)

export default ServicesPage

export const query = graphql`
query {
  file(relativePath: { eq: "sun.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
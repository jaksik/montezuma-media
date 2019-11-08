import React from "react"
import { Link, graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <div style={{width:`100%`}}>
    <Layout>
      <h1 className="primary-color text-center">Services</h1>
      <Row className="no-gutters align-items-center">
        <Col xs="12" sm="8" lg="7"className="primary-color pr-sm-2">
          <h2>Adventure Follows</h2>
          <h4>$149/hour or $499/day</h4>
          <p>Do you go on awesome adventures and need a photographer? Connor offers daily and hourly rates to acompany you as a photographer on your next adventure.</p>
          <ul>
            <li>Hour by Hour Rates</li>
            <li>Overnight Trips</li>
            <li>Ski Follows</li>
          </ul>
        </Col>
        <Col xs="12" sm="4" lg="5" className="align-items-center" style={{width:`40%`}}>
          <Img fluid={data.file.childImageSharp.fluid} style={{}}/>
        </Col>
      </Row>

      <div className="line-divider"></div>

      <Row className="row">
      <div className="col" style={{width:`40%`}}>
          <Img fluid={data.file.childImageSharp.fluid} style={{}}/>
        </div>
        <div className="primary-color col" style={{width:`60%`}}>
          <h2>Adventure Follows</h2>
          <h4>$149/hour or $499/day</h4>
          <p>Do you go on awesome adventures and need a photographer? Connor offers daily and hourly rates to acompany you as a photographer on your next adventure.</p>
          <ul>
            <li>Hour by Hour Rates</li>
            <li>Overnight Trips</li>
            <li>Ski Follows</li>
          </ul>
        </div>
      </Row>

      <div className="line-divider"></div>
      
      <div className="row no-gutters" style={{flexDirection:`column`}}>
      <Col xs="12">
      <h2 className="primary-color text-center">Contact Us</h2>

      <form style={{margin:`0 auto`}}>
        <input placeholder=" Name*"/>
        <input placeholder=" Email*"/><br/>
        <input placeholder=" Phone"/>
        <input placeholder="Email"/>
      </form>
      </Col>
      </div>
    </Layout>
  </div>
)

export default IndexPage

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
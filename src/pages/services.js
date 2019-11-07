import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <div style={{width:`100%`}}>
    <Layout>
      <h1 className="primary-color text-center">Services</h1>
      <div className="row">
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
        <div className="col" style={{width:`40%`}}>
          <Img fluid={data.file.childImageSharp.fluid} style={{}}/>
        </div>
      </div>

      <div className="line-divider"></div>

      <div className="row">
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
      </div>

      <div className="line-divider"></div>
      
      <div className="row" style={{flexDirection:`column`}}>
      <h2 className="primary-color text-center">Contact Us</h2>

      <form style={{margin:`0 auto`}}>
        <input placeholder=" Name*"/>
        <input placeholder=" Email*"/><br/>
        <input placeholder=" Phone"/>
        <input placeholder="Email"/>
      </form>
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
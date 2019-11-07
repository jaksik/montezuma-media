import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <div style={{height:`100vh`, overflow:`hidden`}}>
    <Layout>
      <div style={{color:`white`, padding:`50px`}}>
      <h1>Aspen Media</h1>
      <p>We are Aspen Media Company. We are photographers, videographers, and producers that are passionate about creating breathtaking media assets.</p>
      </div>
      
    </Layout>
  </div>
)

export default IndexPage

export const query = graphql`
query {
  backgroundImage: file(relativePath: { eq: "capital-lake.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
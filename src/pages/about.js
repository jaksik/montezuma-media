import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <div style={{height:`100vh`, overflow:`hidden`}}>
    <Layout>
      <h1>Aspen Adventures</h1>
      <h4>Founded On Planet Earth</h4>
      <p></p>
      
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
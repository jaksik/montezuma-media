import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <div style={{position:`fixed`, width:`100vw`, height:`100vh`, overflow:`hidden`}}>
    <Img fluid={data.backgroundImage.childImageSharp.fluid} style={{ position:`absolute`, width:`100%`, height:`100%`}}/>
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      
    </Layout>
  </div>
)

export default IndexPage

export const query = graphql`
query {
  backgroundImage: file(relativePath: { eq: "north-maroon.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from "../components/carousel"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <div style={{position:`fixed`, width:`100vw`, height:`100vh`, overflow:`hidden`}}>
    <Img fluid={data.backgroundImage.childImageSharp.fluid} style={{ position:`absolute`, width:`100%`, height:`100%`}}/>
    <Layout>
      <SEO title="Home" />
      
      <Carousel/>
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
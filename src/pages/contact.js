import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import "./index.css"

const ContactPage = ({ data }) => {
  console.log("data:", data)
  return (
    <Layout>
      <SEO title="Home" />
      <Img fluid={data.backgroundImage.childImageSharp.fluid} style={{maxHeight:`300px`}}/>
      <h2 className="primary-color">Contact Us</h2>
      <form style={{margin:`20 auto`}}>
        <input placeholder=" Name*"/>
        <input placeholder=" Email*"/><br/>
        <input placeholder=" Phone"/>
        <input placeholder="Email"/>
      </form>
    </Layout>
  )
}

export default ContactPage

export const query = graphql`
query {
  backgroundImage: file(relativePath: { eq: "banner.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
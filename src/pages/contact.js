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
      <h2 className="primary-color text-center mt-5">Send Us a Message</h2>

      <form 
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        style={{margin:`20 auto`}}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <input style={{display: `none`}} type="text" />
        <strong className="mb-3">Tell us about your next adventure, or how you would like to bring inspiration to your space.</strong>
        <input className="mb-3 mt-3" placeholder=" Name*"/>
        <input className="mb-3" placeholder=" Email*"/>
        <input className="mb-3" placeholder=" Phone"/>
        <input className="mb-3" style={{height:`150px`}} placeholder=" Your Message"/>
        <button style={{display:`block`, borderRadius:`.3rem`, margin:`0 auto`, width:`150px`}} className="contact-button">Submit</button>
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
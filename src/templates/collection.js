import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import LightBox from "../components/lightbox"
import "./style.css"

export default ({ data }) => {
  const images = data.markdownRemark.frontmatter.images
  return (
    <Layout>
      <LightBox images={images} name={data.markdownRemark.frontmatter.title}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        images {
          image {
            childImageSharp {
              fluid(quality: 80) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

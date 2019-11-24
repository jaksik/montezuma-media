import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import LightBox from "../components/lightbox"
import "./style.css"

export default ({ data }) => {
  const collection = data.markdownRemark.frontmatter
  const images = data.markdownRemark.frontmatter.images
  console.log("data: ", data)
  return (
    <Layout>
      <h2>{collection.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}/>
      <LightBox images={images} name={collection.title}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
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
          title
        }
      }
    }
  }
`

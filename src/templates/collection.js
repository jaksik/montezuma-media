import React from "react"
import { graphql } from "gatsby"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Layout from "../components/layout"
import LightBox from "../components/lightbox"
import "./style.css"

export default ({ data }) => {
  const collection = data.markdownRemark.frontmatter
  const images = data.markdownRemark.frontmatter.images
  return (
    <Layout>
      <AniLink fade to="/photography/" className="mt-3 mb-3">
        <p>Back to Albums</p>
      </AniLink>
      <h2 style={{color:`#e9dbbd`}}>{collection.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}} style={{color:`#d9d9d9`}}/>
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

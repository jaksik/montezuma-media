import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import "./style.css"

export default ({ data }) => {
  console.log("collection: ", data)
  return (
    <Layout>
      <div className="row"> 
        {data.markdownRemark.frontmatter.images.map(image => {
            console.log(image);
          return (
            <div className="col">
              <Img fluid={image.image.childImageSharp.fluid} imgStyle={{}} style={{}} className="gallery-image" />
            </div>
          )
        })}
      </div>
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
              fluid(maxWidth: 2000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Layout from "../components/layout"
import Img from 'gatsby-image';
import "./style.css"
import LightBox from "../components/lightbox"
export default ({ data }) => {
  const images = data.markdownRemark.frontmatter.images
  return (
    <Layout>
      {/* <div className="row"> 
        <div className="col">
          {images.slice(0, images.length / 2).map((image, index) => {
              console.log("col 1: ", image);
            return (
                <Img fluid={image.image.childImageSharp.fluid} imgStyle={{}} style={{}} className="gallery-image" />
            )
          })}
        </div>
        <div className="col">
          {images.slice(images.length / 2).map((image, index) => {
              console.log(image);
            return (
                <Img fluid={image.image.childImageSharp.fluid} imgStyle={{}} style={{}} className="gallery-image" />
            )
          })}
        </div>
      </div> */}
      <LightBox images={images}/>
      {/* {images.map((image, i) => {
        return (
              <Img fluid={image.image.childImageSharp.fluid} style={{}}/>
        )
      })} */}
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
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`

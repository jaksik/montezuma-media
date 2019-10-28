import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./gallery.css"
import "./index.css"

const GalleryPage = ({ data }) => { 
  console.log("data: ", data)
  return (
    <Layout>
      <SEO title="Home" />
      <div style={{backgroundColor:`rgba(24, 21, 16, 1)`, height:`100%`}}>
      <h1 style={{textAlign:`center`}} className="primary-color">Gallery and Prints</h1>
      {data.allMarkdownRemark.edges.map((edge, index) => {
        const collection = edge.node.frontmatter
        return (
          <Link to={edge.node.fields.slug}>
              <div className="card-wrapper">
                  <Img fluid={collection.image.childImageSharp.fluid} style={{ position:`absolute`, width:`100%`}}/>
                  <h3 className="card-title">{collection.title}</h3>
              </div>
          </Link>
        )
      })}
      </div>
    </Layout>
  )
}

export default GalleryPage

export const query = graphql`
query {
  allMarkdownRemark (filter: { frontmatter: {templateKey: {regex: "/collection/"}}}) {
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 800, quality: 40) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`
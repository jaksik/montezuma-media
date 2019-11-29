import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
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
      <h1 style={{textAlign:`center`}} className="primary-color">Galleries</h1>
        {data.allMarkdownRemark.edges.map((edge, index) => {
          const collection = edge.node.frontmatter
          return (
            <div className="gallery-card-wrapper">
              <AniLink fade to={edge.node.fields.slug}>
              <div style={{position:`relative`}}>
                <div className="cover-overlay"></div>
                <Img fluid={collection.image.childImageSharp.fluid} className="collection-cover"/>
                <h1 className="card-title ml-4">{collection.title}</h1>
              </div>
            </AniLink>
            </div>
          )
        })}
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
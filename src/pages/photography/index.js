import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from "gatsby-image"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../gallery.css"
import "../index.css"

const GalleryPage = ({ data }) => { 
  return (
    <Layout>
    <SEO title="Photography" keywords={[`montezuma`, `media`, `adventure`, `colorado`, `photography`, `portfolio`, `albums`]}/> 
      <h2 style={{textAlign:`center`}} className="primary-color mb-5">Photography Portfolio</h2>
        <Row className="no-gutters">
        {data.allMarkdownRemark.edges.map((edge, index) => {
          const collection = edge.node.frontmatter
          return (
            <Col xs="12" md="6" className={(index % 2 ? `right-item`: `left-item`)}>
              <div className="gallery-card-wrapper">
              <AniLink fade to={edge.node.fields.slug}>
              <div style={{position:`relative`}}>
                <div className="cover-overlay"></div>
                <Img fluid={collection.image.childImageSharp.fluid} className="collection-cover"/>
                <h1 className="card-title ml-4">{collection.title}</h1>
              </div>
            </AniLink>
            </div>
            </Col>
          )
        })}
        </Row>
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
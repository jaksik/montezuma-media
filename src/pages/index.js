import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const IndexPage = ({ data }) => {

  return (
  <div style={{position:`fixed`, width:`100%`, height:`100vh`, overflow:`hidden`, background:`black`}}>
    <SEO title="Home" keywords={[`summit`, `county`, `colorado`, `adventure`, `photography`]}/> 
    <Carousel 
      images={data.allFile.edges}
      className="landing-carousel"
    />
    <div className="row no-gutters landing-text">
    <h2 style={{alignSelf:`center`, margin:`0 auto`}} className="landing-title">Photography And Video Production from A New Perspective</h2>

    </div>
    <Layout>
    </Layout>
  </div>
)}

export default IndexPage

export const query = graphql`
  query {
    allFile( filter: { relativePath: { regex: "/landing-cover/.*.jpg/" }}) {
      edges {
        node {
          name
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
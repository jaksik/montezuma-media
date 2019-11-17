import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lightbox from "../components/landing-lightbox"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const IndexPage = ({ data }) => {
  console.log("data: ", data)

  return (
  <div style={{position:`fixed`, width:`100%`, height:`100vh`, overflow:`hidden`}}>
    <Lightbox images={data.allFile.edges}/>
    <Layout>
      <SEO title="Home" /> 
    </Layout>
  </div>
)}

export default IndexPage

export const query = graphql`
  query {
    allFile( filter: { relativePath: { regex: "/landing-cover/.*.jpg/" }}) {
      edges {
        node {
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
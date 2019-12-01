import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const VideoPage = ({ data }) => {

  return (
    <Layout>
        <SEO title="Home" /> 
        <h2 className="text-center">Video Production Portfolio</h2>
        <h3 className="text-center mt-5">Check back soon for our videos!</h3>
    </Layout>
)}

export default VideoPage

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
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Lightbox from "../components/landing-lightbox"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"



const IndexPage = ({ data }) => {
  const images = [];
  images.push(data.imageOne);
  images.push(data.imageTwo);
  images.push(data.imageThree);
  images.push(data.imageFour);
  images.push(data.imageFive);


  console.log("images: ", data)
  return (
  <div style={{position:`fixed`, width:`100%`, height:`100vh`, overflow:`hidden`}}>
    <Lightbox images={images}/>
    {/* <Img style={{position:`fixed`, overflow:`hidden`, width:`100%`, minHeight:`100vh`}} fluid={data.imageOne.childImageSharp.fluid}/> */}
    <Layout>
      <SEO title="Home" /> 
    </Layout>
  </div>
)}

export default IndexPage

export const query = graphql`
query {
  imageOne: file(name: { eq: "capital-lake" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  imageTwo: file(name: { eq: "ridge" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  imageThree: file(name: { eq: "lithuania" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  imageFour: file(name: { eq: "deli" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  imageFive: file(name: { eq: "cafe" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`
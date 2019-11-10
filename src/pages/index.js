import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Carousel from "../components/carousel"
import Lightbox from "../components/landing-lightbox"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const images = [];
  images.push(data.imageOne);
  images.push(data.imageTwo);
  images.push(data.imageThree);
  images.push(data.imageFour);
  images.push(data.imageFive);


  console.log("images: ", data)
  return (
  <div style={{position:`fixed`, width:`100vw`, height:`100vh`, overflow:`hidden`}}>
    <Lightbox images={images}/>
    
    <Layout>
      <SEO title="Home" />
      
    </Layout>
  </div>
)}

export default IndexPage

export const query = graphql`
query {
  imageOne: file(relativePath: { eq: "capital-lake.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageTwo: file(name: { eq: "ridge" }) {
    childImageSharp {
      fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageThree: file(name: { eq: "lithuania" }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageFour: file(name: { eq: "deli" }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageFive: file(name: { eq: "cafe" }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
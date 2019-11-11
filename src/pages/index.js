import React from "react"
import { graphql } from "gatsby"
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
  <>
    <Lightbox images={images}/>
    
    <Layout>
      <SEO title="Home" />
      
    </Layout>
  </>
)}

export default IndexPage

export const query = graphql`
query {
  imageOne: file(relativePath: { eq: "capital-lake.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageTwo: file(name: { eq: "ridge" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageThree: file(name: { eq: "lithuania" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageFour: file(name: { eq: "deli" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  imageFive: file(name: { eq: "cafe" }) {
    childImageSharp {
      fluid(maxWidth: 1000, quality: 80) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
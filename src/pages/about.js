import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"



const AboutPage = ({ data }) => (
  <Layout>
    <Row className="no-gutters align-items-center" style={{minHeight:`100vh`}}>
      <Col xs="12" md="6" xl="9">
        <div className="pt-xl-4">
          <h1>About Jaksik Photography</h1>
          <h4>Founded By Connor Jaksik</h4>
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
      </Col>
      <Col xs="12" md="6" xl="3">
        <Img fluid={data.backgroundImage.childImageSharp.fluid}/>
      </Col>
    </Row>
  </Layout>
)

export default AboutPage

export const query = graphql`
query {
  backgroundImage: file(relativePath: { eq: "connor.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 2000, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
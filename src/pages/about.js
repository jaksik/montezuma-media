import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"



const AboutPage = ({ data }) => (
  <Layout>
    <Row className="no-gutters align-items-center">
      <Col xs="12" md="6" xl="7">
        <div className="pt-xl-4">
          <h1 className="">
            Adven Photography
            </h1>
          <h5 className="">To Share the World From New Perspectives</h5><br/>
          <p>
            <strong>Founded by Connor Jaksik</strong><br/>
            In 2015 Connor Jaksik set out to leave North America for the first time in his life.
            He has traveled around the US and to parts of Canada, but now he was on his way to the opposite side of the world
            with nothing more than a small backpack, a hamy down digital camera, and less than $2000 in the bank.
            His Only goal was to see how the other parts of the world lived.
            Using his digital camera, Connor attempted to capture his experience.<br/><br/>
            <strong>Sharing Moments and Experiences</strong><br/>
            Since his first journey leaving North America, Connor has traveled to 36 countries and developed a passion for the outdoors.
            He's climbed over half of the 100 tallest mountains in North America and doesn't plan on stopping.
            </p>
        </div>
      </Col>
      <Col xs="12" sm="8" md="6" xl="4" className="offset-sm-2 offset-md-0 p-md-4">
        <Img fluid={data.backgroundImage.childImageSharp.fluid} alt="Connor Jaksik in Uzupis"/>
      </Col>
    </Row>
  </Layout>
)

export default AboutPage

export const query = graphql`
query {
  backgroundImage: file(relativePath: { eq: "connor.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 500, quality: 70) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
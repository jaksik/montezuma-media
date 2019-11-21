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
          <h1>Montezuma Media</h1>
          <h5>To Share the World From New Perspectives</h5><br/>
          <p style={{color:`white`, marginRight:`15px`}}>
            <strong>Founded by Connor Jaksik</strong><br/>
            In 2015 Connor Jaksik found him self asking some of those big questions about life, from what he should major in at college to the meaning of life its self.
            After sometime and not finding any answers, it had become clear to Connor that he actually didn't know much about the world or life its self except what he saw growing up in the suburbs of Houston, Texas.
            Unwilling to move forward or make any major life commitments without knowing with out having more perspective, Connor bought a one way plane ticket to the opposite side of the world in hopes of finding a few answers.
            With no plans, just $1500 in the bank, a hammy down digital camera, and a drive to understand the world. On his journey, anytime he felt moved by a certain experience or sight, he would attempt to capture it with his digital camera.
            Since then Connor's passion of capturing new perspectives of the world has become a proffession. 
            <br/><br/>
            <strong>Sharing Moments and Experiences</strong><br/>
            Since his first journey leaving to the opposite side of the world, Connor has traveled to 36 countries and developed a passion for the outdoors.
            He's climbed over half of the 100 tallest mountains in North America and hopes to climb the other half in the near future. 
            He truly believes that with the right perspective, beauty and inspiration can be found anywhere one looks.
            He shares his perspectives through his photography and is excited to help catpure the experiences of others.
            <br/><br/>
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
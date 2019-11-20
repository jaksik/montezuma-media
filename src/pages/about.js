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
          <h1>
            Montezuma Media
            </h1>
          <h5>To Share the World From New Perspectives</h5><br/>
          <p style={{color:`white`, marginRight:`15px`}}>
            <strong>One Earth, Eight Billion Worlds</strong><br/>
            There is nearly eight billion people living on planet earth, each of whom have their own unique perspective of the world
            Life can feel confusing at times. One moment you think you have it all figured out, then before you know it you find your self scratching your head and asking those big questions again.
            You may never have the "answer" to it all, but seeing the world from a fresh persective may just give you a little context.
            Montezuma Media seaks out new perspectives, and shares them here.
            The more you see, the more you know. Right?... Or is it the other way around?
            <br/><br/>
            <strong>Founded by Connor Jaksik</strong><br/>
            In 2015 Connor Jaksik was asksing some of those big questions. From what he should major in at college all the way to asking what's the point of any of this.
            After sometime and not finding any answers, it had become clear to Connor that he actually knew nothing about the world or life its self except what he saw growing up in the suburbs of Houston, Texas.
            Unwilling to move forward or make any major life commitments without knowing anything about the world or life its self, Connor bought a one way plane ticket to the Middle East in hopes of discovering a calling.
            He had no plans and not many responsibilities, just $1500 in the bank, a hammy down digital camera, and a drive to understand the world. When Connor would be moved by a certain experience or sight, he would attempt to capture it with his digital camera.


            <br/><br/>
            <strong>Sharing Moments and Experiences</strong><br/>
            Since his first journey leaving North America, Connor has traveled to 36 countries and developed a passion for the outdoors.
            He's climbed over half of the 100 tallest mountains in North America and hopes to climb the other half in the near future. 
            He truly believes that with the right perspective, beauty and inspiration can be found anywhere one looks.
            To this day, Connor shares his perspective through his camera.<br/><br/>
            <strong>The More You See, The More You Know Where You Stand</strong><br/>
              Connor still doesn't understand the world. In fact, after his travels Connor believes that the more you see the less you know.
              However, he also believes that the more you see, the more you know where you stand in the world.

            </p>
        </div>
      </Col>
      {/* <Col xs="12" md="6" className="order-2 order-sm-1">
        <br/>
        <p style={{color:`white`, marginRight:`15px`}}>
          <strong></strong><br/>
          
        </p>
      </Col> */}
      <Col xs="12" sm="8" md="6" xl="4" className="offset-sm-2 offset-md-0 p-md-4 order-1 order-sm-2">
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
import React from "react"
import { graphql } from "gatsby"
import { Row, Col } from "reactstrap"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`about`, `Connor`, `Jaksik`, `photography`]}/> 
    <Row className="no-gutters align-items-center pl-lg-5 pl-xl-5" style={{minHeight:`100vh`}}>
      <Col xs="12" md="7" xl="8">
        <div className="pt-xl-4">
          <h2>About Connor</h2>
          <p style={{color:`#b8b8b8`, marginRight:`15px`}}><br/>
            <strong>Mission: To share the world from new perspectives.</strong><br/>
            Connor Jaksik is a professional photographer from Fort Collins, Colorado.
            His love for photography and video production began in his early childhood as he grew up watching shows on the Discovery Channel and Animal Planet.
            Through these shows he realized that the most spectacular and beautiful places on Earth could be shared with anyone at anytime. 
            This idea has stuck with him his whole life and is what inspired him to become the photographer that he is today.
            When he was just 8 years old he bought his first film camera which he used to begin capturing and sharing moments that he found beautiful and inspiring. 
            Intreagued with the complexities of the world and life its self, as Connor grew older he began venturing out further from his home town of Houston, Texas with the hopes of discovering and sharing the best that the world has to offer.
            Over the years he's traveled to 36 countries and 37 states, and now calls Fort Collins, Colorado home, a place that allows him to continue exploring and discovering on a daily basis.
            Since settling in Fort Collins Connor has climbed and summited the 58 highest mountains in Colorado and continues to pursue his goal of climbing the Cententials (100 highest mountains in Colorado).
            With in depth experience as a climber and traveler, Connor is able to confidently go to many places that other phtographers dare not venute and capute breath taking moments.
            If you ever visit Fort Collins you may just find his work hanging on the walls of local shops and cafes.
          </p>
        </div>
      </Col>
      <Col xs="12" sm="8" md="5" xl="4" className="offset-sm-2 offset-md-0 p-md-4">
        <Img fluid={data.backgroundImage.childImageSharp.fluid} alt="Connor Jaksik in Uzupis"/>
        <p className="text-center primary-color small">Connor in the Republic of Uzupis</p>
      </Col>
    </Row>

    <Row className="justify-content-center">
        <AniLink fade to="/contact/" style={{textDecoration:`none`}}>
          <button className="contact-button">Contact</button>
        </AniLink>
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
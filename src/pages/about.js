import React from "react"
import { graphql, Link } from "gatsby"
import { Row, Col } from "reactstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.css"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[`summit`, `county`, `colorado`, `adventure`, `photography`]}/> 
    <Row className="no-gutters align-items-center pl-lg-5 pl-xl-5" style={{minHeight:`100vh`}}>
      <Col xs="12" md="7" xl="8">
        <div className="pt-xl-4">
          <h2>Montezuma Media</h2>
          <h5>To Share the World From New Perspectives</h5><br/>
          <p style={{color:`#b8b8b8`, marginRight:`15px`}}>
            <strong>Founded by Connor Jaksik</strong><br/>
            Connor Jaksik is a professional photographer from Silverthorne, Colorado who is passionate about sharing the world from new perspectives.
            His love for photography and video production began in his early childhood as he grew up watching shows such as The Crocodile Hunter and Planet Earth.
            The idea that the most spectacular and beautiful parts of the world could be shared with anyone at anytime is an idea that would stick with Connor for the rest of his life.
            When he was just 8 years old he bought his first film camera which he used to begin capturing and sharing those moments in which he found beautiful and inspirational. 
            Intreagued with the complexities of the world and life its self, as Connor grew older he began venturing out further from his home town of Houston, Texas with the hopes of discovering and sharing the best that the world has to offer.
            Over the years he's traveled to 36 countries and 37 states, and now calls Silverthorne, Colorado home which is a place that keeps him busy discovering beautiful and inspirational places on a daily basis.
            Being inspired by the Continental Divide which surpasses 14,000 feet in elevation and forms the backdrop of Silverthorne, Connor founded Montezuma Media naming it after the old mining town "Montezuma", which sits on the divide.
            <br/><br/>
            <strong>Montezuma Media Services</strong><br/>
            Montezuma Media's mission is to "share the world from new perspectives", which also means to "share the world from your perspective". We offer a variety of services such as photo shoots, adventure follows,
            product media creation, video production, and canvas prints. Check out our <Link to="/services/">services page</Link> for more details and always feel free to contact us with any questions or requests.
          </p>
        </div>
      </Col>
      <Col xs="12" sm="8" md="5" xl="4" className="offset-sm-2 offset-md-0 p-md-4">
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
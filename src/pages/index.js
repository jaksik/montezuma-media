import React from "react"
import { graphql, Link } from "gatsby"
import { Button } from "reactstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const IndexPage = ({ data }) => {

  return (
    <div style={{ position: `fixed`, width: `100%`, height: `100vh`, overflow: `hidden`, background: `black` }}>
      <SEO title="Adventure Photography" keywords={[`colorado`, `adventure`, `photography`, `montezuma`, `media`]} />
      <Carousel images={data.allFile.edges} className="landing-carousel" />
      <div className="row no-gutters landing-text align-items-center justify-content-center">
        <h2 style={{ alignSelf: `center`, margin: `0 auto` }} className="landing-title">
          Adventure Photography by <br/>Connor Jaksik<br /><br />
          <Link to="/contact"><Button style={{ background: `rgba(24, 21, 16, 1)`, color:`#e9dbbd`}}>Contact</Button></Link>
        </h2>
      </div>
      <Layout></Layout>
    </div>
  )
}

export default IndexPage

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
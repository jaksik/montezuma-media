import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Row } from "reactstrap"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from "../images/montezuma-2.svg"
import "./header.css"
import "./layout.css"
import "../pages/index.css"

function Layout ({ children }) {
  const [open, toggle] = useState(false);

  return (
    <div className="header-wrapper">
      <div style={{maxWidth:`2500px`, margin:`0 auto`}}>
      <div className={`nav-bar ` + (open ? `nav-open` : ``)}>
        <div className="nav-items">
          <AniLink fade to="/" className="nav-item">
            Home
          </AniLink>
          <AniLink fade to="/photography/" className="nav-item">
            Photo
          </AniLink>
          <AniLink fade to="/video/" className="nav-item">
              Video
            </AniLink>
          <AniLink fade to="/services/" className="nav-item">
            Services
          </AniLink>
          <AniLink fade to="/about/" className="nav-item">
            About
          </AniLink>
          <AniLink fade to="/contact" className="nav-item">
            Contact
          </AniLink>
        </div>

        <div className="nav-content">
         <Row className="no-gutters mobile-nav align-items-center">
          <span onClick={() => toggle(!open)} style={{position:`absolute`, marginLeft:`30px`}}>
            <div className={`mobile-icon ` + (open ? `change` : ``)}>
              <div class="bar1"></div>
              <div class="bar2"></div>
              <div class="bar3"></div>
            </div>
          </span>
          <AniLink fade to="/" style={{ textDecoration: `none`, margin:`0 auto`}} className="primary-color nav-brand mobile-brand">
            <img src={logo} style={{margin:`0 auto`}} className="nav-logo"/>
            <h3 style={{margin:`0 0 10px`, fontFamily:`monospace`}} className="primary-font site-title">Montezuma Media</h3>
          </AniLink>
         </Row>

          <div className="desktop-nav-items">
            <AniLink fade to="/" style={{ textDecoration: `none`, margin:`0 auto`}} className="primary-color nav-brand">
              <img src={logo} style={{margin:`0 auto`}} className="nav-logo"/>
              <h3 style={{margin:`0 0 10px`, fontFamily:`monospace`}} className="primary-font site-title">Montezuma Media</h3>
            </AniLink>
            <AniLink fade to="/" className="nav-item">
              Home
            </AniLink>
            <AniLink fade to="/photography/" className="nav-item">
              Photo
            </AniLink>
            <AniLink fade to="/video/" className="nav-item">
              Video
            </AniLink>
            <AniLink fade to="/services" className="nav-item">
              Services
            </AniLink>
            <AniLink fade to="/about" className="nav-item">
              About
            </AniLink>
            <AniLink fade to="/contact" className="nav-item">
              Contact
            </AniLink>
          </div> 
        </div> 
      </div>

      <main className={`main ` + (open ? `open` : ``)}>
        <div className="main-container pt-xl-5">{children}</div>
        <p style={{margin:`40px 40px 0px`, textAlign:`center`, fontSize:`15px`, color:`#e9dbbd`}}>
          © 2019, Montezuma Media All Rights Reserved.
          Website Built by <a href="https://aspenapps.netlify.com">Aspen Apps</a>
        </p>
      </main>

      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

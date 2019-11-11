import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {Row, Col } from "reactstrap"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from "../images/logo.png"
import "./header.css"
import "./layout.css"

function Layout ({ children }) {
  const [open, toggle] = useState(false);

  return (
    <div className="" style={{maxWidth:`2500px`, background:`black`}}>

      <div className={`nav-bar ` + (open ? `nav-open` : ``)}>
        <div className="nav-items">
          <AniLink fade to="/" className="nav-item">
            Home
          </AniLink>
          <AniLink fade to="/galleries/" className="nav-item">
            Galleries
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

            <AniLink fade to="/" style={{ textDecoration: `none`, margin:`0 auto`}} className="primary-color nav-brand">
            <img src={logo} style={{width:`160px`, margin:`0 auto`}}/>
            {/* <h1 style={{margin:`0px`}} className="primary-font">Adventure Photography</h1> */}
          </AniLink>
         </Row>

          <div className="desktop-nav-items">
            <AniLink fade to="/" className="nav-item">
              Home
            </AniLink>
            <AniLink fade to="/galleries" className="nav-item">
              Galleries
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
      </main>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

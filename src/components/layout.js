import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import pic from "../images/gatsby-icon.png"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import logo from "../images/logo.png"
import "./header.css"
import "./layout.css"

function Layout ({ children }) {
  const [open, toggle] = useState(false);

  return (
    <div className="">

      <div className={`nav-bar ` + (open ? `nav-open` : ``)}>
        <div className="nav-items">
          <AniLink fade to="/" className="nav-item">
            Home
          </AniLink>
          <AniLink fade to="/gallery&prints" className="nav-item">
            Gallery & Prints
          </AniLink>
          <AniLink fade to="/services/" className="nav-item">
            Services
          </AniLink>
          <AniLink fade to="/contact" className="nav-item">
            Contact
          </AniLink>
        </div>

        <div className="nav-content">
          <span onClick={() => toggle(!open)} style={{position:`absolute`, marginLeft:`30px`}}>
            <div className={`mobile-icon ` + (open ? `change` : ``)}>
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
            </div>
          </span>

          <Link to="/" style={{ textDecoration: `none`, width:`100%`}} className="primary-color nav-brand">
            <img src={logo} style={{width:`160px`, margin:`0 auto`}}/>
            {/* <h1 style={{margin:`0px`}} className="primary-font">Aspen Media</h1> */}
          </Link>

          <div className="desktop-nav-items">
            <AniLink fade to="/" className="nav-item">
              Home
            </AniLink>
            <AniLink fade to="/gallery&prints" className="nav-item">
              Stills
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
        <div className="main-container">{children}</div>
      </main>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

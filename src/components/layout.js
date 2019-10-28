import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import pic from "../images/gatsby-icon.png"
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import "./header.css"
import "./layout.css"

function Layout ({ children }) {
  const [open, toggle] = useState(false);

  return (
    <div className="wrapper">

      <div className={`nav-bar ` + (open ? `nav-open` : ``)}>
        <div className="nav-items">
          <AniLink fade to="/" className="nav-item">
            <p className="nav-item">Home</p>
          </AniLink>
          <AniLink fade to="/gallery&prints" className="nav-item">
            <p className="nav-item">Gallery & Prints</p>
          </AniLink>
          <AniLink fade to="/contact" className="nav-item">
            <p className="nav-item">Contact</p>
          </AniLink>
        </div>

        <div className="nav-content">
          <span onClick={() => toggle(!open)} style={{position:`absolute`}}>
            <div className={`mobile-icon ` + (open ? `change` : ``)}>
                  <div class="bar1"></div>
                  <div class="bar2"></div>
                  <div class="bar3"></div>
            </div>
          </span>

          <Link to="/" style={{ textDecoration: `none`, width:`100%`}} className="primary-color nav-brand">
            <h1>Aspen Media</h1>
          </Link>

          <div className="desktop-nav-items">
            <AniLink fade to="/">
              <p className="nav-item">Home</p>
            </AniLink>
            <AniLink fade to="/gallery&prints" className="nav-item">
              <p>Gallery & Prints</p>
            </AniLink>
            <AniLink fade to="/contact" className="nav-item">
              <p>Contact</p>
            </AniLink>
          </div> 
        </div> 
      </div>

      <main className={`main ` + (open ? `open` : ``)}>{children}</main>

    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

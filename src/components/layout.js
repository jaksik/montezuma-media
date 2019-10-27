import React, { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"
import pic from "../images/gatsby-icon.png"
import "./header.css"
import "./layout.css"

function Layout ({ children }) {
  const [open, toggle] = useState(false);

  return (
    <div>
      <div className={`nav-bar ` + (open ? `nav-open` : ``)}>
          <div className="nav-items">
            <Link className="nav-item">
              Home
            </Link><br/>
            <Link to="/gallery&prints" className="nav-item">
              Gallery & Prints
            </Link><br/>
            <Link className="nav-item">
              Services
            </Link><br/>
            <Link className="nav-item">
              Contact
            </Link>
          </div>

          <div className="nav-content">
            <span onClick={() => toggle(!open)}>
              <div className={`mobile-icon ` + (open ? `change` : ``)}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
              </div>
            </span>

            <Link to="/" style={{ textDecoration: `none`, width:`100%`}} className="primary-color nav-brand">
              <img src={pic} style={{width:`50px`, height: `50px`, margin: `20px auto`}}/>
              <br/>
              <h1>Aspen Media</h1>
            </Link>

            <div className="desktop-nav-items">
              <Link className="nav-item">
                Home
              </Link><br/>
              <Link to="/gallery&prints" className="nav-item">
                Gallery & Prints
              </Link><br/>
              <Link className="nav-item">
                Services
              </Link><br/>
              <Link className="nav-item">
                Contact
              </Link>
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

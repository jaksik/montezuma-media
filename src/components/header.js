import React, { useState } from 'react';
import { Link } from "gatsby"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from "prop-types"
import pic from "../images/graphics/cart.png"
import "./header.css"

function Header ({ siteTitle }) {
  const [open, toggle] = useState(false);

  return (
    <div>
      <header style={{ marginBottom: `1.45rem`, textAlign: `center`, zIndex:`5`}} className="header-wrapper">
        
        <span onClick={() => toggle(!open)}>
          <div className={`mobile-icon ` + (open ? `change` : ``)}>
            <div class="bar1"></div>
            <div class="bar2"></div>
            <div class="bar3"></div>
          </div>
        </span>

          <h1>
            <Link to="/" style={{ textDecoration: `none`, paddingBottom:`50px`}} className="primary-color">
              {siteTitle}
            </Link>
          </h1>
          
          <img src={pic} style={{width:`50px`, margin: `0 auto`}}/><br/>

      </header>
        <div className="nav-items">
            <Link className="nav-item">
              Home
            </Link>
            <Link to="/gallery&prints" className="nav-item">
              Gallery & Prints
            </Link>
            <Link className="nav-item">
              Services
            </Link>
            <Link className="nav-item">
              Contact
            </Link>
          </div>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

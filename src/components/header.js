import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      textAlign: `center`,
      zIndex:`5`
    }}
    className="header-wrapper"
  >
      <div style={{position:`absolute`, top:`30%`, width:`100%`}}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              textDecoration: `none`,
              paddingBottom:`50px`
            }}
            className="primary-color"
          >
            {siteTitle}
          </Link>
        </h1>

        <Link className="nav-item">
          <p style={{marginTop:`70px`}}>Home</p>
        </Link>
        <Link to="/gallery&prints" className="nav-item">
          <p>Gallery & Prints</p>
        </Link>
        <Link className="nav-item">
          <p>Services</p>
        </Link>
        <Link className="nav-item">
          <p>Contact</p>
        </Link>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

//import React from "react";
import React, { Component } from 'react';
import {Link} from "gatsby";
import "./header.scss"
//import { graphql, useStaticQuery } from "gatsby";

class Header extends Component {
  constructor(props) {
    super(props);
    this.openHamburger = this.openHamburger.bind(this);
    this.state = {
      condition: false,
    };
  }

  openHamburger() {
    this.setState({
      condition: !this.state.condition
    });
  }

  render() {
  
    return (
      <header className="header">
        <div className="inner-header-content">
          <div className="logo-img">
            {/* <img src={data.logoGoldenRatio.publicURL}/> */}
          </div>
          <div className="header-links">
            <button className= { this.state.condition ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse" } type="button" onClick={this.openHamburger}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <ul className="links-list" ref="myDiv">
              <li className="links-list-li">
                <Link to="/">Home</Link>
              </li>
              <li className="links-list-li">
                <Link to="/about-us/">About</Link>
              </li>
              <li className="links-list-li">
                <Link to="/services/">Services</Link>
              </li>
              <li className="links-list-li">
                <Link to="/product/">Products</Link>
              </li>
              <li className="links-list-li">
                <Link to="/success-stories/">Success Stories</Link>
              </li>
              <li className="links-list-li">Blog</li>
              <li className="links-list-li">Contact</li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header

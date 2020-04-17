//import React from "react";
import React, { Component } from 'react';
import {Link, StaticQuery} from "gatsby";
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
            <StaticQuery
              query={graphql`
                query {
                  logoGoldenRatio: file(relativePath: { eq: "golden-logo.svg" }) {
                    publicURL
                  }
                }
              `}
              render={data => (
                <div>
                  <Link to="/"><img src={data.logoGoldenRatio.publicURL}/></Link>
                </div>
              )}
            />
          </div>
          <div className="header-links">
            <button className= { this.state.condition ? "hamburger hamburger--collapse is-active" : "hamburger hamburger--collapse" } type="button" onClick={this.openHamburger}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <ul className="links-list" ref="myDiv">
              <li className="yellow-circle">
              </li>
              <li className="links-list-li">
                <Link to="/" activeClassName="active">Home</Link>
              </li>
              <li className="links-list-li">
                <Link to="/about-us/" activeClassName="active">About</Link>
              </li>
              <li className="links-list-li">
                <Link to="/services/" activeClassName="active">Services</Link>
              </li>
              <li className="links-list-li">
                <Link to="/product/" activeClassName="active">Products</Link>
              </li>
              <li className="links-list-li">
                <Link to="/success-stories/" activeClassName="active">Success Stories</Link>
              </li>
              <li className="links-list-li">
                <Link to="/#blog" activeClassName="active">Blog</Link>
              </li>
              <li className="links-list-li">
                <Link to="/#contact" activeClassName="active">Contact</Link>
              </li>
              <li className="brown-circle-one">
              </li>
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header

import React from "react";
import {Link} from "gatsby";
import "./header.scss"
import { graphql, useStaticQuery } from "gatsby";

const Header = () => {

  const data = useStaticQuery(graphql`
  query {
    logoGoldenRatio: file(relativePath: { eq: "logo-golden-ratio.svg" }) {
      publicURL
    },
    goldenRationSystemBackground: file(relativePath: { eq: "golden-ration-system-background.svg" }) {
      publicURL
    }
  }
  `)

  return (
    <header className="header">
      <div className="inner-header-content">
        <div className="logo-img">
          {/* <Img fixed={data.imageOne.childImageSharp.fixed}/> */}
          <img src={data.logoGoldenRatio.publicURL}/>
        </div>
        <div className="header-links">
          <ul className="links-list">
            <li className="links-list-li">Home</li>
            <li className="links-list-li">
              <Link to="/about-us/">About</Link>
            </li>
            <li className="links-list-li">
              <Link to="/services/">Services</Link>
            </li>
            <li className="links-list-li">
              <Link to="/product/">Products</Link>
            </li>
            <li className="links-list-li">Success Stories</li>
            <li className="links-list-li">Blog</li>
            <li className="links-list-li">Contact</li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

import React from "react"
import "./footer.scss";
import {Link, StaticQuery} from "gatsby";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            footerBg: file(relativePath: { eq: "footer-bg.svg" }) {
                publicURL
            },
            footerLogoImg: file(relativePath: { eq: "logo-golden-ratio-footer.svg" }) {
                publicURL
            },
            footerRightImg: file(relativePath: { eq: "footer-right-img.png" }) {
                publicURL
            }
        }
    `);
  
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <img className="footer-bg-img" src={data.footerBg.publicURL}/>
                <div className="footer-bg-content">
                <Link to="/"><img className="footer-logo-img" src={data.footerLogoImg.publicURL}/></Link>
                    {/* <img className="footer-logo-img" src={data.footerLogoImg.publicURL}/> */}
                    <ul className="footer-menu-container">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/services/">Services</Link>
                        </li>
                        <li>
                            <Link to="/product/">Products</Link>
                        </li>
                        <li>
                            <Link to="/success-stories/">Success Stories</Link>
                        </li>
                        <li>
                            <Link to="/#blog">Blog</Link>
                        </li>
                        <li>
                            <Link to="/#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <img className="footer-right-img" src={data.footerRightImg.publicURL}/>
            </div>
        </footer>
    )
  };

export default Footer

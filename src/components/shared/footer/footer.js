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
                            <Link to="/" activeClassName="active">Home</Link>
                        </li>
                        <li>
                            <Link to="/services/" activeClassName="active">Services</Link>
                        </li>
                        <li>
                            <Link to="/product/" activeClassName="active">Products</Link>
                        </li>
                        <li>
                            <Link to="/success-stories/" activeClassName="active">Success Stories</Link>
                        </li>
                        <li>
                            <Link to="/#blog" activeClassName="active">Blog</Link>
                        </li>
                        <li>
                            <Link to="/#contact" activeClassName="active">Contact</Link>
                        </li>
                    </ul>
                </div>
                <img className="footer-right-img" src={data.footerRightImg.publicURL}/>
            </div>
        </footer>
    )
  };

export default Footer

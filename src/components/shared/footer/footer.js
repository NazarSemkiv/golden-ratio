import React from "react"
import "./footer.scss";
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
    `)
  
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <img className="footer-bg-img" src={data.footerBg.publicURL}/>
                <div className="footer-bg-content container">
                    <img className="footer-logo-img" src={data.footerLogoImg.publicURL}/>
                    {/* <img className="footer-logo-img" src={data.footerLogoImg.publicURL}/> */}
                    <ul className="footer-menu-container">
                        <li>Home</li>
                        <li>Services</li>
                        <li>Products</li>
                        <li>Success Stories</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <img className="footer-right-img" src={data.footerRightImg.publicURL}/>
            </div>
        </footer>
    )
  }  

// const Footer = () => (
//     <footer className={"footer"}>
        
//     </footer>
// );

export default Footer

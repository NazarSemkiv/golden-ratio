import React from "react";
import "./about-us.scss";
import { graphql, useStaticQuery } from "gatsby";

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    query {
      aboutUsMainImg: file(relativePath: { eq: "about-us-main-img.png" }) {
        publicURL
      },
      aboutUsYellowGrid: file(relativePath: { eq: "about-us-yellow-grid.svg" }) {
        publicURL
      },
      aboutUsCurvyBg: file(relativePath: { eq: "about-us-curvy-bg.svg" }) {
        publicURL
      }
    }
  `);
  return (
    <div className="about-us container">
      <div className="about-us-left">
        <img className="about-us-main-img"
             src={data.aboutUsMainImg.publicURL}
             data-sal="slide-right"
             data-sal-delay="300"
             data-sal-easing="ease"
             data-sal-duration="1000"
        />
        <img className="about-us-yellow-grid" src={data.aboutUsYellowGrid.publicURL}/>
        <div className="about-us-circle"></div>
        <img className="about-us-curvy-bg" src={data.aboutUsCurvyBg.publicURL}/>
      </div>
      <div className="about-us-right"
           data-sal="slide-left"
           data-sal-delay="300"
           data-sal-easing="ease"
           data-sal-duration="1000"
      >
        <h5>about us</h5>
        <h2>Golden Ratio Systems</h2>
        <p>Specialize primarily in salesforce.com development. We build scalable complex enterprise grade applications on salesforce that integrate with multiple systems.</p>
        <button className="yellow-btn">Learn more</button>
      </div>
    </div>
  )
};

export default AboutUs

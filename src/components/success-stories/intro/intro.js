import React from "react";
import "./intro.scss";
import { graphql, useStaticQuery } from "gatsby";

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      introSoftwareMainImg: file(relativePath: { eq: "intro-software-main-img.png" }) {
        publicURL
      },
      introGridCircleImg: file(relativePath: { eq: "intro-grid-circle-img.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="intro-software container">
      <div className="intro-software-left">
        <h2>Helps you to make software you need</h2>
        <button className="yellow-btn">Get Started</button>
      </div>
      <div className="intro-software-right">
        <div className="right-block-content">
          <img src={data.introSoftwareMainImg.publicURL}/>
        </div>
      </div>
    </div>
  )
};

export default Intro

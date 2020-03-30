import React from "react";
import "./intro.scss";
import { graphql, useStaticQuery } from "gatsby";

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      introImg: file(relativePath: { eq: "intro-img.png" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="make-software container">
      <div className="make-software-left">
        <h2>Helps you to make software you need</h2>
        <button className="yellow-btn">Get Started</button>
      </div>
      <div className="make-software-right">
        <img src={data.introImg.publicURL}/>
      </div>
    </div>
  )
};

export default Intro
import React from "react";
import "./intro.scss";
import { graphql, useStaticQuery } from "gatsby";

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      introImg: file(relativePath: { eq: "assets-3.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="make-software container">
      <div className="make-software-left"
           data-sal="slide-right"

           data-sal-easing="ease-in-cubic"
           data-sal-duration="1000"
      >
        <h2>Helps you to make software you need</h2>
        <button className="yellow-btn">Get Started</button>
      </div>
      <div className="make-software-right">
        {/* <div className="grey-circle"></div> */}
        <img src={data.introImg.publicURL}/>
      </div>
    </div>
  )
};

export default Intro

import React from "react"
import "./first-slider-item-three.scss";
import { graphql, useStaticQuery } from "gatsby";

const FirstSliderItemThree = () => {

  const data = useStaticQuery(graphql`
    query {
      johndoeLawrenceThird: file(relativePath: { eq: "johndoe-lawrence-third.png" }) {
        publicURL
      },
    }
  `);

  return (
    <div className="slider-item">
      <div className="border-box-color">
        <div className="leadership-team-content">
          <img className="johndoe-lawrence-img" src={data.johndoeLawrenceThird.publicURL}/>
        </div>
        <div className="triangle-first"></div>
        <div className="white-area"></div>
        <div className="triangle-second"></div>
      </div>
      <div className="team-text">
        <h6>Johndoe Lawrence</h6>
        <p>CEO & Founder</p>
      </div>
    </div>
  )
};

export default FirstSliderItemThree

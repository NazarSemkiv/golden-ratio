import React from "react"
import "./first-slider-item-one.scss";
import { graphql, useStaticQuery } from "gatsby";

const FirstSliderItemOne = () => {

  const data = useStaticQuery(graphql`
    query {
      johndoeLawrenceFirst: file(relativePath: { eq: "johndoe-lawrence-first.png" }) {
        publicURL
      },
    }
  `);

  return (
    <div className="slider-item">
      <div className="border-box-color">
        <div className="leadership-team-content">
          <img className="johndoe-lawrence-first" src={data.johndoeLawrenceFirst.publicURL}/>
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

export default FirstSliderItemOne

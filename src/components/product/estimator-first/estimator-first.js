import React from "react"
import "./estimator-first.scss";
import { graphql, useStaticQuery } from "gatsby";

const EstimatorFirst = () => {

  const data = useStaticQuery(graphql`
    query {
      estimatorFirstImgBg: file(relativePath: { eq: "estimator-first-img-bg.png" }) {
        publicURL
      },
      yellowBtn: file(relativePath: { eq: "yellow-btn.svg" }) {
        publicURL
      }
    }
  `)

    return (
      <div id="estimator-first">
        <img className="estimator-first-content-img" src={data.estimatorFirstImgBg.publicURL}/>
        <div className="estimator-first-content">
          <h3 className="estimator-first-content-title">Estimator</h3>
          <p className="estimator-first-content-text">Golden Ratio Systems is a digital product development and consulting 
            company. Specialize primarily in sales force.com development. We build 
            scalable complex enterprise grade applicatzions on salesforce that 
            integrate with multiple systems.
          </p>
          <button className="estimator-yellow-btn-content">
            <img className="estimator-yellow-btn" src={data.yellowBtn.publicURL}/>
            <p className="estimator-yellow-btn-text">Learn more</p>
          </button>
        </div>
      </div>
    )
};

export default EstimatorFirst

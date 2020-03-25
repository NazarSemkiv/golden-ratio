import React from "react"
import "./estimator-third.scss";
import { graphql, useStaticQuery } from "gatsby";

const EstimatorThird = () => {

  const data = useStaticQuery(graphql`
    query {
      estimatorSecondImgBg: file(relativePath: { eq: "estimator-second-img-bg.png" }) {
        publicURL
      },
      yellowBtn: file(relativePath: { eq: "yellow-btn.svg" }) {
        publicURL
      }
    }
  `)

    return (
      <div className="estimator-third container">
        <div className="estimator-third-content">
          <h3 className="estimator-third-content-title">Estimator</h3>
          <p className="estimator-third-content-text">Golden Ratio Systems is a digital product development and consulting 
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

export default EstimatorThird

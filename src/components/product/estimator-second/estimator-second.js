import React from "react"
import "./estimator-second.scss";
import { graphql, useStaticQuery } from "gatsby";

const EstimatorSecond = () => {
  const data = useStaticQuery(graphql`
    query {
      estimatorFirstImgBg: file(relativePath: { eq: "estimator-second-1.png" }) {
        publicURL
      },
      estimatorSecondImgBg: file(relativePath: { eq: "estimator-second-2.png" }) {
        publicURL
      },
      estimatorThirdImgBg: file(relativePath: { eq: "estimator-second-3.png" }) {
        publicURL
      },
    }
  `)

    return (
      <div className="estimator-second">
        <img className="estimator-second-content-img" src={data.estimatorFirstImgBg.publicURL}/>
        <img className="estimator-second-content-img" src={data.estimatorSecondImgBg.publicURL}/>
        <img className="estimator-second-content-img" src={data.estimatorThirdImgBg.publicURL}/>
        <div className="estimator-second-content">
          <h3 className="estimator-second-content-title">Estimator</h3>
          <p className="estimator-second-content-text">Golden Ratio Systems is a digital product development and consulting 
            company. Specialize primarily in sales force.com development. We build 
            scalable complex enterprise grade applicatzions on salesforce that 
            integrate with multiple systems.
          </p>
          <button className="yellow-btn">
            Learn more
          </button>
        </div>
      </div>
    )
};

export default EstimatorSecond

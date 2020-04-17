import React from "react"
import "./estimator-first.scss";
import { graphql, useStaticQuery } from "gatsby";

const EstimatorFirst = () => {

  const data = useStaticQuery(graphql`
    query {
      estimatorFirstImgBg: file(relativePath: { eq: "estimator-first-1.png" }) {
        publicURL
      },
      estimatorSecondImgBg: file(relativePath: { eq: "estimator-first-2.png" }) {
        publicURL
      },
      estimatorThirdImgBg: file(relativePath: { eq: "estimator-first-3.png" }) {
        publicURL
      },
    }
  `)

    return (
      <div className="estimator-first">
        <img className="estimator-first-content-img" src={data.estimatorFirstImgBg.publicURL}/>
        <img className="estimator-first-content-img" src={data.estimatorSecondImgBg.publicURL}/>
        <img className="estimator-first-content-img" src={data.estimatorThirdImgBg.publicURL}/>
        <div className="estimator-first-content"
             data-sal="slide-down"
             data-sal-delay="300"
             data-sal-easing="ease-in-cubic"
             data-sal-duration="1000"
        >
          <h3 className="estimator-first-content-title">Estimator</h3>
          <p className="estimator-first-content-text">Golden Ratio Systems is a digital product development and consulting 
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

export default EstimatorFirst

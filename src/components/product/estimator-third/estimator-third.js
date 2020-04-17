import React from "react"
import "./estimator-third.scss";

const EstimatorThird = () => {
    return (
      <div className="estimator-third">
        <div className="estimator-third-content"
             data-sal="slide-down"

             data-sal-easing="ease-in-cubic"
             data-sal-duration="1000"
        >
          <h3 className="estimator-third-content-title">Estimator</h3>
          <p className="estimator-third-content-text">Golden Ratio Systems is a digital product development and consulting 
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

export default EstimatorThird

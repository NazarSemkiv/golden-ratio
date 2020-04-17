import React from "react";
import "./intro.scss";
import { graphql, useStaticQuery } from "gatsby";

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      servicesImg: file(relativePath: { eq: "services-img.png" }) {
        publicURL
      }
    }
  `)

  return (
    <div className="services-container container">
      <div className="services-left"
           data-sal="slide-right"

           data-sal-easing="ease-in-cubic"
           data-sal-duration="1000"
      >
        <div className="services-left-title">Services</div>
        <div className="services-left-text">
          <p>Golden Ratio Systems is a digital product development and 
            consulting company. Specialize primarily in sales force.com 
            development. We build scalable complex enterprise grade 
            applications on salesforce that integrate with multiple 
            systems.
          </p>
        </div>
      </div>
      <div className="services-right">
        <img className="services-img" src={data.servicesImg.publicURL}/>
      </div>
    </div>
  )
};

export default Intro

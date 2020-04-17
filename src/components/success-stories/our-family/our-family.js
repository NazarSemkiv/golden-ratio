import React from "react";
import "./our-family.scss";
import { graphql, useStaticQuery } from "gatsby";

const OurFamily = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "success-stories-page-our-family-section-background.png" }) {
        publicURL
      },
      logos: file(relativePath: { eq: "success-stories-page-our-family-section.png" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="our-family">
      <img className="our-family-background" src={data.background.publicURL}/>
      <p className="our-family-header-one"
         data-sal="fade"

         data-sal-easing="ease-in-cubic"
         data-sal-duration="1000"
      >our family</p>
      <p className="our-family-header-two"
         data-sal="fade"

         data-sal-easing="ease-in-cubic"
         data-sal-duration="1000"
      >Join the Golden Ratio family.</p>
      {/* <img className="our-family-logos" src={data.logos.publicURL}/> */}
    </div>
  )
};

export default OurFamily

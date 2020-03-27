import React from "react";
import "./partners.scss";
import { graphql, useStaticQuery } from "gatsby";

const Partners = () => {
  const data = useStaticQuery(graphql`
    query {
      partnersBgGrey: file(relativePath: { eq: "partners-bg-grey.png" }) {
        publicURL
      },
      partnersBgWhite: file(relativePath: { eq: "partners-bg-white.svg" }) {
        publicURL
      },
      partnersLogos: file(relativePath: { eq: "partners-logos.svg" }) {
        publicURL
      },
      partnersCloudsBg: file(relativePath: { eq: "partners-clouds-bg.svg" }) {
        publicURL
      },
      partnersBuldings: file(relativePath: { eq: "partners-buldings.png" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="partners">
      <img className="partners-bg-grey" src={data.partnersBgGrey.publicURL}/>
      <img className="partners-bg-white" src={data.partnersBgWhite.publicURL}/>
      <div className="partners-logos-container"></div>
      {/* <img className="partners-logos" src={data.partnersLogos.publicURL}/> */}
      <img className="partners-clouds-bg" src={data.partnersCloudsBg.publicURL}/>
      <div className="partners-content">
        <h5>Our</h5>
        <h2>Partners</h2>
        <button className="transparent-btn">Learn more</button>
      </div>
    </div>
  )
};

export default Partners

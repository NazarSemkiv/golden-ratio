import React from "react";
import "./current-status.scss";
import { graphql, useStaticQuery } from "gatsby";

const CurrentStatus = () => {
  const data = useStaticQuery(graphql`
    query {
      separationBg: file(relativePath: { eq: "separation_bg.svg" }) {
        publicURL
      },
      currentStatusSectionImg: file(relativePath: { eq: "current-status-section-img.png" }) {
        publicURL
      }
    }
  `)

  return (
    <div className="current-status-content">
      <img className="current-status-bg-separator" src={data.separationBg.publicURL}/>
      <img className="current-status-section-img" src={data.currentStatusSectionImg.publicURL}/>
    </div>
  )
}

export default CurrentStatus

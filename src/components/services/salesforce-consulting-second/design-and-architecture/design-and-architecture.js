import React from "react"
import "./design-and-architecture.scss";
import { graphql, useStaticQuery } from "gatsby";

const DesignAndArchitecture = () => {

  const data = useStaticQuery(graphql`
    query {
      designArchitectureMain: file(relativePath: { eq: "design-architecture-main.png" }) {
        publicURL
      },
      designArchitectureTwoCircles: file(relativePath: { eq: "design-architecture-two-circles.svg" }) {
        publicURL
      },
      designArchitectureCurvyBg: file(relativePath: { eq: "design-architecture-curvy-bg.png" }) {
        publicURL
      },
      designArchitectureTrianglesCircle: file(relativePath: { eq: "design-architecture-triangles-circle.svg" }) {
        publicURL
      },
      designArchitectureGridImg: file(relativePath: { eq: "design-architecture-grid-img.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="salesforce-consulting-content container">
      <div className="salesforce-consulting-content-left">
        <h3 className="salesforce-consulting-content-title">Design and architecture</h3>
        <p className="salesforce-consulting-content-text">Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer nec ex lacus. Quisque consequat eleme
          ntum arcu, et tempus elit maximus a. Mauris venenatis mollis
          facilisis. We build scalable complex enterprise grade applications on salesforce that integrate with multiple systems.
        </p>
        <button className="yellow-btn">Learn more</button>
        {/* <button className="salesforce-consulting-content-btn">
              <img className="salesforce-consulting-btn-img" src={data.yellowBtnBg.publicURL}/>
              <p className="salesforce-consulting-btn-text">Learn more</p>
            </button> */}
      </div>
      <div className="salesforce-consulting-content-right">
        <img className="design-architecture-main" src={data.designArchitectureMain.publicURL}/>
        <div className="design-architerture-little-circle"></div>
        <img className="design-architerture-two-circles" src={data.designArchitectureTwoCircles.publicURL}/>
        <div className="design-architerture-yellow-border"></div>
        <img className="design-architerture-curvy-bg" src={data.designArchitectureCurvyBg.publicURL}/>
        <img className="design-architerture-triangles-circle" src={data.designArchitectureTrianglesCircle.publicURL}/>
        <img className="design-architerture-grid-img" src={data.designArchitectureGridImg.publicURL}/>
        {/* <img src={data.designAndArchitectureImg.publicURL}/> */}
      </div>
    </div>
  )
};

export default DesignAndArchitecture

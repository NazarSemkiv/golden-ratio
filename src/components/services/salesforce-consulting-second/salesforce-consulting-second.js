import React from "react"
import "./salesforce-consulting-second.scss";
import { graphql, useStaticQuery } from "gatsby";

const SalesforceConsultingSecond = () => {

  const data = useStaticQuery(graphql`
    query {
      salesforceConsultingSecondImg: file(relativePath: { eq: "salesforce-consulting-second-img.png" }) {
        publicURL
      },
      designAndArchitecture: file(relativePath: { eq: "design-and-architecture.svg" }) {
        publicURL
      },
      customization: file(relativePath: { eq: "customization.svg" }) {
        publicURL
      },
      integrations: file(relativePath: { eq: "integrations.svg" }) {
        publicURL
      },
      communityImplementations: file(relativePath: { eq: "community-implementations.svg" }) {
        publicURL
      },
      securityAssessments: file(relativePath: { eq: "security-assessments.svg" }) {
        publicURL
      },
      salesforceCpqImplementations: file(relativePath: { eq: "salesforce-cpq-implementations.svg" }) {
        publicURL
      },
      designAndArchitectureImg: file(relativePath: { eq: "design-and-architecture-img.png" }) {
        publicURL
      },
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
      },
      yellowBtnBg: file(relativePath: { eq: "yellow-btn-bg.svg" }) {
        publicURL
      }
    }
  `)

    return (
      <div id="salesforce-consulting-second">
        <h2 className="salesforce-consulting-title">Salesforce consulting</h2>
        <div className="salesforce-consulting-icons-container">
          <div className="salesforce-consulting-icons-content">
            <div className="salesforce-consulting-icons-content-active">
              <img className="icons-content-img-active" src={data.designAndArchitecture.publicURL}/>
              <div className="icons-content-active-triangle"></div>
              <p className="icons-content-text-active icons-content-text">Design and architecture</p>
            </div>
          </div>
          <div className="salesforce-consulting-icons-content">
            <img className="icons-content-img" src={data.customization.publicURL}/>
            <p className="icons-content-text">Customization</p>
          </div>
          <div className="salesforce-consulting-icons-content">
            <img className="icons-content-img" src={data.integrations.publicURL}/>
            <p className="icons-content-text">Integrations</p>
          </div>
          <div className="salesforce-consulting-icons-content">
            <img className="icons-content-img" src={data.communityImplementations.publicURL}/>
            <p className="icons-content-text">Community implementations</p>
          </div>
          <div className="salesforce-consulting-icons-content">
            <img className="icons-content-img" src={data.securityAssessments.publicURL}/>
            <p className="icons-content-text">Security assessments</p>
          </div>
          <div className="salesforce-consulting-icons-content">
            <img className="icons-content-img" src={data.salesforceCpqImplementations.publicURL}/>
            <p className="icons-content-text">Salesforce cpq implementations</p>
          </div>
        </div>
        <div className="white-area">
        </div>
        {/* <img src={data.salesforceConsultingSecondImg.publicURL}/> */}
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
      </div>
    )
};

export default SalesforceConsultingSecond

import React from "react"
import "./salesforce-product.scss";
import { graphql, useStaticQuery } from "gatsby";

const SalesforceProduct = () => {

  const data = useStaticQuery(graphql`
    query {
      salesforceProductDevIcons: file(relativePath: { eq: "salesforce-product-dev-icons.png" }) {
        publicURL
      },
      customApplications: file(relativePath: { eq: "custom-applications.svg" }) {
        publicURL
      },
      cpqApplications: file(relativePath: { eq: "cpq-applications.svg" }) {
        publicURL
      },
      managedPackages: file(relativePath: { eq: "managed-packages.svg" }) {
        publicURL
      },
      fullStackDevelopmentIcon: file(relativePath: { eq: "full-stack-development.svg" }) {
        publicURL
      },
      mobileAppDevelopment: file(relativePath: { eq: "mobile-app-development.svg" }) {
        publicURL
      },
      fullStackDevelopmentDg: file(relativePath: { eq: "full-stack-development-bg.png" }) {
        publicURL
      },
      yellowBtnBg: file(relativePath: { eq: "yellow-btn-bg.svg" }) {
        publicURL
      },
      salesforceProductDevBg: file(relativePath: { eq: "salesforce-product-dev-bg.svg" }) {
        publicURL
      },
      fullStackDevMain: file(relativePath: { eq: "full-stack-dev-main.png" }) {
        publicURL
      },
      fullStackDevYellowCircle: file(relativePath: { eq: "full-stack-dev-yellow-circle.svg" }) {
        publicURL
      },
      fullStackDevHalfCircle: file(relativePath: { eq: "full-stack-dev-half-circle.svg" }) {
        publicURL
      },
      fullStackDevTwoCircles: file(relativePath: { eq: "full-stack-dev-two-circles.svg" }) {
        publicURL
      },
      fullStackDevCurvyBg: file(relativePath: { eq: "full-stack-dev-curvy-bg.png" }) {
        publicURL
      },
      fullStackDevTwoTriangles: file(relativePath: { eq: "full-stack-dev-two-triangles.svg" }) {
        publicURL
      },
      fullStackDevYellowGrid: file(relativePath: { eq: "full-stack-dev-yellow-grid.svg" }) {
        publicURL
      }
    }
  `)

    return (
      <div id="salesforce-product">
        <h2 className="salesforce-product-title">Salesforce product development</h2>
        <div className="salesforce-product-icons-container">
          <div className="salesforce-product-icons-content">
            <img className="icons-content-img" src={data.customApplications.publicURL}/>
            <p className="icons-content-text">Custom Applications</p>
          </div>
          <div className="salesforce-product-icons-content">
            <img className="icons-content-img" src={data.cpqApplications.publicURL}/>
            <p className="icons-content-text">Cpq applications</p>
          </div>
          <div className="salesforce-product-icons-content">
            <img className="icons-content-img" src={data.managedPackages.publicURL}/>
            <p className="icons-content-text">Managed packages</p>
          </div>
          <div className="salesforce-product-icons-content">
            <div className="salesforce-product-icons-content-active">
              <img className="icons-content-img-active" src={data.fullStackDevelopmentIcon.publicURL}/>
              <div className="icons-content-active-triangle"></div>
              <p className="icons-content-text-active icons-content-text">Full stack development</p>
            </div>
          </div>
          <div className="salesforce-product-icons-content">
            <img className="icons-content-img" src={data.mobileAppDevelopment.publicURL}/>
            <p className="icons-content-text">mobile app development</p>
          </div>
        </div>
        <div className="white-area">
        </div>
        {/* <img src={data.salesforceProductDevIcons.publicURL}/> */}
        {/* <img className="salesforce-product-content-img" src={data.fullStackDevelopmentDg.publicURL}/> */}
        <img className="salesforce-product-content-bg" src={data.salesforceProductDevBg.publicURL}/>
        <div className="salesforce-product-content container">
          <div className="salesforce-product-content-left">
            <img className="content-left-img" src={data.fullStackDevMain.publicURL}/>
            <img className="content-left-yellow-circle" src={data.fullStackDevYellowCircle.publicURL}/>
            <img className="content-left-half-cirle" src={data.fullStackDevHalfCircle.publicURL}/>
            <img className="content-left-two-circles" src={data.fullStackDevTwoCircles.publicURL}/>
            <img className="content-left-curvy-bg" src={data.fullStackDevCurvyBg.publicURL}/>
            <img className="content-left-two-triangles" src={data.fullStackDevTwoTriangles.publicURL}/>
            <div className="content-left-yellow-circle-two"></div>
            <img className="content-left-yellow-grid" src={data.fullStackDevYellowGrid.publicURL}/>
          </div>
          <div className="salesforce-product-content-right">
            <h3 className="salesforce-product-content-title">Full stack development</h3>
            <p className="salesforce-product-content-text">Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer nec ex lacus. Quisque consequat eleme
              ntum arcu, et tempus elit maximus a. Mauris venenatis mollis 
              facilisis. We build scalable complex enterprise grade applications on salesforce that integrate with multiple systems.
            </p>
            <button className="yellow-btn">Learn more</button>
            {/* <button className="salesforce-product-content-btn">
              <img className="salesforce-product-content-btn-img" src={data.yellowBtnBg.publicURL}/>
              <p className="salesforce-product-content-btn-text">Learn more</p>
            </button> */}
          </div>
        </div>
      </div>
    )
};

export default SalesforceProduct

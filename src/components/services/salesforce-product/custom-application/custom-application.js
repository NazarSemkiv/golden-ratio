import React from "react"
import "./custom-application.scss";
import { graphql, useStaticQuery } from "gatsby";

const CustomApplication = () => {

  const data = useStaticQuery(graphql`
    query {
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
    <div className="salesforce-product-content">
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
        <h3 className="salesforce-product-content-title">Custom applications</h3>
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
  )
};

export default CustomApplication

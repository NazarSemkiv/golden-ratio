import React from "react";
import "./digital-product.scss";
import { graphql, useStaticQuery } from "gatsby";

const DigitalProduct = () => {
  const data = useStaticQuery(graphql`
    query {
      rightMain: file(relativePath: { eq: "home-digitalproduct-main.png" }) {
        publicURL
      },
      leftTop: file(relativePath: { eq: "home-digitalproduct-lefttop.svg" }) {
        publicURL
      },
      rightBottom: file(relativePath: { eq: "home-digitalproduct-rightbottom.svg" }) {
        publicURL
      },
      smallBlockInside: file(relativePath: { eq: "home-digitalproduct-smallblock-inside.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="digital-product">
      <div className="digital-product-left"
           data-sal="slide-right"

           data-sal-easing="ease"
           data-sal-duration="1000"
      >
        <div>
          <p>products</p>
          <p>Digital product development</p>
          <p>
            Golden Ratio Systems is a digital product development
            and consulting company. Specialize primarily in salesforce.com development. We build
            scalable complex enterprise grade applications on salesforce that integrate with multiple
            systems.
          </p>
          <button className="yellow-btn">
            Learn more
          </button>
        </div>
      </div>
      <div className="digital-product-right">
        <img src={data.rightMain.publicURL}/>
        <img src={data.leftTop.publicURL}/>
        <img src={data.rightBottom.publicURL}/>

        <div>
          <div>
            <p>development box</p>
          </div>
          <div>
            <img src={data.smallBlockInside.publicURL}/>
          </div>
        </div>

      </div>
    </div>
  )
};

export default DigitalProduct

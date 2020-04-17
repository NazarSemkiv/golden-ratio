import React from "react";
import "./digital-product.scss";
import { graphql, useStaticQuery } from "gatsby";

const DigitalProduct = () => {
  const data = useStaticQuery(graphql`
    query {
      digitalProductDev: file(relativePath: { eq: "digital-product-dev.svg" }) {
        publicURL
      },
      digitalProductMainImg: file(relativePath: { eq: "digital-product-main-img.png" }) {
        publicURL
      },
      digitalProductYellowStars: file(relativePath: { eq: "digital-product-yellow-stars.svg" }) {
        publicURL
      },
      digitalProductGreyGrid: file(relativePath: { eq: "digital-product-grey-grid.svg" }) {
        publicURL
      },
      digitalProductHalfCircle: file(relativePath: { eq: "digital-product-half-circle.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <div className="digital-product-content">
      <img className="digital-product-content-img" src={data.digitalProductDev.publicURL}/>
      <div className="digital-product-wrapper container">
        <div className="digital-product-wrapper-left"
             data-sal="slide-right"
             data-sal-delay="500"
             data-sal-easing="ease"
             data-sal-duration="1000"
        >
          <h5 className="digital-product-pre-title">who we are</h5>
          <h3 className="digital-product-title">Digital product development</h3>
          <p className="digital-product-text">Golden Ratio Systems is a digital product development and 
            consulting company. Specialize primarily in salesforce.com 
            development. We build scalable complex enterprise grade 
            applications on salesforce that integrate with multiple systems. Golden Ratio Systems is a digital product development and 
            consulting company. Specialize primarily in salesforce.com 
            development. We build scalable complex enterprise grade 
            applications on salesforce that integrate 
          </p>
          <p className="digital-product-text">with multiple systems.</p>
        </div>
        <div className="digital-product-wrapper-right">
          <img className="digital-product-wrapper-img" src={data.digitalProductMainImg.publicURL}
               data-sal="slide-left"
               data-sal-delay="500"
               data-sal-easing="ease"
               data-sal-duration="1000"
          />
          <img className="digital-product-yellow-stars" src={data.digitalProductYellowStars.publicURL}/>
          <img className="digital-product-grey-grid" src={data.digitalProductGreyGrid.publicURL}/>
          <div className="digital-product-yellow-circle"></div>
          <img className="digital-product-half-circle" src={data.digitalProductHalfCircle.publicURL}/>
          {/* <img className="digital-product-wrapper-img" src={data.digitalProduct.childImageSharp.fixed.src}/> */}
        </div>
      </div>
    </div>
  )
}

export default DigitalProduct

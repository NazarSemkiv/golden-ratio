import React from "react";
import "./digital-product.scss";
import { graphql, useStaticQuery } from "gatsby";

const DigitalProduct = () => {
  const data = useStaticQuery(graphql`
    query {
      digitalProductDev: file(relativePath: { eq: "digital-product-dev.svg" }) {
        publicURL
      },
      digitalProduct: file(relativePath: { eq: "digital-product.png" }) {
        childImageSharp {
          fixed(width: 466, height: 395) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div className="digital-product-content">
      <img className="digital-product-content-img" src={data.digitalProductDev.publicURL}/>
      <div className="digital-product-content-wrapper container">
        <div className="digital-product-content-wrapper-left">
          <h5 className="digital-product-content-wrapper-left-pre-title">who we are</h5>
          <h3 className="digital-product-content-wrapper-left-title">Digital product development</h3>
          <p className="digital-product-content-wrapper-left-text">Golden Ratio Systems is a digital product development and
            consulting company. Specialize primarily in salesforce.com 
            development. We build scalable complex enterprise grade 
            applications on salesforce that integrate with multiple systems. Golden Ratio Systems is a digital product development and 
            consulting company. Specialize primarily in salesforce.com 
            development. We build scalable complex enterprise grade 
            applications on salesforce that integrate 
          </p>
          <p className="digital-product-content-wrapper-left-text">with multiple systems.</p>
        </div>
        <div className="digital-product-content-wrapper-right">
          <img className="digital-product-content-wrapper-right-img" src={data.digitalProduct.childImageSharp.fixed.src}/>
        </div>
      </div>
    </div>
  )
}

export default DigitalProduct

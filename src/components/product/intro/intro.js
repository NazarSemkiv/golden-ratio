import React from "react";
import "./intro.scss";
import { graphql, useStaticQuery } from "gatsby";

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      productsImg: file(relativePath: { eq: "products-img.png" }) {
        publicURL
      }
    }
  `)

  return (
    <div className="products-container container">
      <div className="products-left">
        <div className="products-left-title">Products</div>
        <div className="products-left-text">
          <p>Golden Ratio Systems is a digital product development</p>
          <p>and consulting company. Specialize primarily in sales force.com development. We build scalable complex enterprise grade ap- plications on salesforce that integrate with multiple</p> 
          <p>systems.</p>
        </div>
      </div>
      <div className="products-right">
        <img className="products-img" src={data.productsImg.publicURL}/>
      </div>
    </div>
  )
};

export default Intro

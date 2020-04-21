import React from "react";
import "./salesforce-digital.scss";
import { graphql, useStaticQuery } from "gatsby";

const SalesforceDigital = () => {
  const data = useStaticQuery(graphql`
    query {
      salesforceDigitalBg: file(relativePath: { eq: "salesforce-digital-bg.svg" }) {
        publicURL
      },
      productDevelopment: file(relativePath: { eq: "product-development-2.svg" }) {
        publicURL
      },
      salesforceConsultingImg: file(relativePath: { eq: "salesforce-consulting-img-2.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="salesforce-digital">
      <img className="salesforce-digital-bg" src={data.salesforceDigitalBg.publicURL}/>
      <div className="salesforce-digital-container container">
        <div className="salesforce-digital-left"
             data-sal="zoom-out"
             data-sal-delay="300"
             data-sal-easing="ease"
             data-sal-duration="1000"
        >
          <img src={data.productDevelopment.publicURL}/>
          <h3>Salesforce and Digital Product Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam architecto atque beatae ea error est, excepturi fuga harum ipsam mollitia natus provident quibusdam quos ratione, saepe sed ut!</p>
          <button className="transparent-btn">Learn more</button>
        </div>
        <div className="salesforce-digital-right"
             data-sal="zoom-out"
             data-sal-delay="600"
             data-sal-easing="ease"
             data-sal-duration="1000"
        >
          <img src={data.salesforceConsultingImg.publicURL}/>
          <h3>Salesforce Consulting</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam architecto atque beatae ea error est, excepturi fuga harum ipsam mollitia natus provi- dent quibusdam quos ratione, saepe sed ut!</p>
          <button className="transparent-btn">Learn more</button>
        </div>
      </div>
    </div>
  )
};

export default SalesforceDigital

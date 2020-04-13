import React from "react";
import "./salesforce-consulting-first.scss";
import { graphql, useStaticQuery } from "gatsby";

const SalesforceConsultingFirst = () => {
  const data = useStaticQuery(graphql`
    query {
      salesforceConsulting: file(relativePath: { eq: "salesforce-consulting.svg" }) {
        publicURL
      },
      digitalProductDevelopmentImg: file(relativePath: { eq: "digital-product-development-img.svg" }) {
        publicURL
      },
      salesforceConsultingIcon: file(relativePath: { eq: "salesforce-consulting-icon.svg" }) {
        publicURL
      },
      salesforceConsultingNext: file(relativePath: { eq: "salesforce-consulting-next.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <div className="salesforce-consulting">
      <img src={data.salesforceConsulting.publicURL}/>
      <div className="salesforce-consulting-content">
        <div className="content-left content">
          <img src={data.digitalProductDevelopmentImg.publicURL}/>
          <h3>Salesforce and Digital Product Development</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam architecto atque beatae ea error est, excepturi fuga harum ipsam mollitia natus provident quibusdam quos ratione, saepe sed ut!</p>
          <img src={data.salesforceConsultingNext.publicURL}/>
        </div>
        <div className="content-right content">
          <img src={data.salesforceConsultingIcon.publicURL}/>
          <h3>Salesforce Consulting</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aliquam architecto atque beatae ea error est, excepturi fuga harum ipsam mollitia natus provident quibusdam quos ratione, saepe sed ut!</p>
          <img src={data.salesforceConsultingNext.publicURL}/>
        </div>
      </div>
    </div>
  )
}

export default SalesforceConsultingFirst

import React from "react";
import "./comments.scss";
import { graphql, useStaticQuery } from "gatsby";

const Comments = () => {
  const data = useStaticQuery(graphql`
    query {
      logo1: file(relativePath: { eq: "success-page-comment-section-logo1.png" }) {
        publicURL
      },
      logo2: file(relativePath: { eq: "success-page-comments-section-logo2.png" }) {
        publicURL
      },
      logo3: file(relativePath: { eq: "success-page-comments-section-logo3.png" }) {
        publicURL
      },
      background1: file(relativePath: { eq: "success-page-comment-section-background1.png" }) {
        publicURL
      },
      background2: file(relativePath: { eq: "success-page-comment-section-background2.png" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="comments">
      <img className="comments-background1 pos-absolute" src={data.background1.publicURL}/>
      <img className="comments-background2 pos-absolute" src={data.background2.publicURL}/>
      <div className="comments-background3 pos-absolute"></div>
      <div className="comments-background4 pos-absolute"></div>
      <div className="comments-arrow-button first-arrow pos-absolute">
        <div></div>
      </div>
      <div className="comments-arrow-button second-arrow pos-absolute">
        <div></div>
      </div>
      <div className="comments-top">
        <div className="comments-top-one"></div>
        <div className="comments-top-two">
          <img src={data.logo1.publicURL}/>
          <p className="comments-top-two-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications
            on salesforce that integrate with multiple.
          </p>
          <p className="comments-top-two-text">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>
        <div className="comments-top-three">
          <img src={data.logo2.publicURL}/>
          <p className="comments-top-three-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis.
          </p>
          <p className="comments-top-three-text">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>
      </div>
      <div className="comments-bottom">
        <div className="comments-bottom-one">
          <p>
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a.
          </p>
        </div>
        <div className="comments-bottom-two">
          <img src={data.logo3.publicURL}/>
          <p className="comments-bottom-two-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications
            on salesforce that integrate with multiple.
          </p>
          <p className="comments-bottom-two-text">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>
        <div className="comments-bottom-three"></div>
      </div>
    </div>
  )
};

export default Comments

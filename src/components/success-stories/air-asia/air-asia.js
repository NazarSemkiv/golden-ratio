import React from "react";
import "./air-asia.scss";
import { graphql, useStaticQuery } from "gatsby";

const AirAsia= () => {
  const data = useStaticQuery(graphql`
    query {
      airAsiaBg: file(relativePath: { eq: "air-asia-bg.svg" }) {
        publicURL
      },
      toyotaBgImg: file(relativePath: { eq: "toyota-bg-img.png" }) {
        publicURL
      },
      toyotaIcon: file(relativePath: { eq: "toyota-icon.svg" }) {
        publicURL
      },
      airAsiaImage: file(relativePath: { eq: "asia-icon-image.png" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="air-asia">
      <img className="air-asia-bg" src={data.airAsiaBg.publicURL}/>
      <div className="air-asia-top">
        <div className="white-opacity-wrapper">
          <div className="white-img-wrapper">
            <img src={data.toyotaBgImg.publicURL}/>
          </div>
          <div className="white-content-wrapper"></div>
          <div className="air-asia-top-content">
            <h3>Air Asia</h3>
            <p>“Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer nec ex lacus. Quisque consequat eleme
              ntum arcu, et tempus elit maximus a. Mauris venenatis mollis 
              facilisis. We build scalable complex enterprise grade applications on salesforce that integrate with multiple systems”
            </p>
            <div className="air-asia-top-content-bottom">
              <div className="ceo">
                <span>Johndoe Lawrence</span>
                <span>CEO & Founder</span>
              </div>
              <img src={data.toyotaIcon.publicURL}/>
            </div>
          </div>
        </div>
        <div className="white-opacity-wrapper">
          <div>
            <img src={data.toyotaBgImg.publicURL}/>
          </div>
          <div className="air-asia-top-content">
            <h3>Air Asia</h3>
            <p>“Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer nec ex lacus. Quisque consequat eleme
              ntum arcu, et tempus elit maximus a. Mauris venenatis mollis 
              facilisis. We build scalable complex enterprise grade applications on salesforce that integrate with multiple systems”
            </p>
            <div className="air-asia-top-content-bottom">
              <div className="ceo">
                <span>Johndoe Lawrence</span>
                <span>CEO & Founder</span>
              </div>
              <img id="air-asia-icon" src={data.airAsiaImage.publicURL}/>
            </div>
          </div>
        </div>
        <div className="white-opacity-wrapper">
          <div className="white-img-wrapper">
            <img src={data.toyotaBgImg.publicURL}/>
          </div>
          <div className="white-content-wrapper"></div>
          <div className="air-asia-top-content">
            <h3>Rolex</h3>
            <p>“Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer nec ex lacus. Quisque consequat eleme
              ntum arcu, et tempus elit maximus a. Mauris venenatis mollis 
              facilisis. We build scalable complex enterprise grade applications on salesforce that integrate with multiple systems”
            </p>
            <div className="air-asia-top-content-bottom">
              <div className="ceo">
                <span>Johndoe Lawrence</span>
                <span>CEO & Founder</span>
              </div>
              <img src={data.toyotaIcon.publicURL}/>
            </div>
          </div>
        </div>
      </div>
      <div className="air-asia-bottom">
        <button className="bottom-left-btn">
          <div className="arrow-left-btn"></div>
        </button>
        <button className="bottom-right-btn">
          <div className="arrow-right-btn"></div>
        </button>
      </div>
    </div>
  )
};

export default AirAsia

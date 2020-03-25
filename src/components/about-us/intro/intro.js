import React from "react";
import "./intro.scss";
import { graphql, useStaticQuery } from "gatsby";

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      goldenRationSystemBackground: file(relativePath: { eq: "golden-ration-system-background.svg" }) {
        publicURL
      },
      goldenRationSystemBackgroundTwo: file(relativePath: { eq: "golden-ration-system-background-two.svg" }) {
        publicURL
      }
    }
  `)

    const configs = {
        title: 'WOOD PROTECTION AND DECORATION'
    };
    return (
      <div className="golden-ration-system">
        <div className="container golden-ration-inner">
        <img className="goldenBgOne" src={data.goldenRationSystemBackground.publicURL}/>
        <img className="goldenBgTwo" src={data.goldenRationSystemBackgroundTwo.publicURL}/>
          <h2 className="golden-ration-title">
            <p>The golden</p> 
            <p>ration system story</p>
            </h2>
          <p className="golden-ration-text">Digital product development and consulting company. Specialize primarily in salesforce.com 
              development. We build scalable complex enterprise grade applications on salesforce 
              that integrate with multiple systems.</p>
          <button className="golden-ration-btn">Read more</button>
        </div>
      </div>
    )
};

export default Intro

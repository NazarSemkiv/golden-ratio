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
        <div className="container golden-ration-system-inner">
        <img className="golden-ration-system-inner-goldenBgOne" src={data.goldenRationSystemBackground.publicURL}/>
        <img className="golden-ration-system-inner-goldenBgTwo" src={data.goldenRationSystemBackgroundTwo.publicURL}/>
          <h2 className="golden-ration-system-inner-title"
              data-sal="slide-left"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
          >
            <p>The golden</p> 
            <p>ration system story</p>
            </h2>
          <p className="golden-ration-system-inner-text"
             data-sal="slide-right"
             data-sal-delay="600"
             data-sal-easing="ease"
             data-sal-duration="1000"
          >
            Digital product development and consulting
            company. Specialize primarily in salesforce.com
            development. We build scalable complex enterprise grade applications on salesforce
            that integrate with multiple systems.
          </p>
          <button className="golden-ration-system-inner-btn"
                  data-sal="slide-up"
                  data-sal-delay="900"
                  data-sal-easing="ease"
                  data-sal-duration="1000"
          >Read more</button>
        </div>
      </div>
    )
};

export default Intro

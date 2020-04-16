import React from "react";
import "./intro.scss";
import { graphql, useStaticQuery } from "gatsby";

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      introSoftwareMainImg: file(relativePath: { eq: "intro-software-main-img.png" }) {
        publicURL
      },
      introGridCircleImg: file(relativePath: { eq: "intro-grid-circle-img.svg" }) {
        publicURL
      },
      cocaCola: file(relativePath: { eq: "coca-cola.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="intro-software container">
      <div className="intro-software-left">
        <h2>Helps you to make software you need</h2>
        <button className="yellow-btn">Get Started</button>
      </div>
      <div className="intro-software-right">
        <div className="right-block-content">
          <img className="intro-software-main-img" src={data.introSoftwareMainImg.publicURL}/>
          <img className="intro-grid-circle-img" src={data.introGridCircleImg.publicURL}/>
          <div className="yellow-half"></div>
          <div className="right-block-content-bottom">
            <p>Etiam bibendum tempus massa id placerat. 
              Vivamus libero purus, <span>bibendum a massa sed</span>,
              finibus fermentum arcu. Nullam gravida, orci vitae gravida dapibus, augue ante tempor 
              eros, in pretium dolor dui quis lorem.
            </p>
            <div className="bottom-left-right">
              <div className="bottom-left">
                <span>Stephanie Bolton</span>
                <span>CEO & Founder</span>
              </div>
              <img className="coca-cola-img" src={data.cocaCola.publicURL}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Intro

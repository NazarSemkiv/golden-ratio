import React from "react";
import "./blog.scss";
import { graphql, useStaticQuery } from "gatsby";

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      blogBg: file(relativePath: { eq: "blog-bg.svg" }) {
        publicURL
      },
      scalableComplexEnterpriseFirst: file(relativePath: { eq: "scalable-complex-enterprise-first.png" }) {
        publicURL
      },
      scalableComplexEnterpriseSecond: file(relativePath: { eq: "scalable-complex-enterprise-second.png" }) {
        publicURL
      },
      scalableComplexEnterpriseThird: file(relativePath: { eq: "scalable-complex-enterprise-third.png" }) {
        publicURL
      },
      calendarImg: file(relativePath: { eq: "calendar-img.svg" }) {
        publicURL
      },
      blogCurvyBg: file(relativePath: { eq: "blog-curvy-bg.png" }) {
        publicURL
      }
    }
  `)
  return (
    <div className="blog">
      <img className="blog-curvy-bg" src={data.blogCurvyBg.publicURL}/>
      <img className="blog-bg" src={data.blogBg.publicURL}/>
      <div className="blog-wrapper">
        <h5 id="blog">Our</h5>
        <h2
          data-sal="fade"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >Blog</h2>
        <div className="blog-wrapper-bottom">
          <div className="blog-wrapper-bottom-content"
               data-sal="zoom-out"
               data-sal-easing="ease"
               data-sal-delay="200"
               data-sal-duration="1000"
          >
            <img src={data.scalableComplexEnterpriseFirst.publicURL}/>
            <div className="bottom-block">
              <div className="calendar-content">
                <img src={data.calendarImg.publicURL}/>
                <h6>March 1, 2020</h6>
              </div>
              <h4>We build scalable complex enterprise grade applications</h4>
              <button className="transparent-btn">Read more</button>
            </div>
          </div>
          <div className="blog-wrapper-bottom-content"
               data-sal="zoom-out"
               data-sal-delay="400"
               data-sal-easing="ease"
               data-sal-duration="1000"
          >
            <img src={data.scalableComplexEnterpriseSecond.publicURL}/>
            <div className="bottom-block">
              <div className="calendar-content">
                <img src={data.calendarImg.publicURL}/>
                <h6>March 1, 2020</h6>
              </div>
              <h4>We build scalable complex enterprise grade applications</h4>
              <button className="transparent-btn">Read more</button>
            </div>
          </div>
          <div className="blog-wrapper-bottom-content"
               data-sal="zoom-out"
               data-sal-delay="600"
               data-sal-easing="ease"
               data-sal-duration="1000"
          >
            <img src={data.scalableComplexEnterpriseThird.publicURL}/>
            <div className="bottom-block">
              <div className="calendar-content">
                <img src={data.calendarImg.publicURL}/>
                <h6>March 1, 2020</h6>
              </div>
              <h4>We build scalable complex enterprise grade applications</h4>
              <button className="transparent-btn">Read more</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Blog

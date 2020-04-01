import React from "react";
import "./success-story.scss";
import { graphql, useStaticQuery } from "gatsby";
import Slider from "react-slick";

const SuccessStories = () => {
  const data = useStaticQuery(graphql`
    query {
      leftImg1: file(relativePath: { eq: "home-page-success-story-left-img1.png" }) {
        publicURL
      },
      leftImg2: file(relativePath: { eq: "home-page-success-story-left-img2.png" }) {
        publicURL
      },
      logos: file(relativePath: { eq: "home-page-success-story-logos.png" }) {
        publicURL
      },
      userIcon: file(relativePath: { eq: "home-page-success-section-user-logo.png" }) {
        publicURL
      }
    }
  `);

  const settings = {
    dots: true,
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    arrows: false,
    // fade: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <div className="success-story">
      <img className="success-story-left-img1" src={data.leftImg1.publicURL}/>
      <img className="success-story-left-img2" src={data.leftImg2.publicURL}/>
      <div className="success-story-header-one">
        happy client
      </div>
      <div className="success-story-header-two">
        Success Stories
      </div>
      <div className="success-story-logos">
        <img src={data.logos.publicURL}/>
      </div>

      <Slider {...settings} className="slider container">
        <div className="slider-item">
          {/*<div className="success-story-logos">*/}
          {/*  <img src={data.logos.publicURL}/>*/}
          {/*</div>*/}
          <div className="success-story-comment">
            <p className="success-story-comment-text"><span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus
              pendisse at justo non dui malesuada sodales. Vestibulum con
              sequat non mi eu convallis. Ut sed interdum justo. Mauris bibendum eros lectus, quis
              ultricies odio varius eu. <span>”</span></p>
            <div className="success-story-comment-author">
              <img src={data.userIcon.publicURL}/>
              <span className="success-story-comment-author-name">Stephanie Mardell</span>
              <span className="success-story-comment-author-role">Vice President of People</span>
            </div>
            <div className="success-story-comment-button">Read more</div>
            <div className="up-triangle"></div>
            <div className="down-triangle"></div>
          </div>
        </div>

        <div className="slider-item">
          {/*<div className="success-story-logos">*/}
          {/*  <img src={data.logos.publicURL}/>*/}
          {/*</div>*/}
          <div className="success-story-comment">
            <p className="success-story-comment-text"><span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus
              pendisse at justo non dui malesuada sodales. Vestibulum con
              sequat non mi eu convallis. Ut sed interdum justo. Mauris bibendum eros lectus, quis
              ultricies odio varius eu. <span>”</span></p>
            <div className="success-story-comment-author">
              <img src={data.userIcon.publicURL}/>
              <span className="success-story-comment-author-name">Stephanie Mardell</span>
              <span className="success-story-comment-author-role">Vice President of People</span>
            </div>
            <div className="success-story-comment-button">Read more</div>
            <div className="up-triangle"></div>
            <div className="down-triangle"></div>
          </div>
        </div>

        <div className="slider-item">
          {/*<div className="success-story-logos">*/}
          {/*  <img src={data.logos.publicURL}/>*/}
          {/*</div>*/}
          <div className="success-story-comment">
            <p className="success-story-comment-text"><span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus
              pendisse at justo non dui malesuada sodales. Vestibulum con
              sequat non mi eu convallis. Ut sed interdum justo. Mauris bibendum eros lectus, quis
              ultricies odio varius eu. <span>”</span></p>
            <div className="success-story-comment-author">
              <img src={data.userIcon.publicURL}/>
              <span className="success-story-comment-author-name">Stephanie Mardell</span>
              <span className="success-story-comment-author-role">Vice President of People</span>
            </div>
            <div className="success-story-comment-button">Read more</div>
            <div className="up-triangle"></div>
            <div className="down-triangle"></div>
          </div>
        </div>

        <div className="slider-item">
          {/*<div className="success-story-logos">*/}
          {/*  <img src={data.logos.publicURL}/>*/}
          {/*</div>*/}
          <div className="success-story-comment">
            <p className="success-story-comment-text"><span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus
              pendisse at justo non dui malesuada sodales. Vestibulum con
              sequat non mi eu convallis. Ut sed interdum justo. Mauris bibendum eros lectus, quis
              ultricies odio varius eu. <span>”</span></p>
            <div className="success-story-comment-author">
              <img src={data.userIcon.publicURL}/>
              <span className="success-story-comment-author-name">Stephanie Mardell</span>
              <span className="success-story-comment-author-role">Vice President of People</span>
            </div>
            <div className="success-story-comment-button">Read more</div>
            <div className="up-triangle"></div>
            <div className="down-triangle"></div>
          </div>
        </div>
      </Slider>
    </div>
  )
};

export default SuccessStories

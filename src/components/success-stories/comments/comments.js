import React from "react";
import "./comments.scss";
import { graphql, useStaticQuery } from "gatsby";
import Slider from "react-slick";

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
  `);

  const settings = {
    dots: false,
    // centerMode: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    arrows: true,
    rows: 2,
    slidesPerRow: 1,
    // fade: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     infinite: true,
      //     dots: true,
      //   },
      // },
      {
        breakpoint: 606,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
          centerPadding: '24px',
          //centerMode: true
        },
      },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     slidesToScroll: 1,
      //   },
      // },
    ],
  };

  return (
    <div className="comments">
      <img className="comments-background1 pos-absolute" src={data.background1.publicURL}/>
      <img className="comments-background2 pos-absolute" src={data.background2.publicURL}/>
      <div className="comments-background3 pos-absolute"></div>
      <div className="comments-background4 pos-absolute"></div>
      <Slider {...settings} className="slider">
        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo1.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo2.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo3.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo1.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo2.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo3.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>
        {/*////*/}
        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo1.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo2.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo3.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo1.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo2.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>

        <div className="slider-item">
          <div className="slider-item-img">
            <img src={data.logo3.publicURL}/>
          </div>
          <p className="slider-item-text">
            Specialize primarily in salesforce.com development. consectetur adipiscing elit. Integer
            nec ex lacus. Quisque consequat elementum arcu, et tempus elit maximus a. Mauris
            venenatis mollis facilisis. We build scalable complex enterprise grade applications on
            salesforce that integrate with multiple.
          </p>
          <p className="slider-item-author">
            <span>Johndoe Lawrence</span>
            <span>CEO & Founder</span>
          </p>
        </div>
      </Slider>
    </div>
  )
};

export default Comments

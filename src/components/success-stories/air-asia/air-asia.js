import React from "react";
import "./air-asia.scss";
import { graphql, useStaticQuery } from "gatsby";
import Slider from "react-slick";

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
      airAsiaIcon: file(relativePath: { eq: "asia-icon-image.png" }) {
        publicURL
      }
    }
  `);

  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    //autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    arrows: true,
    variableWidth: true,
    centerPadding: '-367px',
    centerMode: true,
    responsive: [
      {
        breakpoint: 1430,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          centerPadding: '-430px',
          //centerMode: true
        },
      },
      {
        breakpoint: 1346,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          centerPadding: '-10px',
          //centerMode: true
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '150px'
        },
      },
      {
        breakpoint: 894,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '95px'
        },
      },
      {
        breakpoint: 723,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '5px'
        },
      },
    ],
  };

  return (
    <div className="air-asia">
      <img className="air-asia-bg" src={data.airAsiaBg.publicURL}/>
      <Slider {...settings} className="slider">

        <div className="slider-item">
          <img className="slider-item-img" src={data.toyotaBgImg.publicURL}/>
          <div className="slider-item-content">
            <img className="slider-item-content-img" src={data.toyotaIcon.publicURL}/>
            <p className="slider-item-content-header">Air Asia</p>
            <p className="slider-item-content-text">
              “Specialize primarily in salesforce.com development. consectetur adipiscing elit.
              Integer nec ex lacus. Quisque consequat eleme
              ntum arcu, et tempus elit maximus a. Mauris venenatis mollis
              facilisis. We build scalable complex enterprise grade applications on salesforce that
              integrate with multiple systems”
            </p>
            <p className="slider-item-content-author">
              <span>Johndoe Lawrence</span>
              <span>CEO & Founder</span>
            </p>
          </div>
        </div>

        <div className="slider-item">
          <img className="slider-item-img" src={data.toyotaBgImg.publicURL}/>
          <div className="slider-item-content">
            <img className="slider-item-content-img" src={data.airAsiaIcon.publicURL}/>
            <p className="slider-item-content-header">Air Asia</p>
            <p className="slider-item-content-text">
              “Specialize primarily in salesforce.com development. consectetur adipiscing elit.
              Integer nec ex lacus. Quisque consequat eleme
              ntum arcu, et tempus elit maximus a. Mauris venenatis mollis
              facilisis. We build scalable complex enterprise grade applications on salesforce that
              integrate with multiple systems”
            </p>
            <p className="slider-item-content-author">
              <span>Johndoe Lawrence</span>
              <span>CEO & Founder</span>
            </p>
          </div>
        </div>

        <div className="slider-item">
          <img className="slider-item-img" src={data.toyotaBgImg.publicURL}/>
          <div className="slider-item-content">
            <img className="slider-item-content-img" src={data.toyotaIcon.publicURL}/>
            <p className="slider-item-content-header">Air Asia</p>
            <p className="slider-item-content-text">
              “Specialize primarily in salesforce.com development. consectetur adipiscing elit.
              Integer nec ex lacus. Quisque consequat eleme
              ntum arcu, et tempus elit maximus a. Mauris venenatis mollis
              facilisis. We build scalable complex enterprise grade applications on salesforce that
              integrate with multiple systems”
            </p>
            <p className="slider-item-content-author">
              <span>Johndoe Lawrence</span>
              <span>CEO & Founder</span>
            </p>
          </div>
        </div>

        <div className="slider-item">
          <img className="slider-item-img" src={data.toyotaBgImg.publicURL}/>
          <div className="slider-item-content">
            <img className="slider-item-content-img" src={data.airAsiaIcon.publicURL}/>
            <p className="slider-item-content-header">Air Asia</p>
            <p className="slider-item-content-text">
              “Specialize primarily in salesforce.com development. consectetur adipiscing elit.
              Integer nec ex lacus. Quisque consequat eleme
              ntum arcu, et tempus elit maximus a. Mauris venenatis mollis
              facilisis. We build scalable complex enterprise grade applications on salesforce that
              integrate with multiple systems”
            </p>
            <p className="slider-item-content-author">
              <span>Johndoe Lawrence</span>
              <span>CEO & Founder</span>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  )
};

export default AirAsia

import React from "react"
import "./leadership.scss";
import { graphql, useStaticQuery } from "gatsby";
import Slider from "react-slick";
import FirstItem from './first-item/first-item';
import SecondItem from './second-item/second-item';
import ThirdItem from './third-item/third-item';
import FourthItem from './fourth-item/fourth-item';
import FifthItem from './fifth-item/fifth-item';

const Leadership = () => {

  const data = useStaticQuery(graphql`
    query {
      arrowPrev: file(relativePath: { eq: "arrow-prev.svg" }) {
        publicURL
      },
      leadershipTeamActive: file(relativePath: { eq: "leadership-team-active.svg" }) {
        publicURL
      },
      leadershipTeamImg: file(relativePath: { eq: "leadership-team-img.svg" }) {
        publicURL
      },
      johndoeLawrenceFirst: file(relativePath: { eq: "johndoe-lawrence-first.png" }) {
        publicURL
      },
      johndoeLawrenceSecond: file(relativePath: { eq: "johndoe-lawrence-second.png" }) {
        publicURL
      },
      johndoeLawrenceThird: file(relativePath: { eq: "johndoe-lawrence-third.png" }) {
        publicURL
      },
      johndoeLawrenceFourth: file(relativePath: { eq: "johndoe-lawrence-fourth.png" }) {
        publicURL
      },
      johndoeLawrenceFifth: file(relativePath: { eq: "johndoe-lawrence-fifth.png" }) {
        publicURL
      },
      arrowNext: file(relativePath: { eq: "arrow-next.svg" }) {
        publicURL
      },
      leadershipContentBottomImg: file(relativePath: { eq: "leadership-content-bottom-img.png" }) {
        publicURL
      },
      linkedIn: file(relativePath: { eq: "linked-in.png" }) {
        publicURL
      }
    }
  `);

  const settings = {
    // className: 'slider-one',
    // asNavFor: 'slider-two',
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 1000,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1248,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 804,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 672,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settingsTwo = {
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      arrows: false,
      dots: false,
      // asNavFor: '.slider',
    };

    return (
      <div id="leadership-content">
        <h5 className="leadership-pre-title">the team</h5>
        <h2 className="leadership-title">Our leadership</h2>
        <Slider {...settings} className="slider container">
        {/*<div className="slider container">*/}
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-first" src={data.johndoeLawrenceFirst.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-img" src={data.johndoeLawrenceSecond.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-img" src={data.johndoeLawrenceThird.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-img" src={data.johndoeLawrenceFourth.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-img" src={data.johndoeLawrenceFifth.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-first" src={data.johndoeLawrenceFirst.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-img" src={data.johndoeLawrenceSecond.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-img" src={data.johndoeLawrenceThird.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-img" src={data.johndoeLawrenceFourth.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
              <div className="slider-item">
                <div className="border-box-color">
                  <div className="leadership-team-content">
                    <img className="johndoe-lawrence-img" src={data.johndoeLawrenceFifth.publicURL}/>
                  </div>
                  <div className="triangle-first"></div>
                  <div className="white-area"></div>
                  <div className="triangle-second"></div>
                </div>
                <div className="team-text">
                  <h6>Johndoe Lawrence</h6>
                  <p>CEO & Founder</p>
                </div>
              </div>
         </Slider>
            {/*</div>*/}
        <Slider {...settingsTwo} className="slider-two container">
        {/*<div className="slider-two container">*/}
            <FirstItem/>
            <SecondItem/>
            <ThirdItem/>
            <FourthItem/>
            <FifthItem/>
        {/*</div>*/}
        </Slider>
      </div>
    )
};

export default Leadership

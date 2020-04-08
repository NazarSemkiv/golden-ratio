import React from "react"
import "./leadership.scss";
import { graphql, useStaticQuery } from "gatsby";
import Slider from "react-slick";

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
    dots: false,
    // centerMode: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    //autoplay: true,
    speed: 1000,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
      <div id="leadership-content">
        <h5 className="leadership-pre-title container">the team</h5>
        <h2 className="leadership-title container">Our leadership</h2>
            <Slider {...settings} className="slider container">
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
        <div className="leadership-content-bottom container">
          <div className="circle"></div>
          <div className="up-triangle"></div>
          <div className="down-triangle"></div>
          <div className="leadership-content-bottom-left">
            <img className="johndoe-lawrence-big-img" src={data.leadershipContentBottomImg.publicURL}/>
          </div>
          <div className="leadership-content-bottom-right">
            <h4 className="leadership-bottom-title">Johndoe Lawrence</h4>
            <p className="leadership-bottom-text text-top">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu tellus massa. Nullam nec vulputate ex. Sed at consequat tortor. Donec vitae commodo augue, non imperdiet ex. Vivamus mollis at purus ac congue. Proin nec nibh quis tortor venenatis euismod et sed tortor. Mauris lobortis mattis commodo.</p>
            <p className="leadership-bottom-text">Etiam sem lectus, pellentesque eget consectetur vitae, sodales tempus augue. In non tincidunt augue. Phasellus mattis nunc dui, a dapibus mi pulvinar nec. Fusce luctus mauris a elementum posuere. Aenean eu consequat nibh, ac ulla- mcorper quam. In sodales tincidunt bibendum. Proin fringilla cursus nunc. Ut neque est, pellentesque a ligula eget, sagittis molestie erat. Vestibulum sed tellus sem. Fusce malesuada ullamcorper fringilla. Donec eget faucibus massa, vel laoreet quam. Nulla nec condimentum orci, ut efficitur ante. Quisque lobor- tis hendrerit tellus, et placerat erat volutpat sit amet. Integer ultricies tempor elit vitae congue. Ut porta et lectus et dictum.</p>
            <img className="linked-in-img" src={data.linkedIn.publicURL}/>
          </div>
        </div>
      </div>
    )
};

export default Leadership

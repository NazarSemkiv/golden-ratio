// import React from "react";
// import "./success-story.scss";
// import { graphql, useStaticQuery } from "gatsby";
// import Slider from "react-slick";
//
// const SuccessStories = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       leftImg1: file(relativePath: { eq: "home-page-success-story-left-img1.png" }) {
//         publicURL
//       },
//       leftImg2: file(relativePath: { eq: "home-page-success-story-left-img2.png" }) {
//         publicURL
//       },
//       logos: file(relativePath: { eq: "home-page-success-story-logos.png" }) {
//         publicURL
//       },
//       userIcon: file(relativePath: { eq: "home-page-success-section-user-logo.png" }) {
//         publicURL
//       }
//     }
//   `);
//
//   const settings = {
//     dots: true,
//     centerMode: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 1000,
//     pauseOnHover: true,
//     autoplaySpeed: 5000,
//     arrows: false,
//     // fade: true,
//     // responsive: [
//     //   {
//     //     breakpoint: 1024,
//     //     settings: {
//     //       slidesToShow: 3,
//     //       slidesToScroll: 3,
//     //       infinite: true,
//     //       dots: true,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 600,
//     //     settings: {
//     //       slidesToShow: 2,
//     //       slidesToScroll: 2,
//     //     },
//     //   },
//     //   {
//     //     breakpoint: 480,
//     //     settings: {
//     //       slidesToShow: 1,
//     //       slidesToScroll: 1,
//     //     },
//     //   },
//     // ],
//   };
//
//   return (
//     <div className="success-story">
//       <img className="success-story-left-img1" src={data.leftImg1.publicURL}/>
//       <img className="success-story-left-img2" src={data.leftImg2.publicURL}/>
//       <div className="success-story-header-one">
//         happy client
//       </div>
//       <div className="success-story-header-two">
//         Success Stories
//       </div>
//       <div className="success-story-logos">
//         <img src={data.logos.publicURL}/>
//       </div>
//
//       <Slider {...settings} className="slider container">
//         <div className="slider-item">
//           {/*<div className="success-story-logos">*/}
//           {/*  <img src={data.logos.publicURL}/>*/}
//           {/*</div>*/}
//           <div className="success-story-comment">
//             <p className="success-story-comment-text"><span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus
//               pendisse at justo non dui malesuada sodales. Vestibulum con
//               sequat non mi eu convallis. Ut sed interdum justo. Mauris bibendum eros lectus, quis
//               ultricies odio varius eu. <span>”</span></p>
//             <div className="success-story-comment-author">
//               <img src={data.userIcon.publicURL}/>
//               <span className="success-story-comment-author-name">Stephanie Mardell</span>
//               <span className="success-story-comment-author-role">Vice President of People</span>
//             </div>
//             <div className="success-story-comment-button">Read more</div>
//             <div className="up-triangle"></div>
//             <div className="down-triangle"></div>
//           </div>
//         </div>
//
//         <div className="slider-item">
//           {/*<div className="success-story-logos">*/}
//           {/*  <img src={data.logos.publicURL}/>*/}
//           {/*</div>*/}
//           <div className="success-story-comment">
//             <p className="success-story-comment-text"><span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus
//               pendisse at justo non dui malesuada sodales. Vestibulum con
//               sequat non mi eu convallis. Ut sed interdum justo. Mauris bibendum eros lectus, quis
//               ultricies odio varius eu. <span>”</span></p>
//             <div className="success-story-comment-author">
//               <img src={data.userIcon.publicURL}/>
//               <span className="success-story-comment-author-name">Stephanie Mardell</span>
//               <span className="success-story-comment-author-role">Vice President of People</span>
//             </div>
//             <div className="success-story-comment-button">Read more</div>
//             <div className="up-triangle"></div>
//             <div className="down-triangle"></div>
//           </div>
//         </div>
//
//         <div className="slider-item">
//           {/*<div className="success-story-logos">*/}
//           {/*  <img src={data.logos.publicURL}/>*/}
//           {/*</div>*/}
//           <div className="success-story-comment">
//             <p className="success-story-comment-text"><span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus
//               pendisse at justo non dui malesuada sodales. Vestibulum con
//               sequat non mi eu convallis. Ut sed interdum justo. Mauris bibendum eros lectus, quis
//               ultricies odio varius eu. <span>”</span></p>
//             <div className="success-story-comment-author">
//               <img src={data.userIcon.publicURL}/>
//               <span className="success-story-comment-author-name">Stephanie Mardell</span>
//               <span className="success-story-comment-author-role">Vice President of People</span>
//             </div>
//             <div className="success-story-comment-button">Read more</div>
//             <div className="up-triangle"></div>
//             <div className="down-triangle"></div>
//           </div>
//         </div>
//
//         <div className="slider-item">
//           {/*<div className="success-story-logos">*/}
//           {/*  <img src={data.logos.publicURL}/>*/}
//           {/*</div>*/}
//           <div className="success-story-comment">
//             <p className="success-story-comment-text"><span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus
//               pendisse at justo non dui malesuada sodales. Vestibulum con
//               sequat non mi eu convallis. Ut sed interdum justo. Mauris bibendum eros lectus, quis
//               ultricies odio varius eu. <span>”</span></p>
//             <div className="success-story-comment-author">
//               <img src={data.userIcon.publicURL}/>
//               <span className="success-story-comment-author-name">Stephanie Mardell</span>
//               <span className="success-story-comment-author-role">Vice President of People</span>
//             </div>
//             <div className="success-story-comment-button">Read more</div>
//             <div className="up-triangle"></div>
//             <div className="down-triangle"></div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   )
// };
//
// export default SuccessStories
import React from "react"
import "./success-story.scss";
import Slider from 'react-slick';
import SuccessItemOne from './success-item-one/success-item-one';
import SuccessItemTwo from './sucess-item-two/sucess-item-two';
import SuccessItemThree from './success-item-three/success-item-three';
import SuccessItemFour from './success-item-four/success-item-four';
import SuccessItemFive from './success-item-five/success-item-five';
import SuccessItemSix from './success-item-six/success-item-six';
import SuccessItemSeven from './success-item-seven/success-item-seven';
import SuccessItemEight from './success-item-eight/success-item-eight';
import SuccessItemNine from './success-item-nine/success-item-nine';
import SuccessItemEleven from './success-item-eleven/success-item-eleven';

class SuccessStories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        adaptiveHeight: true,
      };
    const settingsOne = {
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 1000,
      autoplaySpeed: 2000,
      arrows: false,
      infinite: true,
      dots: false,
          responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 630,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 460,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    };

    return (
          <div className="success-story">
            <SuccessItemThree/>
            <SuccessItemFour/>
            <div className="success-story-header-one">
              happy client
            </div>
            <div className="success-story-header-two"
                 data-sal="fade"
                 data-sal-delay="300"
                 data-sal-easing="ease"
                 data-sal-duration="1000"
            >
              Success Stories
            </div>
            <Slider {...settingsOne} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)}
                    className="success-story-logos container">
              <SuccessItemOne/>
              <SuccessItemTwo/>
              <SuccessItemNine/>
              <SuccessItemEleven/>
              {/*//*/}
              <SuccessItemOne/>
              <SuccessItemTwo/>
              <SuccessItemNine/>
              <SuccessItemEleven/>
            </Slider>

            <Slider {...settings} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)}
                    className="slider container">
              <div className="slider-item">
                <div className="success-story-comment">
                  <p className="success-story-comment-text"><span>“</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sus
                    pendisse at justo non dui malesuada sodales. Vestibulum con
                    sequat non mi eu convallis. Ut sed interdum justo. Mauris bibendum eros lectus, quis
                    ultricies odio varius eu. <span>”</span></p>
                  <div className="success-story-comment-author">
                    <SuccessItemFive/>
                    <span className="success-story-comment-author-name">Stephanie Mardell</span>
                    <span className="success-story-comment-author-role">Vice President of People</span>
                  </div>
                  <div className="success-story-comment-button">Read more</div>
                  <div className="up-triangle"></div>
                  <div className="down-triangle"></div>
                </div>
              </div>

              <div className="slider-item">
                <div className="success-story-comment">
                  <p className="success-story-comment-text"><span>“</span> fkvoewjnvojrenvrewovnwvwv
                    wdvcwdvvwdvcdwvwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                    wwvvvvvvvvvvvvvvvvvvvvwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
                    sddddddddddddddddddddddd. <span>”</span></p>
                  <div className="success-story-comment-author">
                    <SuccessItemSix/>
                    <span className="success-story-comment-author-name">Stephanie Mardell</span>
                    <span className="success-story-comment-author-role">Vice President of People</span>
                  </div>
                  <div className="success-story-comment-button">Read more</div>
                  <div className="up-triangle"></div>
                  <div className="down-triangle"></div>
                </div>
              </div>

              <div className="slider-item">
                <div className="success-story-comment">
                  <p className="success-story-comment-text"><span>“</span>svsvdsvsdvsvsdsvsdvsvsdvsvds
                    dsvsdvsvsvdsvsvsvsvsdvsvdsvsvsvsvsdvsdvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvsvs
                    sefefefefefefefefefefefefefefef<span>”</span></p>
                  <div className="success-story-comment-author">
                    <SuccessItemSeven/>
                    <span className="success-story-comment-author-name">Stephanie Mardell</span>
                    <span className="success-story-comment-author-role">Vice President of People</span>
                  </div>
                  <div className="success-story-comment-button">Read more</div>
                  <div className="up-triangle"></div>
                  <div className="down-triangle"></div>
                </div>
              </div>

              <div className="slider-item">
                <div className="success-story-comment">
                  <p className="success-story-comment-text"><span>“</span> sfvsvfsvfsvsvfsvsvsvfsvsv
                    svssvfsfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk
                    . <span>”</span></p>
                  <div className="success-story-comment-author">
                    <SuccessItemEight/>
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
    );
  }
}

export default SuccessStories


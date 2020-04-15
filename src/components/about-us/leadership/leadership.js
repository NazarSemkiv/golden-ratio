import React from "react"
import "./leadership.scss";
import Slider from "react-slick";
import FirstItem from './first-item/first-item';
import SecondItem from './second-item/second-item';
import ThirdItem from './third-item/third-item';
import FourthItem from './fourth-item/fourth-item';
import FifthItem from './fifth-item/fifth-item';
import FirstSliderItemOne from './first-slider/first-slider-item-one/first-slider-item-one';
import FirstSliderItemTwo from './first-slider/first-slider-item-two/first-slider-item-two';
import FirstSliderItemThree from './first-slider/first-slider-item-three/first-slider-item-three';
import FirstSliderItemFour from './first-slider/first-slider-item-four/first-slider-item-four';
import FirstSliderItemFive from './first-slider/first-slider-item-five/first-slider-item-five';

class Leadership extends React.Component {

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
       focusOnSelect: true,
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
             slidesToScroll: 1,
             infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 1070,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
             infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 804,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
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
       infinite: true,
       dots: false,
     };

     return (
       <div id="leadership-content">
         <h5 className="leadership-pre-title">the team</h5>
         <h2 className="leadership-title">Our leadership</h2>
         <Slider {...settings} asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} className="slider container">
           <FirstSliderItemOne/>
           <FirstSliderItemTwo/>
           <FirstSliderItemThree/>
           <FirstSliderItemFour/>
           <FirstSliderItemFive/>
           <FirstSliderItemOne/>
           <FirstSliderItemTwo/>
           <FirstSliderItemThree/>
           <FirstSliderItemFour/>
           <FirstSliderItemFive/>
         </Slider>
         <Slider {...settingsTwo} asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} className="slider-two container">
           <FirstItem/>
           <SecondItem/>
           <ThirdItem/>
           <FourthItem/>
           <FifthItem/>
           <FirstItem/>
           <SecondItem/>
           <ThirdItem/>
           <FourthItem/>
           <FifthItem/>
         </Slider>
       </div>
     );
   }
}

export default Leadership

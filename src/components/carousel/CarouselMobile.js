import React, { Component } from 'react';
import Slider from "react-slick";
import './assets/css/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jquery from "jquery";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#ededed", padding:"200px 28px 20px 26px", zIndex:"100", height:"180px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", padding:"200px 28px 20px 26px", zIndex:"100", height:"180px" }}
      onClick={onClick}
    />
  );
}

export default class MyCarousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1400,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 7000,
      pauseOnHover: false,
      pauseOnFocus: false,
    
    };
    return (
      <div className="outerContainer">
      <div className="cardContainerMobile">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings} className="innerCardContainerMobile">
        
          <div className="cardStyle1Mobile cardStyle">
            
            <h3>Email Templates</h3>
            <div className="imageContainer">
           <img src="./assets/images/muzic.png" height="90px"/>
           </div>
       <p className="wordStyle"><em>Developed email templates with HTML</em></p>
       <div className="buttonContainer">
    <a className="buttonMobile" href="https://devinsemailtemplates.com"><p>View Templates</p></a>
    </div>
          </div>
          <div className="cardStyle2Mobile cardStyle">
          
            <h3>Adjective Media</h3>
            <div className="imageContainer">
            <img src="./assets/images/adj-02.png" height="90px"/>
            </div>
            <p className="wordStyle"><em>The website of a web development start up company</em></p>
            <div className="buttonContainer">
    <a className="buttonMobile" href="https://adjective.media"><p>Visit Site</p></a>
    </div>
          </div>
          
          <div className="cardStyle3Mobile cardStyle">
          
            <h3>King Pong</h3>
            <div className="imageContainer">
            <img src="./assets/images/kingpong-logo.png" height="90px"/>
            </div>
            <p className="wordStyle"><em>The website of an online table tennis business</em></p>
            <div className="buttonContainer">
    <a className="buttonMobile" href="https://kingpong.co"><p>Visit Site</p></a>
    </div>
          </div>
          
          
        </Slider>
      </div>
    
      </div>
    );
  }
}
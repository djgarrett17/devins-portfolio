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
      <div className="cardContainer">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings} className="innerCardContainer">
        
          <div className="cardStyle1 cardStyle">
            
            <h3>Email Templates</h3>
            <div className="imageContainer">
           <img src="./assets/images/muzic.png" height="120px"/>
           </div>
       <p><em>Developed email templates with HTML</em></p>
       <div className="buttonContainer">
    <a className="button" href="https://devinsemailtemplates.com"><p>View Templates</p></a>
    </div>
          </div>
          <div className="cardStyle2 cardStyle">
          
            <h3>Adjective Media</h3>
            <div className="imageContainer">
            <img src="./assets/images/adj-02.png" height="120px"/>
            </div>
            <p><em>The website of a web development start up company</em></p>
            <div className="buttonContainer">
    <a className="button" href="https://adjective.media"><p>Visit Site</p></a>
    </div>
          </div>
          
          <div className="cardStyle3 cardStyle">
          
            <h3>King Pong</h3>
            <div className="imageContainer">
            <img src="./assets/images/kingpong-logo.png" height="120px"/>
            </div>
            <p><em>The website of an online table tennis business</em></p>
            <div className="buttonContainer">
    <a className="button" href="https://kingpong.co"><p>Visit Site</p></a>
    </div>
          </div>
          
          
        </Slider>
      </div>
    
      </div>
    );
  }
}
// import ReactDOM from 'react-dom';
// // import ReactCardCarousel from 'react-card-carousel';
// import { Link } from 'react-router-dom'
// import './assets/css/style.css';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
// // var Carousel = require('react-responsive-carousel').Carousel;

// class MyCarousel extends Component {

  


//   render() {
//     return (
//       <Carousel>
//         <div className="cardContainer">
//                 <div className="cardStyle">
//                     <img src="assets/1.jpeg" />
//                     <p className="legend">Legend 1</p>
//                 </div>
//                 <div className="cardStyle">
//                     <img src="assets/2.jpeg" />
//                     <p className="legend">Legend 2</p>
//                 </div>
//                 <div className="cardStyle">
//                     <img src="assets/3.jpeg" />
//                     <p className="legend">Legend 3</p>
//                 </div>
//           </div>
//         </Carousel>
      //   <div style={MyCarousel.CONTAINER_STYLE}>
      // <ReactCardCarousel autoplay={ true } autoplay_speed={ 6000 } spread="wide">
      //   <div style={ MyCarousel.CARD_STYLE }>
      //     <a style={ MyCarousel.INNER_CARD_STYLE } target="_blank" href="https://adjective.media">
      //       <img src="./assets/images/adj-02.png" height="80px"/>
      //       <p>ADJECTIVE.MEDIA</p>
      //     </a>
      //     <div style={ MyCarousel.CARD_DESC_STYLE }>
      //       <p>The website of a web development start up company</p>
      //     </div>
      //   </div>
      //   <div style={ MyCarousel.CARD_STYLE }>
      //     <a style={ MyCarousel.INNER_CARD_STYLE } target="_blank" href="https://kingpong.co">
      //       <img src="./assets/images/weblogo.png" height="80px"/>
      //       <p>KINGPONG.CO</p>
      //     </a>
      //     <div style={ MyCarousel.CARD_DESC_STYLE }>
      //       <p>The website of King Pong LLC, an online table tennis business</p>
      //     </div>
      //   </div>
        //  <div style={ MyCarousel.CARD_STYLE }>
        //   <Link style={ MyCarousel.INNER_CARD_STYLE } to="/mailchimp">
        //     <img src="./assets/images/MailchimpImage.png" height="80px"/>
        //     <p>MAILCHIMP PROJECT</p>
        //   </Link>
        //   <div style={ MyCarousel.CARD_DESC_STYLE }>
        //     <p>A newsletter campaign created using Mailchimp</p>
        //   </div>
        // </div> 
       
      //   <div style={ MyCarousel.CARD_STYLE }>
      //     <a style={ MyCarousel.INNER_CARD_STYLE } target="_blank" href="https://devinsemailtemplates.com">
      //       <img src="./assets/images/template2.png" height="80px"/>
      //       <p>EMAIL TEMPLATES</p>
      //     </a>
      //     <div style={ MyCarousel.CARD_DESC_STYLE }>
      //       <p>Developed email templates with HTML:</p>
      //       <a style={ MyCarousel.LINK_STYLE } href="https://devinsemailtemplates.com"><p>View Templates</p></a>
      //     </div>
      //   </div>
      // </ReactCardCarousel>
      // </div>
//     );
//   }
// }
// ReactDOM.render(<MyCarousel/>, document.querySelector('.my-carousel'));
// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
// export default MyCarousel;
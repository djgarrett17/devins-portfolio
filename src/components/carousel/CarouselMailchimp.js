import React, { Component } from 'react';
// import ReactCardCarousel from 'react-card-carousel';
import './assets/css/style.css';
import { Link } from 'react-router-dom'

class MyCarouselMailchimp extends Component {

  static get CARD_STYLE() {
    return {
      height: '300px',
      width: '350px',
      paddingTop: '20px',
      paddingBottom: '20px',
    //   textAlign: 'center',
      background: 'black',
      color: 'white',
      fontSize: '16px',
      
      borderRadius: '5px',
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    };
  }

  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "100%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      
    //   margin: "auto"
    };
  }

  
  static get INNER_CARD_STYLE() {
    return {
      textDecoration: "none",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",

      
    //   margin: "auto"
    };
  }

  static get CARD_DESC_STYLE() {
    return {
      color: "lightgray",
      display: "flex",
      flexDirection: "column",
      width: "80%",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      

      
    //   margin: "auto"
    };
  }

  
  static get LINK_STYLE() {
    return {
      color: "white",
      lineHeight: "140%",

    //   margin: "auto"
    };
  }

  render() {
    return (
      //   <div style={MyCarouselMailchimp.CONTAINER_STYLE}>
      // <ReactCardCarousel autoplay={ true } autoplay_speed={ 6000 } spread="wide">
      //   <div style={ MyCarouselMailchimp.CARD_STYLE }>
      //     <a style={ MyCarouselMailchimp.INNER_CARD_STYLE } target="_blank" href="https://adjective.media">
      //       <img src="./assets/images/AutoEmail.png" height="80px"/>
      //       <p>AUTOMATED NEWSLETTER</p>
      //     </a>
      //     <div style={ MyCarouselMailchimp.CARD_DESC_STYLE }>
      //       <p>Set up an automatic newsletter for new subscribers</p>
      //     </div> 
      //   </div>
      //   <div style={ MyCarouselMailchimp.CARD_STYLE }>
      //     <a style={ MyCarouselMailchimp.INNER_CARD_STYLE } target="_blank" href="https://kingpong.co">
      //       <img src="./assets/images/KingPongAd.png" height="80px"/>
      //       <p>DIGITAL ADS</p>
      //     </a>
      //     <div style={ MyCarouselMailchimp.CARD_DESC_STYLE }>
      //       <p>Ran digital ads through Instagram and Facebook</p>
      //     </div>
      //   </div>
      //   <div style={ MyCarouselMailchimp.CARD_STYLE }>
      //     <a style={ MyCarouselMailchimp.INNER_CARD_STYLE } target="_blank" href="https://kingpong.co">
      //       <img src="./assets/images/ABtest.png" height="80px"/>
      //       <p>A/B TESTING</p>
      //     </a>
      //     <div style={ MyCarouselMailchimp.CARD_DESC_STYLE }>
      //       <p>Conducted an A/B Test testing which subtitle works best</p>
      //     </div>
      //   </div>
      //   <div style={ MyCarouselMailchimp.CARD_STYLE }>
      //     <a style={ MyCarouselMailchimp.INNER_CARD_STYLE } target="_blank" href="https://kingpong.co">
      //       <img src="./assets/images/template2.png" height="80px"/>
      //       <p>EMAIL TEMPLATES</p>
      //     </a>
      //     <div style={ MyCarouselMailchimp.CARD_DESC_STYLE }>
      //       <p>Developed email templates with HTML:</p>
      //       <a style={ MyCarouselMailchimp.LINK_STYLE } href="https://flamboyant-ardinghelli-d63e76.netlify.app/index.html"><p>View Templates</p></a>
      //     </div>
      //   </div>
      // </ReactCardCarousel>
      // </div>
      <div></div>
    );
  }
}

export default MyCarouselMailchimp;
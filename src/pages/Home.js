import React, { Component } from "react";
import { Link } from 'react-router-dom';

import './styles/Home.css';
import $ from 'jquery';

// import Mailchimp from 'react-mailchimp-form';
import MyCarousel from '../components/carousel/Carousel.js';
import MyCarouselMobile from '../components/carousel/CarouselMobile.js';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://gmail.us22.list-manage.com/subscribe/post?u=40ec691997dd3bb870572c1cd&amp;id=06f4f1ef98";

// import { BsArrowRightShort } from "react-icons/bs";
// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

const Home = () => {

    

            return(
               
        <div className="homeWrap">
            <div>
                <p className="titleTxt">My Work</p>
            </div>
            <div className="carouselDiv">
                <div className="carouselDesktop">
                    <MyCarousel/>
                </div>
                <div className="carouselMobile">
                    <MyCarouselMobile/>
                </div>
            </div>
            <div className="subscribeDiv">
                <p className="subscribeTxt">Subscribe to my newsletter and receive a prize!</p>
            </div>
            <div className="formDiv">
                    <SimpleForm/>
            </div>
            {/* <div className="subscribeDiv">
                <p className="subscribeTxt">Subscribe to my newsletter to receive your prize!</p>
            </div>
            <div className="emailDiv">
            <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)}  />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  /> */}
            {/* <Mailchimp 
                action="https://kingpong.us7.list-manage.com/subscribe/post?u=bdd1fa2695abb33207f964b14&amp;id=ed81bdc154"
                fields={[
                    {
                        name: 'FNAME',
                        placeholder: 'First name',
                        type: 'text',
                        required: true
                      },
                  {
                    name: 'EMAIL',
                    placeholder: 'Email',
                    type: 'email',
                    required: true
                  }
                ]}
                messages = {
                    {
                      sending: "Sending...",
                      success: "Thank you for subscribing!",
                      error: "An unexpected internal error has occurred.",
                      empty: "Please enter valid email.",
                      duplicate: "Too many subscribe attempts for this email address",
                      button: <BsArrowRightShort size={"32px"} /> 
                    }
                  }
                /> */}
            {/* </div> */}
        </div>  
        
    )
            }


 
export default Home;
import React ,{useEffect, useContext} from "react";
import { ThemeContext } from "../ThemeContext";
import "../styles/home.css";
// Animations Library
import AOS from "aos";
import "aos/dist/aos.css";
import LightSpeed from 'react-reveal/LightSpeed';
import RubberBand from 'react-reveal/RubberBand';

// Home Compoments
import { HomeDots } from "../components/Home/HomeDots";
// import {FeaturedBox} from "../components/Home/FeaturedBox" ;
import FeaturesSection from "../components/Home/FeaturesSection" ;

import {BannerBox} from '../components/Home/BannerBox' ;

// ASSESTS
import logo from "../assets/images/logo.png" ;
import about_img from "../assets/images/about.png" ;
import vision_img from "../assets/images/vision.png" ;
import homeBanner from "../assets/images/HomeBanner.svg" ;
import yellowCircle from '../assets/images/yellowCircle.svg';
import greenCircle from '../assets/images/greenCircle.svg';
import blueCircle from '../assets/images/blueCircle.png';
import redCircle from '../assets/images/redCircle.svg';
import greenRect from '../assets/images/greenRect.svg';
// import triangle from "../assets/images/Triangle.png" ;
// import circle from "../assets/images/Circle.png" ;
// import rectangle from "../assets/images/Rectangle.png" ;


export const Home = () => {

  const {darkMode} = useContext(ThemeContext) ; 

  // ON SCROLL ANIMATIONS 
  useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 600,
          easing: 'ease-in-sine',
          startEvent: 'load'
          
        });
      }, []);


  return (
    <>

      {/* BANNER */}
      <div className="banner">
				
        <div className="blue1">
        <img src={blueCircle} alt="B1" />
        </div>

        <div className="blue2">

        </div>
        <div className="blue3">
        <img src={blueCircle} alt="B3" />
        </div>
        <div className="blue4">
        <img src={blueCircle} alt="B4" />
        </div>
        <div className="yellow2">
        </div>

        <div className="yellowRect1">
        </div>
        
        <div className="yellowRect2">
        {/* <img src={yellowRect} alt="YR2" /> */}
        </div>

        <div className="greenCircle1">
        <img src={greenCircle} alt="GC1" />
        </div>
        <div className="greenCircle2">
        </div>

        <div className="yellowCircle1">
        <img src={yellowCircle} alt="YC1" />
        </div>

        <div className="redCircle2">
        <img src={redCircle} alt="RC2" />
        </div>

        <div className="greenRect1">
        <img src={greenRect} alt="GR1" />
        </div>

        <div className="redCircle1">
        <img src={redCircle} alt="RC1" />
        </div>


        {/* <div className="triangle">
          <img src={triangle} alt="" />
        </div>

        <div className="circle">
          <img src={circle} alt="" />
        </div>

        <div className="rectangle">
          <img src={rectangle} alt="" />
        </div> */}

        <div className="banner_content">

          <div className="left_content">
            
              <RubberBand>
              <div className="logo">
              <img src={logo} alt="" />
              </div>
              </RubberBand>
            
              <div className="gdsc" >
               
                <LightSpeed left> 
                  <h1 className="banner_header" >
                    GDSC DJSCE 
                  </h1>
                </LightSpeed >

                <LightSpeed left> 
                  <h1 className="banner_header_sm">
                    <p >GDSC</p>
                    <p className="span1" >DJSCE</p>
                  </h1>
                  </LightSpeed >

                  
                  <span data-aos="fade-down" data-aos-duration="800" data-aos-delay="800" >
                    <span className= {darkMode ? "banner_text banner_dark":"banner_text banner_light"} >
                    GDSC DJSCE represents the Google Developer Student Club at the college level and is affiliated with Dwarkadas J. Sanghvi College of 
                    Engineering
                    </span>
                  </span>
                  

              </div>

          </div> 

          <div className="right_content">
            <img src={homeBanner} className="banner_img"  alt="" />
            </div> 
        </div>

        <BannerBox />

      </div>
      {/* closes BANNER */}

  {/* INFO */}
    <div className="info">

      {/* ABOUT */}
      <div className="about">
        <div className="about_img">
          <img src={about_img} alt="" />
        </div>
        <HomeDots />
       
        <h1 className="header" data-aos="fade-right">ABOUT US</h1>
        <div className="content_box">
          <div className="content" data-aos="fade-right"  data-aos-duration="300" data-aos-delay="500" >
            Google Developer Student Clubs (GDSC) are community groups for college interested in Google developer technologies. Students from 
            all undergraduate or graduate programs with an interest in growing as a developer are welcome. GDSC DJSCE is the club made due to 
            persistent efforts put by Soham Dave, a fourth-year student from the Department of Information Technology under the guidance of 
            Dr. Hari Vasudevan, Principal of Dwarkadas J. Sanghvi College of Engineering and Dr. Vinaya Sawant, Head of the Department of Information
             Technology and Prof. Neha Katre, faculty advisor.
          </div>
        </div>
      </div>

      {/* VISION */}
      <div className="vision">
      <div className="vision_img">
          <img src={vision_img} alt="" />
        </div>
        <HomeDots />
        <div className="content_box">
          <div className="content" data-aos="fade-left"  data-aos-delay="500">
           To create a space for students, ranging from novice developers who are just starting, to advanced developers who want to further their 
           skills where they can learn and collaborate as they solve real-world problems and to foster the ability to give back to society with the 
           help of technology. We also aspire to imbibe a sense of responsibility amongst students by making them understand the importance of 
           collectively and effectively working in a team
          </div>
        </div>
        <h1 className="header" data-aos="fade-left" data-offset="100">OUR VISION</h1>
      </div>

    </div>
  {/* closes INFO */}


  {/* FEATURED */}
    {/* <FeaturesSection /> */}
  {/* closes FEATURED */}


    </>


  );
};

import React from "react";
import "../styles/home.css";
import { HomeDots } from "../components/Home/HomeDots";
import {FeaturedBox} from "../components/Home/FeaturedBox" ;
import {BannerBox} from '../components/Home/BannerBox' ;

// import triangle from "../assets/images/Triangle.png" ;
// import circle from "../assets/images/Circle.png" ;
// import rectangle from "../assets/images/Rectangle.png" ;
import logo from "../assets/images/logo.png" ;
import about_img from "../assets/images/about.png" ;
import vision_img from "../assets/images/vision.png" ;
import featured_1 from "../assets/images/featured1.png"
import featured_2 from "../assets/images/featured2.png"
import featured_3 from "../assets/images/featured3.png"
import homeBanner from "../assets/images/HomeBanner.svg" ;
import yellowCircle from '../assets/images/yellowCircle.svg';
import greenCircle from '../assets/images/greenCircle.svg';
import blueCircle from '../assets/images/blueCircle.png';
import redCircle from '../assets/images/redCircle.svg';
import yellowRect from '../assets/images/yellowRect.svg';
import greenRect from '../assets/images/greenRect.svg';


export const Home = () => {
  return (
    <>
      {/* <p className="text-3xl">GDSC Djsce Home</p> */}

      {/* BANNER */}
      <div className="banner">
				
        <div className="blue1">
        <img src={blueCircle} alt="B1" />
        </div>

        <div className="blue2">
        <img src={blueCircle} alt="B2" />
        </div>
        <div className="blue3">
        <img src={blueCircle} alt="B3" />
        </div>
        <div className="blue4">
        <img src={blueCircle} alt="B4" />
        </div>
        <div className="blue5">
        <img src={blueCircle} alt="B5" />
        </div>

        <div className="yellowRect1">
        <img src={yellowRect} alt="YR1" />
        </div>
        
        <div className="yellowRect2">
        <img src={yellowRect} alt="YR2" />
        </div>

        <div className="greenCircle1">
        <img src={greenCircle} alt="GC1" />
        </div>
        <div className="greenCircle2">
        <img src={greenCircle} alt="GC2" />
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

              <div className="logo">
              <img src={logo} alt="" />
              </div>
            
              <div className="gdsc">
                  <span className="banner_header">GDSC DJSCE</span>
                  <span className="banner_header_sm">
                    <p>GDSC</p><p className="span1">DJSCE</p>
                  </span>

                  <span className="banner_text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate nulla facilis soluta. Ea nihil 
                    doloribus impedit consequuntur. Sed atque nesciunt ad debitis voluptates? Sequi, iure fugit omnis 
                    error porro inventore!
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
       
        <h1 className="header">ABOUT US</h1>
        <div className="content_box">
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere rerum perferendis doloribus consectetur
            quae corrupti, impedit odit vitae fuga. Fuga culpa facere earum illo eius. Nobis harum voluptatibus neque 
            at? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas alias delectus laudantium voluptas 
            aperiam impeditiste neque sed, odit ad tempora ea ipsam totam, cupiditate nisi. Sapiente fugit nisi praesentium!
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
          <div className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere rerum perferendis doloribus consectetur
            quae corrupti, impedit odit vitae fuga. Fuga culpa facere earum illo eius. Nobis harum voluptatibus neque 
            at? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas alias delectus laudantium voluptas 
            aperiam impeditiste neque sed, odit ad tempora ea ipsam totam, cupiditate nisi. Sapiente fugit nisi praesentium!
          </div>
        </div>
        <h1 className="header">OUR VISION</h1>

      </div>

    </div>
  {/* closes INFO */}


  {/* FEATURED */}
  <div className="featured">
  <h1 className="header">FEATURED</h1>

  <div className="featured_container" >

    < FeaturedBox 
      title="Title 1"
      color = "#1E88E5"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercita tionem porro neque eaque, tempore quam est?
      ratione!"
      img={featured_1}
      href="#" 
    />

    < FeaturedBox 
      title="Title 2"
      color = "#E94436"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitat ionem porro neque eaque, tempore quam est?
      ratione!"
      img={featured_2}
      href="#" 
    />


    < FeaturedBox 
      title="Title 3"
      color = "#FBC02D"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exer citationem porro neque eaque, tempore quam est?
      ratione!"
      img={featured_3}
      href="#" 
    />


  </div>
      
  </div>
  {/* closes FEATURED */}


    </>


  );
};

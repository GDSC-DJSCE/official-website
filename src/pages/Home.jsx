import React from "react";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import triangle from "../assets/images/Triangle.png" ;
import circle from "../assets/images/Circle.png" ;
import rectangle from "../assets/images/Rectangle.png" ;
import logo from "../assets/images/logo.png" ;
import about_img from "../assets/images/about.png" ;
import vision_img from "../assets/images/vision.png" ;
import featured_1 from "../assets/images/featured1.png"
import featured_2 from "../assets/images/featured2.png"
import featured_3 from "../assets/images/featured3.png"
import { HomeDots } from "../components/HomeDots";
import {FeaturedBox} from "../components/FeaturedBox" ;

import banner_img from "../assets/images/banner_img.svg" ;
import {BannerSVG} from "../components/BannerSVG" ;


export const Home = () => {
  return (
    <>
      {/* <p className="text-3xl">GDSC Djsce Home</p> */}

      {/* BANNER */}
      <div className="banner">

        <div className="triangle">
          <img src={triangle} alt="" />
        </div>

        <div className="circle">
          <img src={circle} alt="" />
        </div>

        <div className="rectangle">
          <img src={rectangle} alt="" />
        </div>

        <div className="banner_content">

          <div className="left_content">
            <div className="logo">
            <img src={logo} alt="" />
            </div>
            <div className="gdsc">
              <span>GDSC</span>
              <span className="span1">DJSCE</span>
            </div>
          </div> 

          <div className="right_content">
              {/* < BannerSVG  className="banner_img"/> */}
            {/* <ReactSVG src= {banner_img} className="banner_img" /> */}
            <img src={banner_img} className="banner_img"  alt="" />
            </div> 
        </div>

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
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem porro neque eaque, tempore quam est?
      Ratione, a necessitatibus! Optio sit modi tempore voluptatibus itaque libero cumque inventore nobis molestias 
      ratione!"
      img={featured_1}
      href="#" 
    />

    < FeaturedBox 
      title="Title 2"
      color = "#E94436"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem porro neque eaque, tempore quam est?
      Ratione, a necessitatibus! Optio sit modi tempore voluptatibus itaque libero cumque inventore nobis molestias 
      ratione!"
      img={featured_2}
      href="#" 
    />


    < FeaturedBox 
      title="Title 3"
      color = "#FBC02D"
      text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem porro neque eaque, tempore quam est?
      Ratione, a necessitatibus! Optio sit modi tempore voluptatibus itaque libero cumque inventore nobis molestias 
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

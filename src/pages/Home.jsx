import React from "react";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import triangle from "../assets/images/Triangle.png" ;
import circle from "../assets/images/Circle.png" ;
import rectangle from "../assets/images/Rectangle.png" ;
import logo from "../assets/images/logo.png" ;
import banner_img from "../assets/images/banner_img.png" ;



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
              GDSC DJSCE
            </div>
          </div> 

          <div className="right_content">
            <div className="logo">
            <img src={banner_img} alt="" />
            </div>
          </div> 

          
        </div>

      </div>
      {/* closes BANNER */}






    </>
  );
};

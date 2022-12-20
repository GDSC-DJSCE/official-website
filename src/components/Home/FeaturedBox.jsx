import React from "react";


export const FeaturedBox = ({title, color , text , img , href}) => {
  return (
    <> 
      <div className = "featured_box"   data-aos="flip-left" data-aos-offset="300">
        <div className="featured_title" style={{ backgroundColor:color }}>{title}</div>
        <div className="body">{text}</div>

        <div className="learnBtn" style={{ backgroundColor:color }}  
        data-aos="zoom-in"   data-aos-delay="250" data-aos-offset="100">
            <a href={href}>LEARN MORE</a>
        </div>
        <div className="featured_img">
            <img src={img} alt="" />
        </div>

      </div>

    </>
  );
};

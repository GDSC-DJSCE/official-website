import React from "react";


export const FeaturedBox = ({title, color , text , img , href}) => {
  return (
    <> 
      <div className = "featured_box" >
        <div className="featured_title" style={{ backgroundColor:color }}>{title}</div>
        <div className="body">{text}</div>
        <div className="learnBtn" style={{ backgroundColor:color }}>
            <a href={href}>LEARN MORE</a>
        </div>
        <div className="featured_img">
            <img src={img} alt="" />
        </div>

      </div>

    </>
  );
};

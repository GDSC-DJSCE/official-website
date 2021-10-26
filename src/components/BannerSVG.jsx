import React from "react";
import banner_img from "../assets/images/banner_img.svg" ;
import { ReactSVG } from 'react-svg'

 export const BannerSVG = () => {
  return (
    <>
      <div>
      <ReactSVG src= {banner_img} />
      </div>
    </>
  );
};

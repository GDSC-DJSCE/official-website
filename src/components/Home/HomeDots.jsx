import React from "react";


export const HomeDots = ({title, color , text , img , href}) => {
  return (
    <> 
      <div className = "dots_box" >
       <div className="dots" style={{backgroundColor:"#0060FF"}}></div>
       <div className="dots" style={{backgroundColor:"#FF1400"}}></div>
       <div className="dots" style={{backgroundColor:"#FFBE00"}}></div>
       <div className="dots" style={{backgroundColor:"#00994E"}}></div>

      </div>

    </>
  );
};

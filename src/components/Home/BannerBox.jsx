import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons';

export const BannerBox = () => {
  return (
    <> 
      <div className = "banner_box" >
        <span className="left_arrow"> 
        <FontAwesomeIcon icon={faAngleLeft}  size="2x" />
        </span>

        <span className="right_arrow"> 
        <p>/</p>
         <FontAwesomeIcon icon={faAngleRight}  size="2x" /> 
        </span>
        
        <div className="banner_span">
            <span style={{color:"#4385F3"}}>CODE. </span>
            <span style={{color:"#E94436"}}>CREATE. </span>
            <span style={{color:"#00994E"}}>DEVELOP. </span>
            <span style={{color:"#FBC02D"}}>BLAH BLAH</span>
        </div>
        

      </div>

    </>
  );
};

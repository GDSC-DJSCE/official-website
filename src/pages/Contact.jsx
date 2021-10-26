import React from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt , faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
export const Contact = () => {
  return (
    <div>
      
      <div class="header font-black">Contact Us</div>
      <div className="sub-header"  >
        Any Questions or Remarks? Just write us a Question
      </div>
      <div class="box shadow w-1190 h-840 bg-white rounded-lg mb-1 ml-12  mr-12 mt-20" >
        
      <div className="box-primary">
        <div class="inner-Box mb-4 mt-8 ml-10">
        <div className="head text-3xl mb-14 font-extrabold">Lets Talk ?</div>
        <label class="block text-gray-700 font-medium mb-2 text-2xl ml-0.5" for="username">
        Your Name 
        </label>
        <input class= "shadow appearance-none border mb-14 rounded py-2 px-3 w-46 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Name"/>
        <label class="block text-gray-700 font-medium mb-2 text-2xl ml-0.5" for="email">
         Your Email 
        </label>
        <div className="mailid">
        <input class="box-mail shadow appearance-none border rounded  py-2 px-3 w-56 h-12 text-gray-700 focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email"/>
        <div className="atRate w-10 h-12 text-xl p-2 shadow appearance-none border rounded font-bold">@</div>
        <input class="box-mail2 shadow appearance-none border rounded w-28 h-12 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="
        "/>
        </div>
        <label class="block text-gray-700 font-medium mb-2 text-2xl ml-0.5" for="email">
         Message
        </label>
        <input class="form shadow appearance-none border mb-14 rounded w-96 h-24 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
        <div class="submit mt-2 ">
          <button class="bg-blue-500 hover:bg-blue-700 w-36 h-12 text-white text-xl font-bold py-2 px-4 rounded-xl">Submit </button>
        </div>
        </div>
      </div>
      <div className="box-secondary" >
        <div className="box-image">
          <img style={{height:"700px" ,marginTop:"-120px",marginLeft:"-50px"}} src="https://s3-alpha-sig.figma.com/img/49e5/d9ca/1766733d946a6d5719a7e3fbf89d1a7c?Expires=1635724800&Signature=FJ-o4y9kKsQq86DU8HTITIO6zh5RKwojE6o3sN1YHJ-zNS6d4grTa8OgltSXtsSO0p027R~524DpL2UgQzJBIySn8RQDumdH7uuBVWx0aD5XvywccNDRXfSE9O2CdZVXgzrQd6xa182avXHDJSjskMTOvhSTXgA76tKr0eb39P3p4xm6GocMrRYjtNA9uccA~pfIHuVtEDxOcZSjtNKeEi10XYN4n5HarDBkb4UnfPUiuQw1ocAuVcoNUERBBwq10qGRWAtDS3wCvTn-3GKBSWSdFAxzOp5fpJrk-EQVAOfvVaNZGFPQ32F8C74WYTIdHTExHAe1SlnMLv6vzQ61gw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt=""/>
        </div>
        <div className="box-detail h-56 mr-14 w-11/12 ">
          <div className="box-address">
            <div class="h-28 w-28 p-7 ml-5"><FontAwesomeIcon icon={faMapMarkerAlt} color="rgba(16, 157, 88, 1)" size="2x" /></div>
            <div className="detail h-28 text-l font-extrabold  py-3">No. U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Rd, Opp.Cooper Hospital, Vile Parle, Mumbai, Maharashtra 400056 </div>
          </div>
          <div className="box-address">
          <div class="h-28 w-28 p-7 ml-5"><FontAwesomeIcon icon={faPhoneAlt} color="rgba(16, 157, 88, 1)" size="2x" /></div>
            <div className="detail h-28 text-xl w-200 p-6 font-extrabold">+91 939282927</div>
          </div>
          <div class="box-map">
          <div><iframe scrolling="no" marginheight="0" marginwidth="0" title="DJ Sanghavi College" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dwarkadas%20J.Sanghavi%20+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" width="100%" height="600" frameborder="0"><a href="https://www.mapsdirections.info/en/measure-map-radius/">Map radius measure</a></iframe></div>
          </div>
          <div class="box-social ml-28 ">
          <img src="https://img.icons8.com/material-rounded/48/000000/phone--v1.png" alt=""/>
           <img src="https://img.icons8.com/color/48/000000/gmail-new.png" alt=""/>
           <img src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png" alt=""/>
           <img src="https://img.icons8.com/material-rounded/48/000000/instagram-new.png" alt=""/>

          </div>

        </div>
        
      </div>  
        
        </div> 
    

    </div>
  );
};

import React from 'react'
import {FeaturedBox} from "./FeaturedBox" ;
import featured_1 from "../../assets/images/featured1.png"
import featured_2 from "../../assets/images/featured2.png"
import featured_3 from "../../assets/images/featured3.png"


function FeaturesSection() {
  return (
    <>
    <div className="featured">
        <h1 className="header" data-aos="fade-down">FEATURED</h1>

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
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercita tionem porro neque eaque, tempore quam est?
            ratione!"
            img={featured_3}
            href="#" 
            />

        </div>
        
    </div>
    
    </>
  )
}

export default FeaturesSection
import React, {useContext} from "react";
import { ThemeContext } from "../ThemeContext";

import {  AppBar, useMediaQuery, makeStyles,useTheme,Typography } from "@material-ui/core";
import { FooterMobile } from "./FooterMobile";

import logo from "../assets/images/logo.png" ;
import arrow from "../assets/images/arrow.png";

const useStyles = makeStyles((theme)=>({
  roots:{
    "&.MuiAppBar-colorPrimary":{
      backgroundColor:"#F6F6F4",
      height:"27vh",
      top:"auto",
      bottom:"0",
      paddingTop:"5vh",
      paddingBottom:"5vh",
      display: "grid",
      gridTemplateColumns: "35% 65%",
      boxShadow:"none",
      margin:0,
    },
  },
  darkroots:{
    "&.MuiAppBar-colorPrimary":{
      backgroundColor:"#1b1b1b",
      height:"27vh",
      top:"auto",
      bottom:"0",
      paddingTop:"5vh",
      paddingBottom:"5vh",
      display: "grid",
      gridTemplateColumns: "35% 65%",
      boxShadow:"none",
      margin:0,
    },
    "& .MuiTypography-root":{
      color:"white",
    },
  },
  footerdetails:{
    display: "grid",
    gridTemplateColumns: "37% 37% 26%",
    color:"white",
  },
  community:{
    color:"black",
    fontSize:"3.2vh",
    fontWeight:"450"
  },
  list:{
    color:"black",
    fontSize:"2.8vh",
    marginTop:"1.2vh",
  },
  footerBottom:{
    height:"9vh" , 
    backgroundColor:"#fffff" ,
    display:"grid" , 
    gridTemplateColumns:"60% 5% 35%",
    paddingTop:"1.5vh",
    paddingBottom:"1vh",
    fontSize:"2.2vh",
    boxShadow:"none",
    overflow:"visble"
  },
  darkfooterBottom:{
    height:"9vh" , 
    backgroundColor:"#2B2B2B" ,
    display:"grid" , 
    gridTemplateColumns:"60% 5% 35%",
    paddingTop:"1.5vh",
    paddingBottom:"1vh",
    fontSize:"2.2vh",
    boxShadow:"none",
    overflow:"visble"
  },
  arrow:{
    position:"absolute",
    marginLeft:"50%",
  }

}));

export const Footer = () => {

  const {darkMode} = useContext(ThemeContext) ;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
   
    {isMobile ? (
      <FooterMobile/> ) : (
    <div>
    <AppBar position="relative" sx={{ top: "auto", bottom: 20 }} className={darkMode ? classes.darkroots : classes.roots}>
     
       <div class="start-logo" style={{display:"grid" , gridTemplateColumns:"30% 70%" }}>
              <img src={logo} alt="logo" style={{width:"15vh" , height:"5vh" ,paddingLeft:"7vh"}}/>
              <Typography style={{ color:"#979797",fontSize:"2.5vh"}}>Developer Students Clubs</Typography>
      </div>
      <div className={classes.footerdetails} >
          <div class="community">
              <Typography className={classes.community}>Community</Typography>
              <div className={classes.list}>
                <Typography style={{marginBottom:"1.2vh"}}>About us</Typography>
                <Typography style={{marginBottom:"1.2vh"}}>Blog</Typography>
                <Typography style={{marginBottom:"1.2vh"}}>Upcoming Events</Typography>
              </div>
          </div>
          <div class="in-touch">
              <Typography className={classes.community}>Keep in touch</Typography>
              <div className={classes.list}>
                <Typography style={{marginBottom:"1.2vh"}}>djscegdsc@gmail.com</Typography>
                <Typography style={{marginBottom:"1.2vh"}}>+91 134567890</Typography>
              </div>
          </div>
          <div class="follow-us"> 
              <Typography className={classes.community}>Follow Us</Typography>
              <div className={classes.list}>
                <Typography style={{marginBottom:"1.2vh"}}>Instagram</Typography>
                <Typography style={{marginBottom:"1.2vh"}}>LinkedIn</Typography>
              </div>
          </div>
      </div>
     
    </AppBar>
    <div className={darkMode ? classes.darkfooterBottom : classes.footerBottom}>
      <div style={{marginLeft:"7vh"}}>
      &copy; GDSC DJSCE 2021
      </div>
      <div>
      <img src={arrow} alt="arrow" style={{width:"5vh", height:"7vh" , marginLeft:"-15vh" , marginTop:"-3vh"}}/>
      </div>
      <div style={{marginLeft:"7vh" , overflow:"hidden"}}>
      Made By @GDSC DJSCE Frontend Team
      </div>
    </div>
    </div>
    ) }
    </div>

  );
};

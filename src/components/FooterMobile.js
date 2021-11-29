import React from 'react';
import {  AppBar, useMediaQuery, makeStyles,useTheme,Typography } from "@material-ui/core";

import logo from "../assets/images/logo.png" ;
import arrow from "../assets/images/arrow.png"
const useStyles = makeStyles((theme)=>({
    roots:{
      "&.MuiAppBar-colorPrimary":{
        backgroundColor:"#F5F5F5",
        height:"37vh",
        top:"auto",
        bottom:"0",
        paddingTop:"1.5vh",
        paddingBottom:"5vh",
        display: "grid",
        gridTemplateRow: "30% 70%",
        boxShadow:"none"
      },
    },
    footerdetails:{
      display: "grid",
      gridTemplateRows: "60% 40%",
    },
    footerdetails2:{
      display:"grid",
      gridTemplateColumns:"45% 5% 50%",
      padding:"2vh"
    },
    community:{
      color:"black",
      fontSize:"2.5vh",
      fontWeight:"450"
      
    },
    list:{
      color:"black",
      fontSize:"2.2vh",
      marginTop:"1.2vh",
    },
    footerBottom:{
      height:"10vh" , 
      backgroundColor:"#E5E5E5" ,
      display:"grid" , 
      gridTemplateColumns:"40% 10% 50%",
      paddingTop:"1.5vh",
      paddingBottom:"1vh",
      fontSize:"1.7vh",
      boxShadow:"none",
    },
    icons:{
      display:"grid",
      gridTemplateColumns:"10vh 10vh",
      paddingLeft:"2vh",
      paddingRight:"1.5vh",
    },
    socialicons:{
      borderWidth:"0.2vh",
      borderColor:"black",
      height:"5vh"
    }
  }));
export const FooterMobile = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
    <div>
    <AppBar position="relative" sx={{ top: "auto", bottom: 20 }} className={classes.roots}>
      <div class="start-logo" style={{display:"grid" , gridTemplateColumns:"10vh 30vh" }}>
          <img src={logo} alt="logo" style={{width:"8vh" , height:"3vh" ,paddingLeft:"3.3vh" ,paddingTop:"0.5vh"}}/>
          <Typography style={{ color:"#979797",fontSize:"2.3vh"}}>Developer Student Clubs</Typography>
      </div>
      <div className={classes.footerdetails} >
          <div>
            <div className={classes.footerdetails2} >
              <div class="community">
                <Typography className={classes.community} style={{marginRight:"1.5vh"}}>Community</Typography>
                <div className={classes.list}>
                  <Typography style={{marginBottom:"1.2vh"}}>About us</Typography>
                  <Typography style={{marginBottom:"1.2vh"}}>Blog</Typography>
                  <Typography style={{marginBottom:"1.2vh"}}>Upcoming Events</Typography>
                </div>
              </div>
              <div style={{borderLeftWidth:"0.2vh" , borderLeftColor:"#979797"  }}></div>
              <div class="in-touch">
                <Typography className={classes.community}>Keep in touch</Typography>
                  <div className={classes.list}>
                    <Typography style={{marginBottom:"1.2vh"}}>djscegdsc@gmail.com</Typography>
                    <Typography style={{marginBottom:"1.2vh"}}>+91 134567890</Typography>
                  </div>
              </div>
            </div>
          </div>
          <div class="follow-us"> 
              <Typography className={classes.community} style={{padding:"1vh" ,paddingLeft:"2vh"}}>Follow Us</Typography>
              <div className={classes.icons}>
                <div style={{width:"5.7vh" , height:"5.7vh"}}>
                <a href="https://www.linkedin.com/company/gdsc-djsce/">
								<img src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png" alt="" />
							  </a>
                </div>
                <div style={{width:"5.7vh" , height:"5.7vh"}}>
                <a href="https://www.instagram.com/gdsc.djsce/">
								<img src="https://img.icons8.com/material-rounded/48/000000/instagram-new.png" alt="" />
							  </a>  
                </div>

              </div>
          </div>
          
      </div> 
    </AppBar>
    <div className={classes.footerBottom}>
    <div style={{marginLeft:"2vh" , marginTop:"2.7vh"}}>
    &copy; GDSC DJSCE 2021
    </div>
    <div>
      <img src={arrow} alt="arrow" style={{width:"5vh", height:"7vh" ,marginLeft:"1vh", marginTop:"-3vh"}}/>
    </div>
    <div style={{fontSize:"1.2vh" , marginTop:"3vh"}}>
    Made By @GDSC DJSCE Frontend Team
    </div>
  </div>
  </div>
  );
}


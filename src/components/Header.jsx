
import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

import logo from "../assets/images/logo.png" ;
import lighttheme from "../assets/images/lighttheme.png"
const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft:"120px",
    display: "flex",
    paddingTop:"2.5vh"
  },
  logo: {
    justifyContent:"center",
    alignItems:"cenetr",
    flexGrow: "1",
    cursor: "pointer",
    color:"#979797",
    fontSize:"2.5vh"
  },
  roots:{
  "&.MuiAppBar-colorPrimary":{
    
    backgroundColor:"#E5E5E5",
  }},
  link: {
    backgroundColor:"#E5E5E5",
    justifyContent:"center",
    alignItems:"center",
    textDecoration: "none",
    color: "#979797",
    fontSize: "20px",
    marginLeft: "20PX",
    marginRight:"25px",
    fontWeight:"600",
    "&:hover": {
      color: "black",
    },
  },
}));

export const  Header = () =>{
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
      <AppBar className={classes.roots}>
      <Toolbar>
        
        {isMobile ? (
          <div style={{display:"grid" , gridTemplateColumns:"10% 65% 25%" , width:"100%"}}>
          <DrawerComponent style={{backgroundColor:"#E5E5E5"}}/>
          <div style={{justifyContent:"center" , alignItems:"center" , display:"grid" , gridTemplateColumns:"20% 80%"}}>
              
              {/*<div style={{display:"grid" , gridTemplateColumns:"20% 80%" ,justifyContent:"center" , alignItems:"center" , }}>*/}
              <img src={logo} alt="logo" style={{width:"50px" , height:"35px" , paddingTop:"1vh" , marginLeft:"35%"}}/>
              
              <Typography className={classes.logo} style={{fontSize:"0.9rem" , margin:"15px"}}>
              Developer Students Club
              </Typography>
            
              
          </div>
          <div >
              <img src={lighttheme} alt="logo" style={{width:"46px" , height:"50px" , paddingTop:"2vh" ,alignItems:"flex-end" ,marginLeft:"60%"}}/>
              </div>
          
        </div>
        ) : (
          <div style={{display:"grid" , gridTemplateColumns:"25% 75%" , width:"100%" }}>
            <div style={{display:"grid" , gridTemplateColumns:"20% 80%" , paddingTop:"2.5vh" ,justifyContent:"center" ,alignItems:"center"}}>
                <div >
                <img src={logo} alt="logo" style={{width:"80px" , height:"45px" , overflow:"hidden"}}/>
                </div>
                <Typography className={classes.logo} style={{marginLeft:"10px"}}>
                Developer Students Club
                </Typography>
                </div>
          <div className={classes.navlinks} style={{paddingLeft:"30vh" , justifyContent:"center" ,alignItems:"center"}}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/events" className={classes.link}>
              Events
            </Link>
            <Link to="/team" className={classes.link}>
              Team
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Button style={{width:"120px" ,height:"35px" , fontSize:"18px",
            backgroundColor:"#2871FA" , color:"white"}}
            >Login</Button>
            <Link to="#">
            <img src={lighttheme} alt="logo" style={{width:"35px" , height:"35px"  , marginLeft:"2vh"  , alignItems:"center"}}/>
            </Link>
          </div>
          </div>
        )}
      </Toolbar>
      </AppBar>
  );
}


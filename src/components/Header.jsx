
import React, {useContext} from "react";
import { ThemeContext } from "../ThemeContext";
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
    paddingTop:"2.5vh",
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
    backgroundColor:"inherit",
  },
  "&.MuiPaper-elevation4":{
    boxShadow:"none",
  },
  },
  link: {
    backgroundColor:"inherit",
    justifyContent:"center",
    alignItems:"center",
    textDecoration: "none",
    color: "#979797",
    fontSize: "20px",
    marginLeft: "20PX",
    marginRight:"25px",
    fontWeight:"450",
    "&:hover": {
      color: "black",
    },
  },
}));

export const  Header = () =>{

  const {darkMode, setDarkMode} = useContext(ThemeContext) ;
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const HandleTheme = ()=> {
  //   setDarkMode(!darkMode);
  // }

  return (

    <div className={darkMode? 'darkBG':'lightBG'}>
      <AppBar className={classes.roots} style={{position:"relative"}}>
      <Toolbar>
        
        {isMobile ? (
          <div style={{display:"grid" , gridTemplateColumns:"10% 80% 10%" , width:"100%"}}>
          <DrawerComponent style={{backgroundColor:"#E5E5E5"}}/>
          <Link to="/" >
          <div style={{justifyContent:"center" , alignItems:"center" , display:"grid" , gridTemplateColumns:"20% 80%"}}>
              {/*<div style={{display:"grid" , gridTemplateColumns:"20% 80%" ,justifyContent:"center" , alignItems:"center" , }}>*/}
              <img src={logo} alt="logo" style={{width:"50px" , height:"35px" , paddingTop:"1vh" , marginLeft:"35%"}}/>
              
              <Typography className={classes.logo} style={{fontSize:"1rem" , margin:"20px"}}>
              Developer Student Clubs
              </Typography>  
  
          </div>
          </Link>

          <div  onClick={() => setDarkMode(!darkMode)}>
              <img src={lighttheme} alt="logo" style={{width:"45px" , height:"50px" , paddingTop:"1.5vh" ,alignItems:"flex-end" }}/>
              </div>
          
        </div>
        ) : (
          <div style={{display:"grid" , gridTemplateColumns:"25% 75%" , width:"100%" }}>

            <Link to="/" >
            <div style={{display:"grid" , gridTemplateColumns:"20% 80%" , paddingTop:"1.5vh" ,justifyContent:"center" ,alignItems:"center" , paddingBottom:"1.5vh"}}>
                <div >
                <img src={logo} alt="logo" style={{width:"80px" , height:"45px" , overflow:"hidden"}}/>
                </div>
                <Typography className={classes.logo} style={{marginLeft:"10px"}}>
                Developer Students Club
                </Typography>
            </div>
            </Link>
               

          <div className={classes.navlinks} style={{paddingLeft:"60vh" , justifyContent:"center" ,alignItems:"center" , paddingBottom:"1.5vh" , paddingTop:"1.5vh"}}>
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
            {/* <Button style={{width:"120px" ,height:"35px" , fontSize:"18px",
            backgroundImage: `linear-gradient(to right,#2871FA, #0214FC)`, color:"white"}}
            >Login</Button> */}
            <Link to="#"  onClick={() => setDarkMode(!darkMode)}>
            <img src={lighttheme} alt="logo" style={{width:"35px" , height:"35px"  , marginLeft:"2vh"  , alignItems:"center"}}/>
            </Link>
          </div>
          </div>
        )}
      </Toolbar>
      </AppBar>

    </div>
     
  );
}


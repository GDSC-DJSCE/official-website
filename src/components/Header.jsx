
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
import GDSCLogo from "../assets/images/GDSC___DJSCE.png" ;
import GDSCLogoDark from "../assets/images/GDSC_DJSCE_Dark.png" ;
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
    fontSize: "18px",
    marginLeft: "20px",
    marginRight:"25px",
    fontWeight:"450",
    "&:hover": {
      color: "black",
    },
  },
  darklink: {
    backgroundColor:"inherit",
    justifyContent:"center",
    alignItems:"center",
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
    marginLeft: "20PX",
    marginRight:"25px",
    fontWeight:"450",
    "&:hover": {
      color: "#979797",
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
          <div style={{display:"grid" , gridTemplateColumns:"100%" }}>
                {/* <div >
                <img src={logo} alt="logo" style={{width:"80px" , height:"45px" , overflow:"hidden"}}/>
                </div>
                <div > */}
               { darkMode?
                <img src={GDSCLogoDark} style={{height:'41px',paddingTop:'10px',width:'200px'}} alt="logo"/>
                :
                <img src={GDSCLogo} style={{height:'35px',marginTop:'10px',width:'200px'}} alt="logo"/>
                }
                {/* <Typography className={classes.logo} style={{marginLeft:"10px"}}>
                Google's Developer Students Club
                </Typography> */}
            </div>
          </Link>

          <div  onClick={() => setDarkMode(!darkMode)}>
              <img src={lighttheme} alt="logo" style={{width:"45px" , height:"50px" , paddingTop:"1.5vh" ,alignItems:"flex-end" }}/>
              </div>
          
        </div>
        ) : (
          <div style={{display:"grid" , gridTemplateColumns:"40% 60%" , width:"100%" }}>

            <Link to="/" >
            <div style={{display:"grid" , gridTemplateColumns:"100%" }}>
                {/* <div >
                <img src={logo} alt="logo" style={{width:"80px" , height:"45px" , overflow:"hidden"}}/>
                </div>
                <div > */}
               { darkMode?
                <img src={GDSCLogoDark} style={{height:'41px',paddingTop:'10px',width:'200px'}} alt="logo"/>
                :
                <img src={GDSCLogo} style={{height:'35px',marginTop:'10px',width:'200px'}} alt="logo"/>
                }
                {/* <Typography className={classes.logo} style={{marginLeft:"10px"}}>
                Google's Developer Students Club
                </Typography> */}
            </div>
            </Link>
               

          <div className={classes.navlinks} style={{ justifyContent:"right" ,alignItems:"right" , paddingBottom:"1.5vh" , paddingTop:"1.5vh"}}>
            <Link to="/" className={darkMode?classes.darklink:classes.link}>
              
              Home
            </Link>
            <Link to="/events" className={darkMode?classes.darklink:classes.link}>
              Events
            </Link>
            <Link to="/team" className={darkMode?classes.darklink:classes.link}>
              Team
            </Link>
            {<a href="https://codeshastra.netlify.app/" className={darkMode?classes.darklink:classes.link}>
            CodeShastra
            </a>}
            <Link to="/contact" className={darkMode?classes.darklink:classes.link}>
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


import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

import {
  AppBar,
  useMediaQuery,
  makeStyles,
  useTheme,
  Typography,
} from "@material-ui/core";
import { FooterMobile } from "./FooterMobile";
import { Link } from "react-router-dom";
import GDSCLogo from "../assets/images/GDSC___DJSCE.png";
import GDSCLogoDark from "../assets/images/GDSC_DJSCE_Dark.png";

const useStyles = makeStyles((theme) => ({
  roots: {
    "&.MuiAppBar-colorPrimary": {
      backgroundColor: "#F6F6F4",
      height: "27vh",
      top: "auto",
      bottom: "0",
      paddingTop: "5vh",
      paddingBottom: "5vh",
      display: "grid",
      gridTemplateColumns: "33% 33% 33%",
      textAlign: "center",
      boxShadow: "none",
      margin: 0,
    },
    "&.MuiTypography-a .MuiTypography-root:hover": {
      cursor: "pointer",
    },
  },
  darkroots: {
    "&.MuiAppBar-colorPrimary": {
      backgroundColor: "#1b1b1b",
      height: "27vh",
      top: "auto",
      bottom: "0",
      paddingTop: "5vh",
      paddingBottom: "5vh",
      display: "grid",
      gridTemplateColumns: "33% 33% 33%",
      textAlign: "center",
      boxShadow: "none",
      margin: 0,
    },
    "& .MuiTypography-root": {
      color: "white",
    },
  },
  footerdetails: {
    display: "grid",
    gridTemplateColumns: "50% 50%",
    color: "white",
  },
  community: {
    color: "black",
    fontSize: "3.2vh",
    fontWeight: "450",
  },
  list: {
    color: "black",
    fontSize: "2.8vh",
    marginTop: "1.2vh",
  },
  footerBottom: {
    height: "9vh",
    backgroundColor: "#fffff",
    textAlign: "center",
    gridTemplateColumns: "100%",
    paddingTop: "1.5vh",
    paddingBottom: "1vh",
    fontSize: "2.2vh",
    boxShadow: "none",
    overflow: "visble",
  },
  darkfooterBottom: {
    height: "9vh",
    backgroundColor: "#2B2B2B",
    textAlign: "center",
    gridTemplateColumns: "100%",
    paddingTop: "1.5vh",
    paddingBottom: "1vh",
    fontSize: "2.2vh",
    boxShadow: "none",
    overflow: "visble",
  },
  arrow: {
    position: "absolute",
    marginLeft: "50%",
  },
}));

export const Footer = () => {
  const { darkMode } = useContext(ThemeContext);
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      {isMobile ? (
        <FooterMobile />
      ) : (
        <div>
          <AppBar
            position="relative"
            sx={{ top: "auto", bottom: 20 }}
            className={darkMode ? classes.darkroots : classes.roots}
          >
            <div
              class="start-logo"
              style={{ textAlign: "center", marginLeft: "2vh" }}
            >
              {darkMode ? (
                <img
                  src={GDSCLogoDark}
                  style={{
                    height: "30px",
                    marginTop: "10px",
                    align: "center",
                    width: "200px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  alt="logo"
                />
              ) : (
                <img
                  src={GDSCLogo}
                  style={{
                    height: "30px",
                    marginTop: "10px",
                    align: "center",
                    width: "200px",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  alt="logo"
                />
              )}
            </div>
            <div class="community">
              <Typography className={classes.community}>Community</Typography>
              <div className={classes.list}>
                <Link to={""} className={classes.links}>
                  <Typography style={{ marginBottom: "1.2vh" }}>
                    About us
                  </Typography>
                </Link>
                <Link to={"/team"} className={classes.links}>
                  <Typography style={{ marginBottom: "1.2vh" }}>
                    Team
                  </Typography>
                </Link>
                <Link to={"/events"} className={classes.links}>
                  <Typography style={{ marginBottom: "1.2vh" }}>
                    Upcoming Events
                  </Typography>
                </Link>
              </div>
            </div>
            {/* <div class="in-touch">
              <Typography className={classes.community}>Keep in touch</Typography>
              <div className={classes.list}>
              <a href="mailto:gdsc.djsce@gmail.com" className={classes.links}>
              <Typography style={{marginBottom:"1.2vh"}}>gdsc.djsce@gmail.com</Typography>
            </a>
                {/* <Typography style={{marginBottom:"1.2vh"}}>+91 134567890</Typography> 
              </div>
          </div> */}
            <div class="follow-us">
              <Typography className={classes.community}>Follow Us</Typography>
              <div className={classes.list}>
                <a href="https://www.instagram.com/gdsc.djsce/">
                  <Typography style={{ marginBottom: "1.2vh" }}>
                    Instagram
                  </Typography>
                </a>
                <a href="https://www.linkedin.com/company/gdsc-djsce/">
                  <Typography style={{ marginBottom: "1.2vh" }}>
                    LinkedIn
                  </Typography>
                </a>
              </div>
            </div>
            {/* <div className={classes.footerdetails} >  
      </div> */}
          </AppBar>
          <div
            className={
              darkMode ? classes.darkfooterBottom : classes.footerBottom
            }
          >
            <div>&copy; GDSC DJSCE 2023</div>
            <div>
              {/* <img src={arrow} alt="arrow" style={{width:"5vh", height:"7vh" , marginLeft:"-15vh" , marginTop:"-3vh"}}/> */}
            </div>
            <div style={{ overflow: "hidden" }}>Made with ❤ by GDSC DJSCE</div>
          </div>
        </div>
      )}
    </div>
  );
};

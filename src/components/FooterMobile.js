import React, {useContext} from "react";
import { ThemeContext } from "../ThemeContext";
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
    darkroots:{
      "&.MuiAppBar-colorPrimary":{
        backgroundColor:"#1b1b1b",
        height:"37vh",
        top:"auto",
        bottom:"0",
        paddingTop:"1.5vh",
        paddingBottom:"5vh",
        display: "grid",
        gridTemplateRow: "30% 70%",
        boxShadow:"none"
      },
      "& .MuiTypography-root":{
        color:"white",
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
    darkfooterBottom:{
      height:"10vh" , 
      backgroundColor:"#2b2b2b" ,
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
  const {darkMode} = useContext(ThemeContext) ;
    const classes = useStyles();
    const theme = useTheme();
    return (
    <div>
    <AppBar position="relative" sx={{ top: "auto", bottom: 20 }} className={darkMode ? classes.darkroots : classes.roots}>
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
                {darkMode ? 
                <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzk1YTVhNiI+PHBhdGggZD0iTTEzNi4xNjY2NywyMS41aC0xMDAuMzMzMzNjLTcuOTE5MTcsMCAtMTQuMzMzMzMsNi40MTQxNyAtMTQuMzMzMzMsMTQuMzMzMzN2MTAwLjMzMzMzYzAsNy45MTkxNyA2LjQxNDE3LDE0LjMzMzMzIDE0LjMzMzMzLDE0LjMzMzMzaDEwMC4zMzMzM2M3LjkxOTE3LDAgMTQuMzMzMzMsLTYuNDE0MTcgMTQuMzMzMzMsLTE0LjMzMzMzdi0xMDAuMzMzMzNjMCwtNy45MTkxNyAtNi40MTQxNywtMTQuMzMzMzMgLTE0LjMzMzMzLC0xNC4zMzMzM3pNNTUuNDU1NjcsMTIxLjgzMzMzdjBjLTQuOTk1MTcsMCAtOS4wNDQzMywtNC4wNDkxNyAtOS4wNDQzMywtOS4wNDQzM3YtMzIuMDg1MTdjMC4wMDcxNywtNC45ODggNC4wNTYzMywtOS4wMzcxNyA5LjA0NDMzLC05LjAzNzE3djBjNC45OTUxNywwIDkuMDQ0MzMsNC4wNDkxNyA5LjA0NDMzLDkuMDQ0MzN2MzIuMDg1MTdjMCw0Ljk4OCAtNC4wNDkxNyw5LjAzNzE3IC05LjA0NDMzLDkuMDM3MTd6TTU1LjE0MDMzLDYyLjQ3MTgzYy01LjUyNTUsMCAtOS4yMTYzMywtMy42ODM2NyAtOS4yMTYzMywtOC42YzAsLTQuOTE2MzMgMy42ODM2NywtOC42IDkuODI1NSwtOC42YzUuNTI1NSwwIDkuMjE2MzMsMy42ODM2NyA5LjIxNjMzLDguNmMwLDQuOTE2MzMgLTMuNjgzNjcsOC42IC05LjgyNTUsOC42ek0xMjAuMjQ5NSwxMjEuODMzMzN2MGMtNC44MzAzMywwIC04Ljc1MDUsLTMuOTIwMTcgLTguNzUwNSwtOC43NTA1di0xOC42NjkxN2MwLC03LjU4MjMzIC00LjY2NTUsLTguNDEzNjcgLTYuNDE0MTcsLTguNDEzNjdjLTEuNzQ4NjcsMCAtNy41ODIzMywwLjI1MDgzIC03LjU4MjMzLDguNDEzNjd2MTguNjY5MTdjMCw0LjgzMDMzIC0zLjkyMDE3LDguNzUwNSAtOC43NTA1LDguNzUwNWgtMC41ODA1Yy00LjgzMDMzLDAgLTguNzUwNSwtMy45MjAxNyAtOC43NTA1LC04Ljc1MDV2LTMyLjM3MTgzYzAsLTQuOTk1MTcgNC4wNDkxNywtOS4wNDQzMyA5LjA0NDMzLC05LjA0NDMzdjBjNC45OTUxNywwIDkuMDQ0MzMsNC4wNDkxNyA5LjA0NDMzLDkuMDQ0MzNjMCwwIDIuMDIxLC05LjA0NDMzIDE1Ljc1MjMzLC05LjA0NDMzYzguNzM2MTcsMCAxNS43MzgsNy4wMDE4MyAxNS43MzgsMjIuNzQ3djE4LjY2OTE3YzAsNC44MzAzMyAtMy45MjAxNyw4Ljc1MDUgLTguNzUwNSw4Ljc1MDV6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/>
								:
								<img src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png" alt="" />
                }
							  </a>
                </div>
                <div style={{width:"5.7vh" , height:"5.7vh"}}>
                <a href="https://www.instagram.com/gdsc.djsce/">
                {darkMode ? 
								<img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzk1YTVhNiI+PHBhdGggZD0iTTU3LjMzMzMzLDIxLjVjLTE5Ljc4NzE3LDAgLTM1LjgzMzMzLDE2LjA0NjE3IC0zNS44MzMzMywzNS44MzMzM3Y1Ny4zMzMzM2MwLDE5Ljc4NzE3IDE2LjA0NjE3LDM1LjgzMzMzIDM1LjgzMzMzLDM1LjgzMzMzaDU3LjMzMzMzYzE5Ljc4NzE3LDAgMzUuODMzMzMsLTE2LjA0NjE3IDM1LjgzMzMzLC0zNS44MzMzM3YtNTcuMzMzMzNjMCwtMTkuNzg3MTcgLTE2LjA0NjE3LC0zNS44MzMzMyAtMzUuODMzMzMsLTM1LjgzMzMzek0xMjksMzUuODMzMzNjMy45NTYsMCA3LjE2NjY3LDMuMjEwNjcgNy4xNjY2Nyw3LjE2NjY3YzAsMy45NTYgLTMuMjEwNjcsNy4xNjY2NyAtNy4xNjY2Nyw3LjE2NjY3Yy0zLjk1NiwwIC03LjE2NjY3LC0zLjIxMDY3IC03LjE2NjY3LC03LjE2NjY3YzAsLTMuOTU2IDMuMjEwNjcsLTcuMTY2NjcgNy4xNjY2NywtNy4xNjY2N3pNODYsNTAuMTY2NjdjMTkuNzg3MTcsMCAzNS44MzMzMywxNi4wNDYxNyAzNS44MzMzMywzNS44MzMzM2MwLDE5Ljc4NzE3IC0xNi4wNDYxNywzNS44MzMzMyAtMzUuODMzMzMsMzUuODMzMzNjLTE5Ljc4NzE3LDAgLTM1LjgzMzMzLC0xNi4wNDYxNyAtMzUuODMzMzMsLTM1LjgzMzMzYzAsLTE5Ljc4NzE3IDE2LjA0NjE3LC0zNS44MzMzMyAzNS44MzMzMywtMzUuODMzMzN6TTg2LDY0LjVjLTExLjg3NDEyLDAgLTIxLjUsOS42MjU4OCAtMjEuNSwyMS41YzAsMTEuODc0MTIgOS42MjU4OCwyMS41IDIxLjUsMjEuNWMxMS44NzQxMiwwIDIxLjUsLTkuNjI1ODggMjEuNSwtMjEuNWMwLC0xMS44NzQxMiAtOS42MjU4OCwtMjEuNSAtMjEuNSwtMjEuNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
                :
                <img src="https://img.icons8.com/material-rounded/48/000000/instagram-new.png" alt="" />
                }
							  </a>  
                </div>

              </div>
          </div>
          
      </div> 
    </AppBar>
    <div className={darkMode ? classes.darkfooterBottom : classes.footerBottom }>
    <div style={{marginLeft:"2vh" , marginTop:"2.7vh"}}>
    &copy; GDSC DJSCE 2021
    </div>
    <div>
      <img src={arrow} alt="arrow" style={{position:"absolute" ,width:"5vh", height:"7vh" ,marginLeft:"1vh", marginTop:"-3vh" }}/>
    </div>
    <div style={{fontSize:"1.2vh" , marginTop:"3vh"}}>
    Made By @GDSC DJSCE Frontend Team
    </div>
  </div>
  </div>
  );
}


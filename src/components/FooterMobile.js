import React, {useContext} from "react";
import { ThemeContext } from "../ThemeContext";
import {  AppBar, useMediaQuery, makeStyles,useTheme,Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import GDSCLogo from "../assets/images/GDSC___DJSCE.png" ;
import GDSCLogoDark from "../assets/images/GDSC_DJSCE_Dark.png" ;
const useStyles = makeStyles((theme)=>({
    roots:{
      "&.MuiAppBar-colorPrimary":{
        backgroundColor:"#F5F5F5",
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
      gridTemplateColumns:"100%",
      padding:"2vh",
      textAlign:'center',
      marginBottom:'10px'
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
      textAlign:"center" , 
      gridTemplateColumns:"100%",
      paddingTop:"1.5vh",
      paddingBottom:"0.1vh",
      fontSize:"2vh",
      boxShadow:"none",
    },
    darkfooterBottom:{
      height:"10vh" , 
      backgroundColor:"#2b2b2b" ,
      textAlign:"center" , 
      gridTemplateColumns:"100%",
      paddingTop:"1.5vh",
      paddingBottom:"0.1vh",
      fontSize:"2vh",
      boxShadow:"none",
    },
    icons:{
      display:"grid",
      justifyContent: "center",
      gridTemplateColumns:"10vh 10vh 10vh",
      paddingLeft:"2.6vh",
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
      <div class="start-logo" style={{textAlign:'center',marginLeft:"2vh" }}>
      { darkMode?
                <img src={GDSCLogoDark} style={{height:'40px',marginTop:'10px',align:'center',width:'250px',marginLeft:'auto',marginRight:'auto'}} alt="logo"/>
                :
                <img src={GDSCLogo} style={{height:'40px',marginTop:'10px',align:'center',width:'250px',marginLeft:'auto',marginRight:'auto'}} alt="logo"/>
                }
      </div>
      <div className={classes.footerdetails} >
          <div>
            <div className={classes.footerdetails2} >
              <div class="community">
                <Typography className={classes.community} style={{marginRight:"1.5vh"}}>Community</Typography>
                <div className={classes.list}>
                <Link to={''} className={classes.links}>
                  <Typography style={{marginBottom:"1.2vh"}}>About us</Typography>
                  </Link>
                  <Link to={'/team'} className={classes.links}>
                  <Typography style={{marginBottom:"1.2vh"}}>Team</Typography>
                  </Link>
                  <Link to={'/events'} className={classes.links}>
                  <Typography style={{marginBottom:"1.2vh"}}>Upcoming Events</Typography>
                  </Link>
                </div>
              </div>
              <hr style={darkMode ? {color: 'white'} : {color: 'black'}}/>
              {/* <div style={{borderLeftWidth:"0.2vh" , borderLeftColor:"#979797",textAlign:'center',marginLeft:'auto',marginRight:'auto'  }}></div> */}
              {/* <div class="in-touch">
                <Typography className={classes.community}>Keep in touch</Typography>
                  <div className={classes.list}>
                  <a href="mailto:gdsc.djsce@gmail.com" className={classes.links}>
              <Typography style={{marginBottom:"1.2vh"}}>gdsc.djsce@gmail.com</Typography>
            </a>
                    {/* <Typography style={{marginBottom:"1.2vh"}}>+91 134567890</Typography>
                  </div>
              </div> */}
            </div>
          </div>
          <div class="follow-us" style={{textAlign:"center"}}> 
              <Typography className={classes.community} style={{padding:"1vh" ,paddingLeft:"0"}}>Follow Us</Typography>
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
                <div style={{width:"5.7vh" , height:"5.7vh"}}>
                <a href="mailto:gdsc.djsce@gmail.com">
                {darkMode ? 
							<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAGHElEQVRoge2Ye0xTZxjGn9P2FFo4QA/2crxhmGNEFJaJc8siposzZjPLLhmZl8QZQ4IzKhTnbWrclKlYLApEXYbOqDEjQbM4sosmjGiWTTsviTC8ZF7QXqBXS3ugnNOzP0YZItRyAF22/v5q+33f+z7P+b6c730LxIgRI0aMYUD0/VJbWyu9fvfu1zyIORKZLJELdjlUSmV18cqVxmchrqyiYkuA4wpJUp7CdXMBaSh09rUZ0xfr9XouPKfXgNlsJr9vbPyD1jHP9Q0S4nl42tquvTBxwuz8/HzX0xB+8uTJ1KbbtxtTNNosiUTyyJjbbvtzXl5eZm5ubjcA9I7+9HPj4f7iAUAilYJmmKk3LJY7Ffv3vz/a4isqKz9outd6h9Yxj4kHAJVWl36m8dzhXn3hD5xE8lakwCq1hnL7fHtGVO0AuFnWSKvViZHmdBPo1SoBALPZrFRSVNKTghMEIQBA1f6Dpcfq6sYPV2yYY3V146v2HyztmyMSysTEJLPZrAR6DHAcR8lIkoi87B/aPJ7596zWmxXV1R+LFR3GVF39UavFeqPN45kf7RqZXE5wHEcBfY7QUElW0fFQJlRtN5afrq2tlQ51vSAIxNadO0+E4uIPJdG0QqwO0QYAgJTLCRXDzL9+//6DA4cOTYl23fG6uvRSk+n2mPETPoxXKKLe+YGQAABFUf7AQ2+H2CC0Vqd1+QOXyvbuXf2kuWV7966+a7E2q7S6NIIQpz3w0NuhUCg6gB4DWVlZHa9OmzbRY7dd4HleVNBkmo6TJyWbdphMZ5qamuT9xxsaGmTbyoynSCrJlEzTcWJyhEIhuG3W5qy0tOdzcnL8vQaamprkrXY786nBMJN1OQ/4O3whMQlIuZxI0mjn1P3w452amqM54d9rao7mnLt0+R49buw78rg4UY/d3+ELBZyOA5tKSrK8LEuHH5IEAHw+n8ru9V7ZZTJtXldUtFzB8/NdbW0eMYkAIFWnY9o7fRd37qnYYqysXGsPeC+k6nSM2Hgeh8MnDQbfXVdUtNxYWbnW7vFe8vl8KgCQhSeRcfEkERf/+XZj+Zx5b7wx1263T2z49beGJLV6ukwmGzz6IFApKSTX3f0ZAChIUpRwjuPwsL39d/0rM/VarTbIGssbSSopTwB674pH3kIykoSKYfJOnP7OcvHy5emb15TkBlzOUp/Xyz0e/snISBIykeL9Ph8fcDpMm9eU5DY3N2d+U1/fqmKYvP7xBnyNpmq1dDcpP1tqNBo3FBdvUsXJ9V6Hw4l+1etoIAgC4XG0u1Pk5LwNBoNhR3n5dhfH/6JSa9QDzR/0bCRQlJRTKEq2GcvzMtLTXwcwvuXWrfWjprwHnUp1OHPy5J0AZNuM5ReUY9QzIh3hiBeZTCYDzTAzzl+52nqtpWX28oKCrQAgkUieWK8MlXDM5QUFW6+1tMw+f+VqK80wEcUDUd7EtEaTwhKS+tLdu8sAQJdML3Ha7JZhq+7BabNbdMn0EgAo3b27jCUk9bRGkxLN2qhLiQSKknYD+QBQWLjs6qyXXkxz26yngl1doncjGAwK3jb7mTdnz5pUWLjsKgB0A/kJFBV1bSW6FtLr9dymkpL3CDZQ4HY42KGu97qcXZzXU7SxuHhuuLsSw7CKOQAoWrGiJoPRZTpttluCEN1mtFss9xmanvZJUdG+4eYftgEAyM/Pv7fZUJzhfvDgRCfLDuoi2NUlPLTbTk9Jmzhp6aJFN0ci99Cv2EHo6aQWGvftq/ey7JfJNK3sO+52OjvlPLdyg8Hw1UjlBEZoB/qyZtWq4+pUOt1tszYLggBBEOCyWe+OTUzIWFtcPKLigRHcgb4ULFxoFwRh6i6T6QsA2GQwbIym1xXDqBgAeo/UBgBYbzCMVpqRP0JPm5iBZ81/w4BCoRAQ5S36r0AQ/taMHgPZ2dkO1t8RfLaqoof1+4PZ2dkOoMcAQRAhnmUPRioDAAAhQfR/R9EihELuSONdnZ0C7w8cJAgiBPRrEY8cP/6yw+V6m+f5x8pZgiAEWqOpWrZgwYj1AQNxpLZ2XJvVukIQhMfaV6lUytMq1bdLFy++OJoaYsSIEeN/xF8+ZVqNHDTcpgAAAABJRU5ErkJggg=="/>
							:<img src="https://img.icons8.com/ios-filled/48/000000/gmail-new.png" alt="" />
							}
							  </a>  
                </div>

              </div>
          </div>
          
      </div> 
    <div className={darkMode ? classes.darkfooterBottom : classes.footerBottom }>
      <div style={{marginTop:"1.7vh"}}>
    &copy; GDSC DJSCE 2022
    </div>
    <div>
      {/* <img src={arrow} alt="arrow" style={{position:"absolute" ,width:"5vh", height:"7vh" ,marginLeft:"1vh", marginTop:"-3vh" }}/> */}
    </div>
    <div style={{fontSize:"1.2vh" , marginTop:"0.3vh"}}>
    Made with ❤ by GDSC DJSCE
    </div>
  </div>
    </AppBar>  
  </div>
  );
  
}


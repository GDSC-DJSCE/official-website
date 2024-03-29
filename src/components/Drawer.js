import React, { useState , useContext } from "react";

import { ThemeContext } from "../ThemeContext";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        justifyContent:"cenetr",
        alignContent:"center",
        alignItems:"center",
        textDecoration:"none",
        color: "black",
        paddingLeft:"15vh",
        paddingRight:"15vh",
        fontSize: "20px",
        fontWeight:"400",
        "&:hover": {
          color: "black",
        },
    },
    darklink:{
        justifyContent:"cenetr",
        alignContent:"center",
        alignItems:"center",
        textDecoration:"none",
        color: "white",
        paddingLeft:"15vh",
        paddingRight:"15vh",
        fontSize: "20px",
        fontWeight:"400",
        "&:hover": {
          color: "#F5F5F5",
        },
    },
    icon:{
        color: "black"
    },
    darkicon:{
        color: "white"
    },
    lightbg:{
      backgroundColor:"#F5F5F5" , 
      height:"100%"
    },
    darkbg:{
        backgroundColor:"#2B2B2B" , 
        height:"100%"
    }
}));

function DrawerComponent() {
  const {darkMode} = useContext(ThemeContext) ;
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List className={darkMode ? classes.darkbg : classes.lightbg}>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={darkMode?classes.darklink:classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/events" className={darkMode?classes.darklink:classes.link}>Events</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/team" className={darkMode?classes.darklink:classes.link}>Team</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={darkMode?classes.darklink:classes.link}>Contact</Link>
            </ListItemText>
          </ListItem>
          {/* <div style={{paddingLeft:"14vh",paddingRight:"14vh"}}>
          <Button style={{width:"120px" ,height:"35px" , fontSize:"18px",
            backgroundImage: `linear-gradient(to right,#2871FA, #0214FC)`, color:"white"}}
            >Login</Button>
          </div> */}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={darkMode?classes.darkicon:classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
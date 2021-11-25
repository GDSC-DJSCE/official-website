import React, { useState } from "react";
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
        color: "#979797",
        paddingLeft:"15vh",
        paddingRight:"15vh",
        fontSize: "20px",
        fontWeight:"600",
        "&:hover": {
          color: "black",
        },
    },
    icon:{
        color: "black"
    }
}));

function DrawerComponent() {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List style={{backgroundColor:"#E5E5E5"}}>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className={classes.link}>Home</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/events" className={classes.link}>Events</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/team" className={classes.link}>Team</Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contact" className={classes.link}>Contact</Link>
            </ListItemText>
          </ListItem>
          <div style={{paddingLeft:"14vh",paddingRight:"14vh"}}>
          <Button style={{width:"120px" ,height:"35px" , fontSize:"18px",
            backgroundColor:"#2871FA" , color:"white"}}
            >Login</Button>
          </div>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}className={classes.icon}>
        <MenuIcon />
      </IconButton>
    </>
  );
}
export default DrawerComponent;
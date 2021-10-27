import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Button color="inherit">
            <NavLink to="/">Home</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/events">Events</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/team">Team</NavLink>
          </Button>
          <Button color="inherit">
            <NavLink to="/contact">Contact</NavLink>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

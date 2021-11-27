import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "2px",
    width: "135px",
    height: "140px",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "4px 0px 20px rgba(0, 0, 0, 0.05),-4px 10px 20px rgba(0, 0, 0, 0.05)",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "#4385f3",
    },
  },
  image: {
    borderRadius: "50%",
    height: "55px",
    width: "55px",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "7px",
    border: "2px solid #4385f3",
  },
  content: {
    padding: "0",
  },
  p1: {
    fontFamily: "Montserrat, sans-serif",
    textAlign: "center",
    margin: "0",
    fontSize: "13px",
    lineHeight: "16px",
    fontWeight: "600",
  },
  p2: {
    fontFamily: "Montserrat, sans-serif",
    margin: "4px 0",
    textAlign: "center",
    fontSize: "10px",
    fontWeight: "400",
    lineHeight: "11px",
  },
  action: {
    color: "#2B2B2B",
    fontSize: "18px",
    margin: "0 25px",
    display: "flex",
    height: "max",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
}));

export const TCardMob = (props) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.container}>
        <CardMedia
          component="img"
          src="http://picsum.photos/100"
          alt="profile"
          height="70px"
          className={classes.image}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.p1}>Soham Dave</Typography>
          <p className={classes.p2}>GDSC DJSCE Lead</p>
        </CardContent>
        <div className={classes.action}>
          <Link to="/team/lead">
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link to="/team/lead">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="/team/lead">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </Card>
    </>
  );
};

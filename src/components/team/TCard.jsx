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
    width: "165px",
    height: "195px",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "4px 0px 20px rgba(0, 0, 0, 0.05),-4px 10px 20px rgba(0, 0, 0, 0.05)",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "#4385f3",
      color: "white",
      transform: "scale(1.1)",
    },
  },
  image: {
    borderRadius: "50%",
    height: "70px",
    width: "70px",
    margin: "auto",
    marginTop: "20px",
    marginBottom: "7px",
    border: "3px solid #4385f3",
  },
  content: {
    padding: "0",
  },
  p1: {
    fontFamily: "Montserrat, sans-serif",
    textAlign: "center",
    margin: "0",
    lineHeight: "22px",
    fontWeight: "600",
  },
  p2: {
    fontFamily: "Montserrat, sans-serif",
    marginBottom: "9px",
    textAlign: "center",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "17px",
  },
  action: {
    color: "white",
    fontSize: "17px",
    margin: "0 26px",
    display: "flex",
    height: "max",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
}));

export const TCard = (props) => {
  const classes = useStyles();

  return (
    <>
      <span className="tcard">
        <Card className={classes.container}>
          <CardMedia
            component="img"
            src="http://picsum.photos/100"
            alt="profile"
            height="70px"
            className={classes.image}
          />
          <CardContent className={classes.content}>
            <div className="card-content">
              <Typography className={classes.p1}>Soham Dave</Typography>
              <p className={classes.p2}>GDSC DJSCE Lead</p>
            </div>
          </CardContent>
          <div className={classes.action}>
            <Link to="/team/lead">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
            <Link to="/team/lead">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link to="/team/lead">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </Link>
          </div>
        </Card>
      </span>
    </>
  );
};

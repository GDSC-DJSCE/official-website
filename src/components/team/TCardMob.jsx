import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "2px",
    width: "135px",
    height: "145px",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "4px 0px 20px rgba(0, 0, 0, 0.05),-4px 10px 20px rgba(0, 0, 0, 0.05)",
    borderRadius: "1rem",
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
      <div className={classes.container}>
        <img
          src="http://picsum.photos/100"
          alt="profile"
          height="70px"
          className={classes.image}
        />
        <div className={classes.content}>
          <p className={classes.p1}>{props.name}</p>
          <p className={classes.p2}>{props.role}</p>
        </div>
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
      </div>
    </>
  );
};

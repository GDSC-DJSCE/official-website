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
    width: "165px",
    height: "195px",
    display: "flex",
    flexDirection: "column",
    color: "black",
    textDecoration: "none",
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
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                style={{ color: "white" }}
              />
            </Link>
            <Link to="/team/lead" style={{ color: "white" }}>
              <FontAwesomeIcon
                icon={faInstagram}
                size="lg"
                style={{ color: "white" }}
              />
            </Link>
            <Link to="/team/lead">
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                style={{ color: "white" }}
              />
            </Link>
          </div>
        </div>
      </span>
    </>
  );
};

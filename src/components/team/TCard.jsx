import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { ThemeContext } from "../../ThemeContext";

const useStyles = makeStyles((theme) => ({
  container: {
    border: "2px",
    width: "165px",
    height: "195px",
    display: "flex",
    flexDirection: "column",
    color: "black",
    textDecoration: "none",
    backgroundColor: "white",
    boxShadow:
      "4px 0px 20px rgba(0, 0, 0, 0.05),-4px 10px 20px rgba(0, 0, 0, 0.05)",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "#4385f3",
      color: "white",
      transform: "scale(1.05)",
    },
  },
  containerdark: {
    border: "2px",
    width: "165px",
    height: "195px",
    display: "flex",
    flexDirection: "column",
    color: "#ffffff",
    textDecoration: "none",
    backgroundColor: "#FFFFFF4D",
    boxShadow:
      "4px 0px 20px rgba(0, 0, 0, 0.05),-4px 10px 20px rgba(0, 0, 0, 0.05)",
    borderRadius: "1rem",
    "&:hover": {
      backgroundColor: "#4385f3",
      color: "white",
      transform: "scale(1.05)",
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
    objectFit: "cover",
  },
  content: {
    padding: "0",
  },
  p1: {
    fontFamily: "Montserrat, sans-serif",
    textAlign: "center",
    margin: "0",
    lineHeight: "22px",
    fontWeight: "500",
    fontSize: "17px",
  },
  p2: {
    fontFamily: "Montserrat, sans-serif",
    marginBottom: "9px",
    marginTop: "-3px",
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

export const TCard = ({ member }) => {
  const classes = useStyles();

  console.log(member);

  const { name, title, imageSrc } = member;

  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <span className="tcard">
        <div className={darkMode ? classes.containerdark : classes.container}>
          <img
            src={imageSrc}
            alt="profile"
            height="70px"
            className={classes.image}
          />
          <div className={classes.content}>
            <p className={classes.p1}>{name}</p>
            <p className={classes.p2}>{title}</p>
          </div>
          <div className={classes.action}>
            <Link to="/team/lead" className="icon-link">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="card-icon"
                size="lg"
              />
            </Link>
            <Link to="/team/lead" className="icon-link">
              <FontAwesomeIcon
                icon={faInstagram}
                className="card-icon"
                size="lg"
              />
            </Link>
            <Link to="/team/lead" className="icon-link">
              <FontAwesomeIcon
                icon={faGithub}
                className="card-icon"
                size="lg"
              />
            </Link>
          </div>
        </div>
      </span>
    </>
  );
};

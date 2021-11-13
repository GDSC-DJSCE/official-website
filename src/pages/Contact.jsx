import React, { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import yellowCircle from "../assets/images/yellowCircle.svg";
import greenCircle from "../assets/images/greenCircle.svg";
import blueCircle from "../assets/images/blueCircle.png";
import blueCircleHalf from "../assets/images/blueCircleHalf.jpg";
import redCircle from "../assets/images/redCircle.svg";
import redCircleHalf from "../assets/images/redCircle.jpg";
//import redRect from "../assets/images/redRect.svg";
import Contactpage from "../assets/images/Contactpage.gif"
import blueRect from "../assets/images/blueRect.svg";
import yellowRect from "../assets/images/yellowRect.svg";
import greenRect from "../assets/images/greenRect.svg";
import halfcircle from "../assets/images/halfcircle.svg";
import yellowCircleHalf from "../assets/images/yellowCircleHalf.jpg";
import SendIcon from "@mui/icons-material/Send";

import { TextField, makeStyles, Button } from "@material-ui/core";

var redRect = require('../assets/images/redRect.svg');
const useStyles = makeStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      width: "18rem",
      height: "150px",
    },
  },

  mainContainer: {
    display: "grid",
    justifyContent: "center",
    position: "relative",
    zIndex: 5,
  },
  formContainer: {
    position: "relative",
    width: "23rem",
    height: "auto",
    justifyContent: "center",
    padding: "10px",
  },
  inputbox: {
    marginBottom: "1rem",
    width: "18rem",
    borderColor: "blue",
  },
  signbtn: {
    width: "100%",
    height: "2.5rem",
    background: "#95a6fe",
    color: "black",
    fontSize: "1.1rem",
  },
  disablesignbtn: {
    background: "rgb(149, 166, 254, 0.5)",
    width: "100%",
    height: "2.5rem",
    color: "black",
    fontSize: "1.1rem",
  },
  blue2:{
    position: "absolute",
    top: "60%",
    left: "40%",
    width: "18px",
    height: "18px",
    opacity: "60%",
    overflow: "hidden",
  },
  red2:{
    position:"absolute",
    top:"38%",
    left:"9%",
    width:"18px",
    height:"18px",
    opacity:"60%",

  },
  green1:{
    position:"absolute",
    top:"83%",
    left:"75%",
    width:"20px",
    height:"20px",
    opacity:"60%",

  }
  
});

export const Contact = () => {
  let [errors, setErrors] = useState({
    fnerror: "",
    mesgerror: "",
    emailerror: "",
  });
  let [value, setValue] = useState({
    firstname: "",
    message: "",
    email: "",
  });

  const handleChanges = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  const blur = (e) => {
    let { name } = e.target;
    validateField(name);
  };

  const validateField = (name) => {
    let isValid = false;

    if (name === "firstname") isValid = validateFirstName();
    else if (name === "message") isValid = validateMessage();
    else if (name === "email") isValid = validateEmailAddress();
    return isValid;
  };
  const validateFirstName = () => {
    let fnerror = "";
    const valid = /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/;
    let fname = value.firstname;
    if (fname.trim() === "") fnerror = "First Name is required";
    else if (!valid.test(fname)) fnerror = "Name is not valid";
    setErrors({
      ...errors,
      fnerror: fnerror,
    });
  };
  const validateEmailAddress = () => {
    let emailerror = "";
    const valid =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let email = value.email;
    if (email.trim() === "") emailerror = "Email address is required";
    else if (!valid.test(email)) emailerror = "Email address is not valid";
    setErrors({
      ...errors,
      emailerror: emailerror,
    });
  };
  const validateMessage = () => {
    let mesgerror = "";
    const valid = /^([A-Za-z][A-Za-z'-])+([A-Za-z][A-Za-z'-]+)*/;
    let msgname = value.message;
    if (msgname.trim() === "") mesgerror = "Message is required";
    else if (!valid.test(msgname)) mesgerror = "Message is not valid";
    setErrors({
      ...errors,
      mesgerror: mesgerror,
    });
  };

  const classes = useStyles();

  return (
    <div>
      <div class="header font-black">Contact Us</div>
      <div className="sub-header">
        Any Questions or Remarks? Just write us a Question
      </div>
      <div className="images-phone w-0">
        <div className="yellow">
          <img src={yellowCircleHalf} alt="" />
        </div>
        <div className="green">
          <img src={halfcircle} alt="" />
        </div>
        <div className="blue">
          <img src={blueCircleHalf} alt="" />
        </div>
        <div className="red">
          <img src={redCircleHalf} alt="" />
        </div>
        <div className="yellow1">
          <img src={yellowCircle} alt="" />
        </div>
        <div className={classes.green1}>
          <img src={greenCircle} alt="" />
        </div>
        <div className="blue1">
          <img src={blueCircle} alt="" />
        </div>
        <div className="red1">
          <img src={redCircle} alt="" />
        </div>
        <div className={classes.blue2}>
          <img src={blueCircle} alt="" />
        </div>
        <div className={classes.red2}>
          <img src={redCircle} alt="" />
        </div>
        <div className="red3">
          <img src={redCircle} alt="" />
        </div>
        <div className="yellowR1">
          <img src={yellowRect} alt="" />
        </div>
        <div className="yellowR2">
          <img src={yellowRect} alt="" />
        </div>
        <div className="yellowR3">
          <img src={yellowRect} alt="" />
        </div>
        <div className="blueR">
          <img src={blueRect} alt="" />
        </div>
        <div className="greenR">
          <img src={greenRect} alt="" />
        </div>
      </div>

      <div className="images-desktop">
        <div class="greenR-d">
          <img src={greenRect} alt="" />
        </div>
        <div className="blueR-d">
          <img src={blueRect.default} alt="" />
        </div>
        <div style={{position:"absolute" , top:"155%",left:"20%",width:"25px",height:"25px",opacity:"80%",overflow:"hidden"}}>
          <img src={redRect.default} alt="" />
        </div>
        <div className="yellowR-d">
          <img src={yellowRect} alt="" />
        </div>
        <div className="blue1d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue2d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue3d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue4d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue5d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue6d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue7d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue8d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue9d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue10d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue11d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="blue12d">
          <img src={blueCircle} alt="" />
        </div>
        <div className="green1d">
          <img src={greenCircle} alt="" />
        </div>
        <div className="green2d">
          <img src={greenCircle} alt="" />
        </div>
        <div className="green3d">
          <img src={greenCircle} alt="" />
        </div>
        <div className="green4d">
          <img src={greenCircle} alt="" />
        </div>
        <div className="green5d">
          <img src={greenCircle} alt="" />
        </div>
        <div className="yellow1d">
          <img src={yellowCircle} alt="" />
        </div>
        <div className="yellow2d">
          <img src={yellowCircle} alt="" />
        </div>
        <div className="yellow3d">
          <img src={yellowCircle} alt="" />
        </div>
        <div className="yellow4d">
          <img src={yellowCircle} alt="" />
        </div>
        <div className="yellow5d">
          <img src={yellowCircle} alt="" />
        </div>
        <div className="yellow6d">
          <img src={yellowCircle} alt="" />
        </div>
        <div className="yellow7d">
          <img src={yellowCircle} alt="" />
        </div>
      </div>

      <div class="box shadow w-1190 h-820 bg-white  mb-1 ml-12  mr-12 mt-20">
        <div className="box-primary">
          <div class="inner-Box mb-4 mt-8 ml-20">
            <div className="head text-4xl mb-14 font-extrabold">
              Lets Talk 
            </div>

            <TextField
              className={classes.inputbox}
              autoFocus="1"
              label="Your Name"
              name="firstname"
              onChange={handleChanges}
              value={value.firstname}
              type="text"
              variant="outlined"
              onBlur={blur}
            />
            <div
              style={{
                marginTop: "-15px",
                paddingBottom: "15px",
                color: "red",
                fontSize: "0.9rem",
                marginBottom: "4rem",
              }}
            >
              {errors.fnerror}
            </div>

            <TextField
              className={classes.inputbox}
              label="Your Email"
              name="email"
              onChange={handleChanges}
              value={value.email}
              type="email"
              variant="outlined"
              onBlur={blur}
            />
            <div
              style={{
                marginTop: "-15px",
                paddingBottom: "15px",
                color: "red",
                fontSize: "0.9rem",
                marginBottom: "4rem",
              }}
            >
              {errors.emailerror}
            </div>

            <div className="message-box">
              <TextField
                className={classes.root}
                label="Your Message"
                name="message"
                onChange={handleChanges}
                value={value.message}
                type="text"
                variant="outlined"
                onBlur={blur}
              />
            </div>
            <div
              style={{
                marginTop: "-19px",
                paddingBottom: "15px",
                color: "red",
                fontSize: "0.9rem",
                marginBottom: "4rem",
              }}
            >
              {errors.mesgerror}
            </div>

            <Button
              className="submit"
              variant="contained"
              endIcon={<SendIcon />}
              style={{
                width: "13rem",
                height: "3rem",
                fontSize: "1.5rem",
                backgroundColor: "rgba(67, 133, 243, 1)",
                color: "white",
              }}
            >
              Submit
            </Button>
          </div>
        </div>
        <div className="box-secondary">
          <div className="box-image">
            <img
              style={{
                height: "700px",
                marginTop: "-120px",
                marginLeft: "-50px",
              }}
              src={Contactpage}
              alt=""
            />
          </div>
          <div className="box-detail h-56 mr-14 w-11/12 ">
            <div className="box-address">
              <div class="h-28 w-28 p-7 ml-5">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color="rgba(16, 157, 88, 1)"
                  size="2x"
                />
              </div>
              <div className="detail h-28 text-xl font-semibold  py-3">
                No. U-15, J.V.P.D. Scheme, Bhaktivedanta Swami Rd, Opp.Cooper
                Hospital, Vile Parle, Mumbai, Maharashtra 400056{" "}
              </div>
            </div>
            <div className="box-address">
              <div class="h-28 w-28 p-7 ml-5">
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  color="rgba(16, 157, 88, 1)"
                  size="2x"
                />
              </div>
              <div className="detail h-28 text-xl w-200 pl-3 p-6 font-semibold">
                +91 939282927
              </div>
            </div>
            <div class="box-map">
              <div>
                <iframe
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  title="DJ Sanghavi College"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Dwarkadas%20J.Sanghavi%20+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  width="100%"
                  height="600"
                  frameborder="0"
                >
                  <a href="https://www.mapsdirections.info/en/measure-map-radius/">
                    Map radius measure
                  </a>
                </iframe>
              </div>
            </div>
            <div class="box-social ml-28 ">
              <img
                src="https://img.icons8.com/material-rounded/48/000000/phone--v1.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/color/48/000000/gmail-new.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png"
                alt=""
              />
              <img
                src="https://img.icons8.com/material-rounded/48/000000/instagram-new.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

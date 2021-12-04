import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../../styles/team.css";
import tree from "../../assets/images/team/Tree2.svg";
import back from "../../assets/images/team/Union.svg";
import { Button, Typography } from "@mui/material";
import { TCard, TCardMob, THead } from "../../components";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const DomainHead2 = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 200,
      easing: "ease-in-sine",
      startEvent: "DOMContentLoaded",
    });
  }, []);
  return (
    <>
      <p className="header" style={{ color: darkMode ? "#8e918f" : null }}>
        Our Team
      </p>
      <div className="headSm-branch">
        <THead />
      </div>
      <Link to="/team">
        <div className="back-top">
          <img src={back} alt="back" style={{ width: "20px" }} />
          <Typography
            style={{
              fontFamily: " Montserrat",
              fontSize: "13px",
              lineHeight: "16px",
              padding: "0 10px",
              color: darkMode ? "#8e918f" : "black",
            }}
          >
            Back
          </Typography>
        </div>
      </Link>
      <div className="button">
        <Button
          style={{ borderRadius: "15px", width: "225px" }}
          variant="contained"
        >
          <p
            style={{
              fontSize: "24px",
              fontFamily: "Montserrat",
              textTransform: "none",
              fontWeight: "400",
              // height: "30px",
            }}
          >
            Domain Head
          </p>
        </Button>
      </div>

      <div style={{ marginTop: "18px" }} className="topcard-branch">
        <TCard name="Amay Gada" role="Technical Coordinator" />
      </div>
      <img className="img" src={tree} alt="branches" />
      <div className="cards">
        <div className="cards-end"></div>
        <div data-aos="zoom-in" className="cards-center">
          <TCard name="Dhruv Jain" role="Web & Blockchain" />
        </div>
        <div data-aos="zoom-in" className="cards-center">
          <TCard role="AR/VR & IOT" />
        </div>
        <div className="cards-end"></div>
      </div>

      <div className="bottom-div">
        <div data-aos="zoom-in" className="bottom-div-col">
          <TCard name="Dhruv Jain" role="Web & Blockchain" />
          <TCard name="Ayush Shah" role="AR/VR & IOT" />
        </div>
      </div>
      <Link to="/team">
        <div data-aos="zoom-in" className="back">
          <img src={back} alt="back" />
          <Typography
            style={{
              fontFamily: " Montserrat",
              fontSize: "24px",
              lineHeight: "29px",
              padding: "0 10px",
              color: darkMode ? "#8e918f" : "black",
            }}
          >
            Back
          </Typography>
        </div>
      </Link>
      <div className="bottom-div-mob">
        <div className="bottom-card">
          <Link to="/team">
            <TCardMob name="Amay Gada" role="Technical Coordinator" />
          </Link>
        </div>
        <div data-aos="zoom-in" className="bottom-div-col">
          <TCardMob name="Dhruv Jain" role="Web & Blockchain" />
          <TCardMob name="Ayush Shah" role="AR/VR & IOT" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};
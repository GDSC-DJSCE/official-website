import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../../styles/team.css";
import tree from "../../assets/images/team/Tree2.svg";
import back from "../../assets/images/team/Union.svg";
import backdark from "../../assets/images/team/Uniondark.svg";
import { Button, Typography } from "@mui/material";
import { TCard, TCardMob, THead } from "../../components";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import domainTeam2 from "./Domain2";

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
      <Link to="/team">
        <div className="back-top"  style={{paddingTop:"15px"}}>
          <img
            src={darkMode ? backdark : back}
            alt="back"
            style={{ width: "20px" }}
          />
          <Typography
            style={{
              fontFamily: " Montserrat",
              fontSize: "13px",
              lineHeight: "16px",
              padding: "0 10px",
              color: darkMode ? "white" : "black",
            }}
          >
            Back
          </Typography>
        </div>
      </Link>
      <p className="header" style={{ color: darkMode ? "white" : null }}>
        Our Team
      </p>
      <div className="headSm-branch" style={{height:"100%"}}>
        <THead />
      </div>
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
        {/* <TCard name="Amay Gada" role="Technical Coordinator" /> */}
        <TCard member={domainTeam2[0]} />
      </div>
      <img className="img" src={tree} alt="branches" />
      <div className="cards">
        <div className="cards-end"></div>
        <div data-aos="zoom-in" className="cards-center">
          {/* <TCard name="Dhruv Jain" role="Web & Blockchain" /> */}
          <TCard member={domainTeam2[1]} />
        </div>
        <div data-aos="zoom-in" className="cards-center">
          {/* <TCard name="Ayush Shah" role="AR/VR & IOT" /> */}
          <TCard member={domainTeam2[2]} />
        </div>
        <div className="cards-end"></div>
      </div>

      <div className="bottom-div">
        <div data-aos="zoom-in" className="bottom-div-col">
          {/* <TCard name="Dhruv Jain" role="Web & Blockchain" />
          <TCard name="Ayush Shah" role="AR/VR & IOT" /> */}
          <TCard member={domainTeam2[1]} /><TCard member={domainTeam2[2]} />
        </div>
      </div>
      <Link to="/team">
        <div data-aos="zoom-in" className="back">
          <img src={darkMode ? backdark : back} alt="back" />
          <Typography
            style={{
              fontFamily: " Montserrat",
              fontSize: "24px",
              lineHeight: "29px",
              padding: "0 10px",
              color: darkMode ? "white" : "black",
            }}
          >
            Back
          </Typography>
        </div>
      </Link>
      <div className="bottom-div-mob">
        <div className="bottom-card">
          <Link to="/team">
            {/* <TCardMob name="Amay Gada" role="Technical Coordinator" /> */}
            <TCardMob member={domainTeam2[0]} />
          </Link>
        </div>
        <div data-aos="zoom-in" className="bottom-div-col">
          {/* <TCardMob name="Dhruv Jain" role="Web & Blockchain" />
          <TCardMob name="Ayush Shah" role="AR/VR & IOT" /> */}
          <TCardMob member={domainTeam2[1]} /><TCardMob member={domainTeam2[2]} />
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

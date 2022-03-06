import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../ThemeContext";
import "../../styles/team.css";
import tree from "../../assets/images/team/Tree.svg";
import back from "../../assets/images/team/Union.svg";
import backdark from "../../assets/images/team/Uniondark.svg";
import { Button, Typography } from "@mui/material";
import { TCard, TCardMob, THead } from "../../components";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import contentTeam from "./Content";

export const ContentEditorial = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      offset: 0,
      duration: 200,
      easing: "ease-in-sine",
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return (
    <>
      <Link to="/team">
        <div className="back-top" style={{paddingTop:"15px"}}>
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
              // height: "70px",
            }}
          >
            Content & Editorial Team
          </p>
        </Button>
      </div>

      <div style={{ marginTop: "18px" }} className="topcard-branch">
        {/* <TCard name="Shivam Vora" role="Content & Editorial Coordinator" /> */}
        <TCard member={contentTeam[0]} />
      </div>
      <img className="img" src={tree} alt="branches" />
      <div data-aos="zoom-in" className="cards">
        <div className="cards-end">
          {/* <TCard name="Samyak Shah" role="Soft Creatives" /> */}
          <TCard member={contentTeam[1]} />
        </div>
        <div className="cards-center">
          {/* <TCard name="Vedant Gandhi" role="Soft Creatives" /> */}
          <TCard member={contentTeam[2]} />
        </div>
        <div className="cards-center">
          {/* <TCard name="Mihir Panchal" role="Video Editing" /> */}
          <TCard member={contentTeam[6]} />
        </div>
        <div className="cards-end">
          {/* <TCard name="Aarya Bagde" role="Editorial" /> */}
          <TCard member={contentTeam[8]} />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        style={{ transitionDelay: "0.2s" }}
        className="cards"
      >
        <div className="cards-end">
          {/* <TCard name="Nimish Sabnis" role="Soft Creatives" /> */}
          <TCard member={contentTeam[3]} />
        </div>
        <div className="cards-center">
          {/* <TCard name="Kashish Mistry" role="Soft Creatives" /> */}
          <TCard member={contentTeam[4]} />
        </div>
        <div className="cards-center">
          {/* <TCard name="Allan Almeida" role="Video Editing" /> */}
          <TCard member={contentTeam[7]} />
        </div>
        <div className="cards-end">
          {/* <TCard name="Naitik Vora" role="Editorial" /> */}
          <TCard member={contentTeam[9]} />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        style={{ transitionDelay: "0.4s" }}
        className="cards"
      >
        <div className="cards-end">
          {/* <TCard name="Vedit Beladia" role="Soft Creatives" /> */}
          <TCard member={contentTeam[5]} />
        </div>
        <div className="cards-center">
          <div style={{ width: "165px" }}></div>
        </div>
        <div className="cards-center">
          <div style={{ width: "165px" }}></div>
        </div>
        <div className="cards-end">
          {/* <TCard name="Prathamesh Nayak" role="Editorial" /> */}
          <TCard member={contentTeam[10]} />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        style={{ transitionDelay: "0.6s" }}
        className="cards"
      >
        <div className="cards-end">
          <Link to="/team">
            <div className="back">
              <img src={darkMode ? backdark : back} alt="back" />
              <Typography
                style={{
                  fontFamily: " Montserrat",
                  fontSize: "24px",
                  lineHeight: "29px",
                  padding: "0 10px",
                  width: "120px",
                  color: darkMode ? "white" : "black",
                }}
              >
                Back
              </Typography>
            </div>
          </Link>
        </div>
        <div className="cards-center">
          <div style={{ width: "165px" }}></div>
        </div>
        <div className="cards-center">
          <div style={{ width: "165px" }}></div>
        </div>
        <div className="cards-end">
          {/* <TCard name="Shweta Joshi" role="Editorial" /> */}
          <TCard member={contentTeam[11]} />
        </div>
      </div>

      <div className="bottom-div">
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.2s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Samyak Shah" role="Soft Creatives" />
          <TCard name="Vedant Gandhi" role="Soft Creatives" /> */}
          <TCard member={contentTeam[1]} /><TCard member={contentTeam[2]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.4s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Nimish Sabnis" role="Soft Creatives" />
          <TCard name="Kashish Mistry" role="Soft Creatives" /> */}
          <TCard member={contentTeam[3]} /><TCard member={contentTeam[4]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.6s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Vedit Beladia" role="Soft Creatives" />
          <TCard name="Mihir Panchal" role="Video Editing" /> */}
          <TCard member={contentTeam[5]} /><TCard member={contentTeam[6]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.8s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Allan Almeida" role="Video Editing" />
          <TCard name="Aarya Bagde" role="Editorial" /> */}
          <TCard member={contentTeam[7]} /><TCard member={contentTeam[8]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "1s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Naitik Vora" role="Editorial" />
          <TCard name="Prathamesh Nayak" role="Editorial" /> */}
          <TCard member={contentTeam[9]} /><TCard member={contentTeam[10]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "1s" }}
          className="bottom-div-col"
        >
          <Link to="/team">
            <div className="back">
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
          {/* <TCard name="Shweta Joshi" role="Editorial" /> */}
          <TCard member={contentTeam[11]} />
        </div>
      </div>
      <div className="bottom-div-mob">
        <div className="bottom-card">
          <Link to="/team">
            {/* <TCardMob name="Shivam Vora" role="Content & Editorial" /> */}
            <TCardMob member={contentTeam[0]} />
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.2s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Samyak Shah" role="Soft Creatives" />
          <TCardMob name="Vedant Gandhi" role="Soft Creatives" /> */}
          <TCardMob member={contentTeam[1]} /><TCardMob member={contentTeam[2]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.4s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Nimish Sabnis" role="Soft Creatives" />
          <TCardMob name="Kashish Mistry" role="Soft Creatives" /> */}
          <TCardMob member={contentTeam[3]} /><TCardMob member={contentTeam[4]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.6s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Vedit Beladia" role="Soft Creatives" />
          <TCardMob name="Mihir Panchal" role="Video Editing" /> */}
          <TCardMob member={contentTeam[5]} /><TCardMob member={contentTeam[6]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.8s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Allan Almeida" role="Video Editing" />
          <TCardMob name="Aarya Bagde" role="Editorial" /> */}
          <TCardMob member={contentTeam[7]} /><TCardMob member={contentTeam[8]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "1s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Naitik Vora" role="Editorial" />
          <TCardMob name="Prathamesh Nayak" role="Editorial" /> */}
          <TCardMob member={contentTeam[9]} /><TCardMob member={contentTeam[10]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{
            paddingTop: "8px",
            display: "flex",
            justifyContent: "center",
            transitionDelay: "1s",
          }}
        >
          {/* <TCardMob name="Shweta Joshi" role="Editorial" /> */}
          <TCardMob member={contentTeam[11]} />
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

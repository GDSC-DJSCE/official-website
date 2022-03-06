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
import eventTeam from "./Event";

export const OutreachEvents = () => {
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
              // height: "70px",
            }}
          >
            Outreach & Events
          </p>
        </Button>
      </div>

      <div style={{ marginTop: "18px" }} className="topcard-branch">
        {/* <TCard name="Heth Gala" role="Events & Outreach Coordinator" /> */}
        <TCard member={eventTeam[0]} />
      </div>
      <img className="img" src={tree} alt="branches" />
      <div data-aos="zoom-in" className="cards">
        <div className="cards-end">
          {/* <TCard name="Janvi Desai" role="Outreach & Events" /> */}
          <TCard member={eventTeam[1]} />
        </div>
        <div className="cards-center">
          {/* <TCard name="Mallika Konkar" role="Outreach & Events" /> */}
          <TCard member={eventTeam[2]} />
        </div>
        <div className="cards-center">
          {/* <TCard name="Jash R Shah" role="Outreach & Events" /> */}
          <TCard member={eventTeam[3]} />
        </div>
        <div className="cards-end">
          {/* <TCard name="Mihir Shah" role="Outreach & Events" /> */}
          <TCard member={eventTeam[4]} />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        style={{ transitionDelay: "0.2s" }}
        className="cards"
      >
        <div className="cards-end">
          {/* <TCard name="Yukta Kanani" role="Outreach & Events" /> */}
          <TCard member={eventTeam[5]} />
        </div>
        <div className="cards-center">
          {/* <TCard name="Vedant Gandhi" role="Outreach & Events" /> */}
          <TCard member={eventTeam[6]} />
        </div>
        <div className="cards-center">
          {/* <TCard name="Bhumika Sachdev" role="Outreach & Events" /> */}
          <TCard member={eventTeam[7]} />
        </div>
        <div className="cards-end">
          {/* <TCard name="Gautam Malpani" role="Outreach & Events" /> */}
          <TCard member={eventTeam[8]} />
        </div>
      </div>
      <div
        data-aos="zoom-in"
        style={{ transitionDelay: "0.4s" }}
        className="cards"
      >
        <div className="cards-end">
          {/* <TCard name="Aditya Kulkarni" role="Outreach & Events" /> */}
          <TCard member={eventTeam[9]} />
        </div>
        <div className="cards-center">
          <div style={{ width: "165px" }}></div>
        </div>
        <div className="cards-center">
          <div style={{ width: "165px" }}></div>
        </div>
        <div className="cards-end">
          {/* <TCard name="Allan Almeida" role="Outreach & Events" /> */}
          <TCard member={eventTeam[10]} />
        </div>
      </div>

      <div className="bottom-div">
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.2s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Janvi Desai" role="Outreach & Events" />
          <TCard name="Mallika Konkar" role="Outreach & Events" /> */}
          <TCard member={eventTeam[1]} /><TCard member={eventTeam[2]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.4s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Jash R Shah" role="Outreach & Events" />
          <TCard name="Mihir Shah" role="Outreach & Events" /> */}
          <TCard member={eventTeam[3]} /><TCard member={eventTeam[4]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.6s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Yukta Kanani" role="Outreach & Events" />
          <TCard name="Vedant Gandhi" role="Outreach & Events" /> */}
          <TCard member={eventTeam[5]} /><TCard member={eventTeam[6]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.8s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Bhumika Sachdev" role="Outreach & Events" />
          <TCard name="Gautam Malpani" role="Outreach & Events" /> */}
          <TCard member={eventTeam[7]} /><TCard member={eventTeam[8]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "1s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Aditya Kulkarni" role="Outreach & Events" />
          <TCard name="Allan Almeida" role="Outreach & Events" /> */}
          <TCard member={eventTeam[9]} /><TCard member={eventTeam[10]} />
        </div>
      </div>
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
      <div className="bottom-div-mob">
        <div className="bottom-card">
          <Link to="/team">
            {/* <TCardMob name="Heth Gala" role="Events & Outreach Coordinator" /> */}
            <TCardMob member={eventTeam[0]} />
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.2s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Janvi Desai" role="Outreach & Events" />
          <TCardMob name="Mallika Konkar" role="Outreach & Events" /> */}
          <TCardMob member={eventTeam[1]} /><TCardMob member={eventTeam[2]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.4s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Jash R Shah" role="Outreach & Events" />
          <TCardMob name="Mihir Shah" role="Outreach & Events" /> */}
          <TCardMob member={eventTeam[3]} /><TCardMob member={eventTeam[4]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.6s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Yukta Kanani" role="Outreach & Events" />
          <TCardMob name="Vedant Gandhi" role="Outreach & Events" /> */}
          <TCardMob member={eventTeam[5]} /><TCardMob member={eventTeam[6]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.8s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Bhumika Sachdev" role="Outreach & Events" />
          <TCardMob name="Gautam Malpani" role="Outreach & Events" /> */}
          <TCardMob member={eventTeam[7]} /><TCardMob member={eventTeam[8]} />
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "1s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Aditya Kulkarni" role="Outreach & Events" />
          <TCardMob name="Allan Almeida" role="Outreach & Events" /> */}
          <TCardMob member={eventTeam[9]} /><TCardMob member={eventTeam[10]} />
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

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
import projectTeam from "./Project";

export const ProjectTeam = () => {
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    AOS.init({
      offset: 50,
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
            color="white"
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
            Project Team
          </p>
        </Button>
      </div>

      <div style={{ marginTop: "18px" }} className="topcard-branch">
        {/* <TCard name="Ansh Mehta" role="Project Coordinator" /> */}
        <TCard member={projectTeam[0]}/>
      </div>
      <img className="img" src={tree} alt="branches" />
      <div data-aos="zoom-in" className="cards">
        <div className="cards-end">
          {/* <TCard name="Jinish Shah" role="Frontend Team" /> */}
          <TCard member={projectTeam[1]}/>
        </div>
        <div className="cards-center">
          {/* <TCard name="Chaitanya Kumbhar" role="Backend Team" /> */}
          <TCard member={projectTeam[4]}/>
        </div>
        <div className="cards-center">
          {/* <TCard name="Yash Jhaveri" role="Full Stack Developer" /> */}
          <TCard member={projectTeam[6]}/>
        </div>
        <div className="cards-end">
          {/* <TCard name="Ojas Karmaker" role="App Team" /> */}
          <TCard member={projectTeam[7]}/>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        style={{ transitionDelay: "0.2s" }}
        className="cards"
      >
        <div className="cards-end">
          {/* <TCard name="Prachi Patel" role="Frontend Team" /> */}
          <TCard member={projectTeam[2]}/>
        </div>
        <div className="cards-center">
          {/* <TCard name="Chirag Jain" role="Backend Team" /> */}
          <TCard member={projectTeam[5]}/>
        </div>
        <div className="cards-center">
          <div style={{ width: "165px" }}></div>
        </div>
        <div className="cards-end">
          {/* <TCard name="Tanmai Kamat" role="App Team" /> */}
          <TCard member={projectTeam[8]}/>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        style={{ transitionDelay: "0.4s" }}
        className="cards"
      >
        <div className="cards-end">
          {/* <TCard name="Meith Navlakha" role="Frontend Team" /> */}
          <TCard member={projectTeam[3]}/>
        </div>
        <div className="cards-center">
          <div style={{ width: "165px" }}></div>
        </div>
        <div className="cards-center">
          <div style={{ width: "165px" }}></div>
        </div>
        <div className="cards-end">
          <div style={{ width: "165px" }}></div>
        </div>
      </div>

      <div className="bottom-div">
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.2s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Jinish Shah" role="Frontend Team" />
          <TCard name="Prachi Patel" role="Frontend Team" /> */}
          <TCard member={projectTeam[1]}/><TCard member={projectTeam[2]}/>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.4s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Meith Navlakha" role="Frontend Team" />
          <TCard name="Chaitanya Kumbhar" role="Backend Team" /> */}
          <TCard member={projectTeam[3]}/><TCard member={projectTeam[4]}/>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.6s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Chirag Jain" role="Backend Team" />
          <TCard name="Yash Jhaveri" role="Full Stack Developer" /> */}
          <TCard member={projectTeam[5]}/><TCard member={projectTeam[6]}/>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.8s" }}
          className="bottom-div-col"
        >
          {/* <TCard name="Ojas Karmakar" role="App Team" />
          <TCard name="Tanmai Kamat" role="App Team" /> */}
          <TCard member={projectTeam[7]}/><TCard member={projectTeam[8]}/>
        </div>
      </div>
      <div className="bottom-div-mob">
        <div className="bottom-card">
          <Link to="/team">
            {/* <TCardMob name="Ansh Mehta" role="Project Coordinator" /> */}
            <TCardMob member={projectTeam[0]}/>
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.2s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Jinish Shah" role="Frontend Team" />
          <TCardMob name="Prachi Patel" role="Frontend Team" /> */}
          <TCardMob member={projectTeam[1]}/><TCardMob member={projectTeam[2]}/>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.4s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Meith Navlakha" role="Frontend Team" />
          <TCardMob name="Chaitanya Kumbhar" role="Backend Team" /> */}
          <TCardMob member={projectTeam[3]}/><TCardMob member={projectTeam[4]}/>
        </div>
      </div>
      <div className="bottom-div-mob">
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.6s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Chirag Jain" role="Backend Team" />
          <TCardMob name="Yash Jhaveri" role="Full Stack Developer" /> */}
          <TCardMob member={projectTeam[5]}/><TCardMob member={projectTeam[6]}/>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.8s" }}
          className="bottom-div-col"
        >
          {/* <TCardMob name="Ojas Karmakar" role="App Team" />
          <TCardMob name="Tanmai Kamat" role="App Team" /> */}
          <TCardMob member={projectTeam[7]}/><TCardMob member={projectTeam[8]}/>
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
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

import React from "react";
import "../../styles/team.css";
import tree from "../../assets/images/team/Tree.svg";
import back from "../../assets/images/team/Union.svg";
import { Button, Typography } from "@mui/material";
import { TCard, TCardMob, THead } from "../../components";
import { Link } from "react-router-dom";

export const ContentEditorial = () => (
  <>
    <p className="header">Our Team</p>
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
          }}
        >
          Content & Editorial Team
        </p>
      </Button>
    </div>

    <div style={{ marginTop: "18px" }} className="topcard-branch">
      <TCard />
    </div>
    <img className="img" src={tree} alt="branches" />
    <div className="cards">
      <div className="cards-end">
        <TCard />
      </div>
      <div className="cards-center">
        <TCard />
      </div>
      <div className="cards-center">
        <TCard />
      </div>
      <div className="cards-end">
        <TCard />
      </div>
    </div>
    <div className="cards">
      <div className="cards-end">
        <TCard />
      </div>
      <div className="cards-center">
        <TCard />
      </div>
      <div className="cards-center">
        <TCard />
      </div>
      <div className="cards-end">
        <TCard />
      </div>
    </div>
    <div className="cards">
      <div className="cards-end">
        <TCard />
      </div>
      <div className="cards-center">
        <div style={{ width: "165px" }}></div>
      </div>
      <div className="cards-center">
        <div style={{ width: "165px" }}></div>
      </div>
      <div className="cards-end">
        <TCard />
      </div>
    </div>
    <div className="cards">
      <div className="cards-end">
        <Link to="/team">
          <div className="back">
            <img src={back} alt="back" />
            <Typography
              style={{
                fontFamily: " Montserrat",
                fontSize: "24px",
                lineHeight: "29px",
                padding: "0 10px",
                width: "120px",
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
        <TCard />
      </div>
    </div>

    <div className="bottom-div">
      <div className="bottom-div-col">
        <TCard />
        <TCard />
      </div>
      <div className="bottom-div-col">
        <TCard />
        <TCard />
      </div>
      <div className="bottom-div-col">
        <TCard />
        <TCard />
      </div>
      <div className="bottom-div-col">
        <TCard />
        <TCard />
      </div>
      <div className="bottom-div-col">
        <TCard />
        <TCard />
      </div>
      <div className="bottom-div-col">
        <Link to="/team">
          <div className="back">
            <img src={back} alt="back" />
            <Typography
              style={{
                fontFamily: " Montserrat",
                fontSize: "24px",
                lineHeight: "29px",
                padding: "0 10px",
              }}
            >
              Back
            </Typography>
          </div>
        </Link>
        <TCard />
      </div>
    </div>
    <div className="bottom-div-mob">
      <div className="bottom-card">
        <Link to="/team">
          <TCardMob name="Soham Dave" role="GDSC DJSCE Lead" />
        </Link>
      </div>
      <div className="bottom-div-col">
        <TCardMob />
        <TCardMob />
      </div>
      <div className="bottom-div-col">
        <TCardMob />
        <TCardMob />
      </div>
      <div className="bottom-div-col">
        <TCardMob />
        <TCardMob />
      </div>
      <div className="bottom-div-col">
        <TCardMob />
        <TCardMob />
      </div>
      <div className="bottom-div-col">
        <TCardMob />
        <TCardMob />
      </div>
      <div className="bottom-div-col">
        <TCardMob />
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
);

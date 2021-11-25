import React from "react";
import "../../styles/team.css";
import tree from "../../assets/images/team/Tree.svg";
import back from "../../assets/images/team/Union.svg";
import { Button, Typography } from "@mui/material";
import { TCard } from "../../components";
import { Link } from "react-router-dom";

export const ContentEditorial = () => (
  <>
    <p className="header">Our Team</p>
    <div className="center">
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
    <div style={{ marginTop: "18px" }} className="center">
      <TCard />
    </div>
    <img className="img" src={tree} alt="branches" />
    <div className="cards">
      <div className="cards-end">
        <p>Soft Creatives</p>
        <TCard />
      </div>
      <div className="cards-center">
        <p>Soft Creatives</p>
        <TCard />
      </div>
      <div className="cards-center">
        <p>Video Editing</p>
        <TCard />
      </div>
      <div className="cards-end">
        <p>Editorial</p>
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
                width: "125px",
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
    </div>

    <br />
    <br />
    <br />
    <br />
    <br />
  </>
);

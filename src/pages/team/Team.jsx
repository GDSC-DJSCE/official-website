import React from "react";
import "../../styles/team.css";
import background from "../../assets/images/team/Team-bg.svg";
import vector1 from "../../assets/images/team/Vector4.svg";
import vector2 from "../../assets/images/team/Vector5.svg";
import vector3 from "../../assets/images/team/Vector1.svg";
import vector4 from "../../assets/images/team/Vector2.svg";
import { TCard, THead } from "../../components";
import { Link } from "react-router-dom";

export const Team = () => (
  <>
    <div>
      <img alt="background" className="topimg" src={background} />
      <div className="topcard">
        <TCard name="Soham Dave" role="GDSC DJSCE Lead" />
      </div>
      <div className="headSm">
        <THead />
      </div>
      <div className="container1">
        <div className="cont1card">
          <Link to="/team/domain-head">
            <TCard name="Amay Gada" role="Technical Coordinator" />
          </Link>
        </div>
        <div className="cont1head">
          <THead />
        </div>
        <div className="topcard-cont1">
          <TCard />
        </div>
        <div className="cont1card">
          <Link to="/team/domain-head">
            <TCard name="Rushank Shah" role="Technical Coordinator" />
          </Link>
        </div>
      </div>
      <div className="container2">
        <div className="vectorend">
          <img alt="vector" src={vector1} />
        </div>
        <div className="cardend">
          <Link to="/team/content-editoral">
            <TCard
              name="Shivam Vora"
              role="Content and Editorial Coordinator"
            />
          </Link>
        </div>
        <div className="vector2">
          <img alt="vector" src={vector2} />
        </div>
        <div className="cardcenter">
          <Link to="/team/project-team">
            <TCard name="Ansh Mehta" role="Project Coordinator" />
          </Link>
        </div>
        <div className="vector3">
          <img alt="vector" src={vector3} />
        </div>
        <div className="cardend">
          <Link to="/team/outreach-events">
            <TCard name="Heth Gala" role="Events and Outreach Coordinator" />
          </Link>
        </div>
        <div className="vectorend">
          <img alt="vector" src={vector4} />
        </div>
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
    <div className="bottom-card">
      <TCard />
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
);

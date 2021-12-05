import React, { useEffect, useContext } from "react";
import "../../styles/team.css";
import { ThemeContext } from "../../ThemeContext";
import background from "../../assets/images/team/Team-bg.svg";
import vector1 from "../../assets/images/team/Vector4.svg";
import vector2 from "../../assets/images/team/Vector5.svg";
import vector3 from "../../assets/images/team/Vector1.svg";
import vector4 from "../../assets/images/team/Vector2.svg";
import vector1dark from "../../assets/images/team/Vector4dark.svg";
import vector2dark from "../../assets/images/team/Vector5dark.svg";
import vector3dark from "../../assets/images/team/Vector1dark.svg";
import vector4dark from "../../assets/images/team/Vector2dark.svg";
import { TCard, THead, TCardMob } from "../../components";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

export const Team = () => {
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
      <div>
        <img alt="background" className="topimg" src={background} />
        <div className="topcard">
          <TCard name="Soham Dave" role="GDSC DJSCE Lead" />
        </div>
        <div className="headSm">
          <THead />
        </div>
        <div className="container1">
          <div
            data-aos="zoom-in"
            style={{ transitionDelay: "0.6s" }}
            className="cont1card"
          >
            <Link to="/team/domain-head2">
              <TCard name="Amay Gada" role="Technical Coordinator" />
            </Link>
          </div>
          <div className="cont1head">
            <THead />
          </div>
          <div className="topcard-cont1">
            <TCard name="Soham Dave" role="GDSC DJSCE Lead" />
          </div>
          <div
            data-aos="zoom-in"
            style={{ transitionDelay: "0.6s" }}
            className="cont1card"
          >
            <Link to="/team/domain-head">
              <TCard name="Rushank Shah" role="Technical Coordinator" />
            </Link>
          </div>
        </div>
        <div className="container2">
          <div
            data-aos="zoom-in"
            style={{ transitionDelay: "0.5s" }}
            className="vectorend"
          >
            <img alt="vector" src={darkMode ? vector1dark : vector1} />
          </div>
          <div
            data-aos="zoom-in"
            style={{ transitionDelay: "0.3s" }}
            className="cardend"
          >
            <Link to="/team/content-editoral">
              <TCard
                name="Shivam Vora"
                role="Content and Editorial Coordinator"
              />
            </Link>
          </div>
          <div
            data-aos="zoom-in"
            style={{ transitionDelay: "0.1s" }}
            className="vector2"
          >
            <img alt="vector" src={darkMode ? vector2dark : vector2} />
          </div>
          <div data-aos="zoom-in" className="cardcenter">
            <Link to="/team/project-team">
              <TCard name="Ansh Mehta" role="Project Coordinator" />
            </Link>
          </div>
          <div
            data-aos="zoom-in"
            style={{ transitionDelay: "0.1s" }}
            className="vector3"
          >
            <img alt="vector" src={darkMode ? vector3dark : vector3} />
          </div>
          <div
            data-aos="zoom-in"
            style={{ transitionDelay: "0.3s" }}
            className="cardend"
          >
            <Link to="/team/outreach-events">
              <TCard name="Heth Gala" role="Events and Outreach Coordinator" />
            </Link>
          </div>
          <div
            data-aos="zoom-in"
            style={{ transitionDelay: "0.5s" }}
            className="vectorend"
          >
            <img alt="vector" src={darkMode ? vector4dark : vector4} />
          </div>
        </div>
      </div>
      <div className="bottom-div">
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.5s" }}
          className="bottom-div-col"
        >
          <Link to="/team/domain-head">
            <TCard name="Amay Gada" role="Technical Coordinator" />
          </Link>
          <Link to="/team/domain-head">
            <TCard name="Rushank Shah" role="Technical Coordinator" />
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.5s" }}
          className="bottom-div-col"
        >
          <Link to="/team/content-editoral">
            <TCard
              name="Shivam Vora"
              role="Content and Editorial Coordinator"
            />
          </Link>
          <Link to="/team/outreach-events">
            <TCard name="Heth Gala" role="Events and Outreach Coordinator" />
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.5s", marginTop: "20px" }}
          className="bottom-card"
        >
          <Link to="/team/project-team">
            <TCard name="Ansh Mehta" role="Project Coordinator" />
          </Link>
        </div>
      </div>

      {/* for mobile view */}
      <div className="bottom-div-mob">
        <div className="bottom-card">
          <Link to="/team">
            <TCardMob name="Soham Dave" role="GDSC DJSCE Lead" />
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.5s" }}
          className="bottom-div-col"
        >
          <Link to="/team/domain-head">
            <TCardMob name="Amay Gada" role="Technical Coordinator" />
          </Link>
          <Link to="/team/domain-head">
            <TCardMob name="Rushank Shah" role="Technical Coordinator" />
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.5s" }}
          className="bottom-div-col"
        >
          <Link to="/team/content-editoral">
            <TCardMob
              name="Shivam Vora"
              role="Content and Editorial Coordinator"
            />
          </Link>
          <Link to="/team/outreach-events">
            <TCardMob name="Heth Gala" role="Events and Outreach Coordinator" />
          </Link>
        </div>
        <div
          data-aos="zoom-in"
          style={{ transitionDelay: "0.5s", marginTop: "5px" }}
          className="bottom-card"
        >
          <Link to="/team/project-team">
            <TCardMob name="Ansh Mehta" role="Project Coordinator" />
          </Link>
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

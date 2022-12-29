import React from "react";
import Fade from "react-reveal/Fade";
import "./Card.css";
const Card = ({ member }) => {
  const { name, title, imageSrc, socials } = member;
  return (
    <div className="card-wrap" style={{ justifyContent: "center" }}>
      <div
        className="image-wrap"
        style={{ textAlign: "center", justifyContent: "center" }}
      >
        <Fade up>
          <img
            alt={name}
            src={imageSrc}
            style={{
              height: "300px",
              maxHeight: "400px",
              objectFit: "cover",
              width: "80%",
              margin: "0 auto",
              borderRadius: "5%",
            }}
          />
        </Fade>
      </div>
      <div
        className="content-wrap"
        style={{ margin: "40px auto", justifyContent: "center", width: "80%" }}
      >
        {/* <h5 className="mbr-section-title card-title mbr-fonts-style align-left m-0 display-5 content"> */}
        <h5 style={{ fontSize: "30px" }}>{name}</h5>
        {title && (
          // <h6 className="mbr-role mbr-fonts-style align-left mb-2 display-4 content">
          <h6>{title.toUpperCase()}</h6>
        )}
        <div className="social-row align-left display-7 content">
          {Object.keys(socials).map((socialMedia) => {
            const socialUrl =
              socialMedia === "linkedin"
                ? `https://www.${socialMedia}.com/in/${socials[socialMedia]}`
                : `https://www.${socialMedia}.com/${socials[socialMedia]}`;
            return (
              <div className="soc-item" key={socialMedia}>
                <a href={socialUrl} rel="noreferrer" target="_blank">
                  <span
                    className={`mbr-iconfont socicon socicon-${socialMedia}`}
                  ></span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

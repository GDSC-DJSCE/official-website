import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export const TCard = () => {
  return (
    <>
      <div
        id="team-card"
        className="border-2 px-5 tcard-shadow hover:border-green-600 py-7  rounded-3xl"
      >
        <div className="mb-5">
          <img
            className="rounded-full mx-auto border-blue-600 border-4"
            src="http://lorempixel.com/150/150/people/"
            alt="profile"
            width="150px"
          />
        </div>
        <div className="mx-auto text-center w-max">
          <p className="font-medium text-2xl ">Soham Dave</p>
          <p className="text-xl">GDSC DJSCE LEAD</p>
        </div>
        <div
          id="team-icons"
          className="text-center flex justify-between px-5 text-white p-3 pb-0"
        >
          <Link to="/team/lead">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>
          <Link to="/team/lead">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </Link>
          <Link to="/team/lead">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>
        </div>
      </div>
    </>
  );
};

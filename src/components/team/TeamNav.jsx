import React from "react";
import { NavLink } from "react-router-dom";

export const TeamNav = () => {
  return (
    <>
      <div className="tnav-shadow rounded-full mx-10 mb-4">
        <ul className="flex flex-row justify-between text-2xl">
          <NavLink
            activeClassName="text-white font-semibold rounded-full  bg-bluegreen-gradient"
            to="/team/domain-head"
          >
            <li className="py-3.5  px-14 "> Domain Head </li>
          </NavLink>
          <NavLink
            activeClassName="text-white font-semibold rounded-full  bg-bluegreen-gradient"
            to="/team/content-editoral"
          >
            <li className="py-3.5 px-14">Content Editorial</li>
          </NavLink>
          <NavLink
            activeClassName=" rounded-full font-semibold text-white bg-bluegreen-gradient"
            to="/team/lead"
          >
            <li className="py-3.5 px-14">Lead</li>
          </NavLink>
          <NavLink
            activeClassName="text-white font-semibold rounded-full bg-bluegreen-gradient"
            to="/team/project-team"
          >
            <li className="py-3.5 px-14">Project Team</li>
          </NavLink>
          <NavLink
            activeClassName="text-white font-semibold rounded-full  bg-bluegreen-gradient"
            to="/team/outreach-events"
          >
            <li className="py-3.5 px-14">Outreach Events</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

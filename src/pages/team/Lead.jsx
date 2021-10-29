import React from "react";
import "../../styles/team.css";
import { TeamNav, THead, TCard } from "../../components";

export const Lead = () => {
  return (
    <>
      <THead />
      <TeamNav />
      <div className="h-24 w-min mx-auto border-2-blue"></div>
      <div className="flex justify-center">
        <TCard />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

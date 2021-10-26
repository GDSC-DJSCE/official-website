import React from "react";
import { TeamNav, THead, TCard } from "../../components";

export const DomainHead = () => {
  return (
    <div>
      <THead />
      <TeamNav />
      <div className="h-16 w-min mx-auto border-2-green"></div>
      <div className="w-8/12 mx-auto">
        <div className="w-full  h-min mx-auto border-2-green"></div>
        <div className="flex flex-row">
          <div className="flex w-full justify-between flex-row">
            <div>
              <div className="h-9 w-min border-2-green"></div>
              <div className="h-min w-min border-6-green -mx-1 -mt-2 mb-4"></div>
            </div>
            <div className="mr-10">
              <div className="h-9 w-min border-2-green"></div>
              <div className="h-min w-min border-6-green -mx-1 -mt-2 mb-4"></div>
            </div>
            <div className="ml-10">
              <div className="h-9 w-min border-2-green"></div>
              <div className="h-min w-min border-6-green -mx-1 -mt-2 mb-4"></div>
            </div>
            <div>
              <div className="h-9 w-min border-2-green"></div>
              <div className="h-min w-min border-6-green -mx-1 -mt-2 mb-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between flex-row">
          <TCard />
          <TCard />
          <div className="w-min"></div>
          <TCard />
          <TCard />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

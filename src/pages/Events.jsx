import React from "react";
import EventsList from "../components/Events/EventList";
import Featured from "../components/Events/Featured";
import CarouselComponent from '../components/Events/CarouselComponent';

export const Events = () => {
  return (
      <div>
        {/* <CarouselComponent /> */}
        <Featured />
        <EventsList />
      </div>
  );
};

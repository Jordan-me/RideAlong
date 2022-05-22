import React from "react";
import "../cssFiles/Events.css";
import { EventCarousel } from "./EventCarousel";

function TopEventTab() {
  
  return (
    <>
    {/* TODO: pass here list of events as parameter */}
    {/* Get all events that near the user and not created by him*/}
      <EventCarousel />
    </>
  );
}
export { TopEventTab };

import React from "react";
import "../cssFiles/Events.css";
import { EventCarousel } from "./EventCarousel";

function TopEventTab() {
  
  return (
    <>
    {/* Get all events that near the user and not created by him*/}
      <EventCarousel />
    </>
  );
}
export { TopEventTab };

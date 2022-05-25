import React from "react";
import { DiscoverEvents } from "../components/DiscoverEvents";
import "../cssFiles/Events.css";

const Events = (props) => {
  return (
    <>
    <div className="h-100 gradient-custom-2" style={{height:"100vh"}}>
    <div className="container py-5 h-100" style={{height:"100vh"}}>
    <div className="row d-flex justify-content-center align-items-center h-100" style={{height:"100vh"}}>
      <DiscoverEvents />
      </div>
      </div>

    </div>
    </>

  );
};
export { Events };

import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../App";
import "../cssFiles/Events.css";
import { postFetchSuggestedEventsActivity } from "../data/data";
import { EventCarousel } from "./EventCarousel";

function MyEventsTab() {
    const [loggedInState, setLoggedInState] = useContext(LoginContext);
    const [user, setUser] = useState(null);
    const [extra, setExtra] = useState(null);
    const [listEvents, setListEvents] = useState(null); 
    useEffect(() => {
      console.log(loggedInState);
    }, []);
  
    useEffect(() => {
      console.log(loggedInState);
      if (loggedInState !== null) {
        setUser(loggedInState.user);
        setExtra(loggedInState.extra[0]);

      }
    }, [loggedInState]);
    useEffect(() => {
      console.log(user, extra);
      if (user !== null && extra !== null) {
        setUser(user);
        setExtra(extra);
        // setListEvents(extra["INSTANCE_ATTRIBUTES"]["attendedEvents"]);
      }
    }, [user, extra]);
    

  return (
    <>
    {/* TODO: pass here list of events as parameter */}
    {/* Get all events that near the user and not created by him*/}
      <EventCarousel props={listEvents} />
    </>
  );
}
export { MyEventsTab };

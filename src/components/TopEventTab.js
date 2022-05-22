import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../App";
import "../cssFiles/Events.css";
import {postFetchSuggestedEventsActivity } from "../data/data";
import { EventCarousel } from "./EventCarousel";

const getEventsList = async (user) => {
  let topEvents = postFetchSuggestedEventsActivity(user);
  console.log("topEvents: " + JSON.stringify(topEvents));

};
function TopEventTab() {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);

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
  }, [user, extra]);
  if(user!==null){
    console.log(user);
    let eventsList = getEventsList({user})

  }


  return (
    <>
    {/* TODO: pass here list of events as parameter */}
    {/* Get all events that near the user and not created by him*/}
      <EventCarousel />
    </>
  );
}
export { TopEventTab };

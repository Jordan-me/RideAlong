import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../App";
import "../cssFiles/Events.css";
import {postFetchSuggestedEventsActivity, putUser } from "../data/data";
import { EventCarousel } from "./EventCarousel";

const getEventsList = async (user) => {
  // await putUser(user.user, "Player");
  let topEvents = await postFetchSuggestedEventsActivity(user);
  console.log("topEvents: \n" + JSON.stringify(topEvents)+"\n");
  console.log("first instance : \n" + JSON.stringify(topEvents[0]));
  return topEvents;
};
function TopEventTab() {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);
  const [topEvents, setTopEvents] = useState([]);

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
    if(user!==null){
    console.log(user);
    setTopEvents(()=>getEventsList({user}));
    }
    
  }, [user, extra]);
  // if(user!==null){
  //   console.log(user);
  //   let eventsList = 

  // }


  return (
    <>
    {/* TODO: pass here list of events as parameter */}
    {/* Get all events that near the user and not created by him*/}
      <EventCarousel props={topEvents} />
    </>
  );
}
export { TopEventTab };

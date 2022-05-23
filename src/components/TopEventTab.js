import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../App";
import "../cssFiles/Events.css";
import { postFetchSuggestedEventsActivity, putUser } from "../data/data";
import { EventCarousel } from "./EventCarousel";

function TopEventTab() {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);
  const [topEvents, setTopEvents] = useState([]);
  // const [spinnerStatus, setSpinnerStatus] = useState(false);
  const getEventsList = async (user) => {
    // await putUser(user.user, "Player");
    let topEventsData = await postFetchSuggestedEventsActivity(user);
    console.log("topEvents: \n" + JSON.stringify(topEvents) + "\n");
    console.log("first instance : \n" + JSON.stringify(topEvents[0]));
    setTopEvents(topEventsData);
    // return topEvents;
  };

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
    if (user !== null) {
      // console.log(user);
      getEventsList({ user });
    }
  }, [user, extra]);
  useEffect(() => {
    console.log(topEvents);
  }, [topEvents]);
  // if(user!==null){
  //   console.log(user);
  //   let eventsList =

  // }

  return (
    <>
      {/* TODO: pass here list of events as parameter */}
      {/* Get all events that near the user and not created by him*/}
      {topEvents.length > 0 ? (
        <>
          {/* <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> */}
          <EventCarousel topEvents={topEvents} />
        </>
      ) : null}
    </>
  );
}
export { TopEventTab };

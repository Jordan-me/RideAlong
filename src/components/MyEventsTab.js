import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../App";
import "../cssFiles/Events.css";
// import { postFetchSuggestedEventsActivity } from "../data/data";
import { EventCarousel } from "./EventCarousel";
import { fetchUsersEvents } from "../data/data";

function MyEventsTab() {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);
  const [myEvents, setMyEvents] = useState([]);

  const getEventsList = async (user) => {
    // await putUser(user.user, "Player");
    let myEventsData = await fetchUsersEvents(user);
    console.log(myEventsData);
    setMyEvents(myEventsData);
    // return topEvents;
  };

  useEffect(() => {
    if (loggedInState !== null) {
      setUser(loggedInState.user);
      setExtra(loggedInState.extra[0]);
    }
  }, [loggedInState]);
  useEffect(() => {
    if (user !== null) {
      getEventsList({ user });
    }
  }, [user, extra]);
  useEffect(() => {
    console.log(myEvents);
  }, [myEvents]);
  // useEffect(() => {
  //   console.log(myEvents);
  // }, [myEvents]);

  return (
    <>
      {myEvents.length > 0 ? (
        <>
          {/* <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> */}
          <EventCarousel topEvents={myEvents} />
        </>
      ) : null}
    </>
  );
}
export { MyEventsTab };

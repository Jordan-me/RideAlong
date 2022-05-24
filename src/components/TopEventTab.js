import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../App";
import "../cssFiles/Events.css";
import { postFetchSuggestedEventsActivity, putUser } from "../data/data";
import { EventCarousel } from "./EventCarousel";
import Spinner from "react-bootstrap/Spinner";

function TopEventTab() {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);
  const [topEvents, setTopEvents] = useState([]);
  // const [spinnerStatus, setSpinnerStatus] = useState(false);
  const getEventsList = async (user) => {
    let topEventsData = await postFetchSuggestedEventsActivity(user);
    setTopEvents(topEventsData);
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
  useEffect(() => {}, [topEvents]);

  return (
    <>
      {/* TODO: pass here list of events as parameter */}
      {/* Get all events that near the user and not created by him*/}
      {topEvents.length > 0 ? (
        <>
          {/* <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> */}
          {topEvents ? <EventCarousel topEvents={topEvents} /> : null}
        </>
      ) : (
        <Spinner
          style={{ width: "100px", height: "100px" }}
          animation="border"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </>
  );
}
export { TopEventTab };

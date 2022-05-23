import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../App";
import "../cssFiles/Events.css";
import { postFetchSuggestedEventsActivity } from "../data/data";
import { EventCarousel } from "./EventCarousel";
import { fetchInstanceByType } from "../data/data";

function MyEventsTab() {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);
  const [listEvents, setListEvents] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await fetchInstanceByType(
        loggedInState.user.userId.email,
        "userEvent"
      );
    }
    getData();
  }, []);

  useEffect(() => {
    if (loggedInState !== null) {
      setUser(loggedInState.user);
      setExtra(loggedInState.extra[0]);
    }
  }, [loggedInState]);
  useEffect(() => {
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

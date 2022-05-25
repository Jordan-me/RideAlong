import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "../App";
import "../cssFiles/Events.css";
import Spinner from "react-bootstrap/Spinner";
// import { postFetchSuggestedEventsActivity } from "../data/data";
import { EventCarousel } from "./EventCarousel";
import { fetchUsersEvents } from "../data/data";
import { PartnerCarousel } from "./PartnerCarousel";
import { Row } from "react-bootstrap";

function MyPartnersTab() {
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

  return (
    <>
      {myEvents.length > 0 ? (
        <>
          {myEvents
            ? myEvents.map((instance) => {
                return (
                  <Row key={instance.instanceId.id}>
                    <PartnerCarousel
                      partnersForEvent={
                        instance.instanceAttributes.assignedUsers
                      }
                      event={instance}
                    />
                  </Row>
                );
              })
            : null}
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
export { MyPartnersTab };

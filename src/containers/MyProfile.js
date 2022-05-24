import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import profile_image from "../assets/images/no-profile-pic.jpg";
import { LoginContext } from "../App";
import "../cssFiles/MyProfile.css";
import EventCard from "../components/EventCard";
import { fetchUsersEvents } from "../data/data";
import { EventCarousel } from "../components/EventCarousel";

function eventsCards({ list }) {
  if (list && list.length>0) {
    console.log(list);
    list.map((instance) => {
      return (
        <Col sm={6} md={4} className="mt-3">
          <div
            // style={{ width: "6500px" }}
            key={instance.instanceId.id}
          >
            <EventCard eventInstance={instance} />
          </div>

        </Col>
      );
    });
  }
}
const MyProfile = (props) => {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const location = useLocation();
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
    <div className="h-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7" style={{width: "100%"}}>
        <div className="card" style={{backgroundColor: "#fff"}}>
          <div className="rounded-top text-white d-flex flex-row header-img" style={{height:"200px"}}>
            <div className="ms-4 mt-5 d-flex flex-column" style={{width: "150px", paddingTop: "50px"}}>
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2"
                style={{width: "150px", zIndex: "1"}}/>
                           {loggedInState ? (
             loggedInState.extra[0] ? (
               <span
              className="badge text-secondary bg-secondary-light"
                  style={{ color: "#e83e8c", backgroundColor: "#fce2ee" }}
               >
                 Joined in{" "}
                   {loggedInState.extra[0].createdTimestamp.split("-")[0]}
                </span>
             ) : null
            ) : null}
            </div>
            <div className="ms-3" style={{marginTop: "130px"}}>
              <h5>
                  {loggedInState ? (
            loggedInState.user ? (
               <strong>
              {loggedInState.user.username.replace("_", " ")}
            </strong>
             ) : null
      ) : null}

              </h5>
                 {loggedInState ? (
              loggedInState.extra[0] ? (
                 <p>
                 {loggedInState.extra[0].instanceAttributes["dob"].split("-")
                  .length === 3
                  ? Math.abs(
                   new Date().getFullYear() -
                     loggedInState.extra[0].instanceAttributes[
                         "dob"
                        ].split("-")[0]
                  )
                     : null}
              </p>
              ) : null
             ) : null}
            </div>
          </div>

          <div className="p-4 text-black" style={{backgroundColor: "#f8f9fa"}}>
            <div className="d-flex justify-content-end text-center py-1">

              <div>
                <p className="mb-1 h5">
                            {loggedInState
                   ? loggedInState.extra
                   ? "" +
                    loggedInState.extra[0].instanceAttributes[
                     "counterEvents"
                     ] +
                       " "
                    : null
                 : null}
                </p>
                <p className="small text-muted mb-0">Events</p>
              </div>
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent Events</p>
            </div>
            <div className="row g-2">
            {myEvents.length > 0 ? (
            <>
 
          {myEvents ? 
          <EventCarousel topEvents={myEvents} /> 
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

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>








  );
};

export { MyProfile };

 
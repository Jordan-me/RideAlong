import React, { useState, useEffect, useContext, createContext } from "react";
import { Badge, Button, Card, Carousel, Col, Row } from "react-bootstrap";
import "../cssFiles/Events.css";
import RoadTrip from "../assets/images/RoadTripGenre.jpg";
import Sports from "../assets/images/SportsGenre.jpg";
import Flight from "../assets/images/flightGenre.jpg";
import Concert from "../assets/images/ConcertGenre.jpg";
import Arts from "../assets/images/ArtsGenre.jpg";
import DefaultGenre from "../assets/images/defaultGenre.jpg";
import { LoginContext } from "../App";
import { getInstanceById, putEventUserInstance } from "../data/data";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

export const CurrentEventContext = createContext();

//create your forceUpdate hook
function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue((value) => value + 1); // update the state to force render
}
const EventCard = (props) => {
  const forceUpdate = useForceUpdate();
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [event, setEvent] = useState([]);
  const [img, setImage] = useState(null);
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);
  const [interestedStatus, setInterestedStatus] = useState(false);
  const [spinnerStatus, setSpinnerStatus] = useState(false);

  let bool = false;
  // useEffect(() => {
  //   console.log(extra[0].instanceId.id);
  // }, []);
  useEffect(() => {
    if (loggedInState !== null) {
      setUser(loggedInState.user);
      setExtra(loggedInState.extra);
      // console.log(extra);
    }
  }, [loggedInState]);
  useEffect(() => {
    console.log(props);
    if (props) if (props.eventInstance) setEvent(props.eventInstance);

    // props ? (props.eventInstance ? setEvent(props.eventInstance) : null) : null;
  }, []);
  useEffect(() => {
    let attendedCounter = event
      ? event.instanceAttributes
        ? event.instanceAttributes.attendedCounter
          ? event.instanceAttributes.attendedCounter
          : null
        : null
      : null;
    let assignedUsers = event
      ? event.instanceAttributes
        ? event.instanceAttributes.assignedUsers
          ? event.instanceAttributes.assignedUsers
          : null
        : null
      : null;
    //user Id that clicked
    let userId = extra
      ? extra[0]
        ? extra[0].instanceId
          ? extra[0].instanceId.id
            ? extra[0].instanceId.id
            : null
          : null
        : null
      : null;
    console.log("does try?");
    let answer =
      attendedCounter > 0
        ? assignedUsers.length > 0
          ? assignedUsers.map((assignedUserId) => {
              if (assignedUserId == userId) {
                setInterestedStatus(true);
              }
            })
          : null
        : null;
    // console.log(event);
    // forceUpdate();
  }, [event, extra, user]);

  useEffect(() => {
    if (event) {
      if (event.instanceAttributes) {
        if (event.instanceAttributes.genre) {
          let genre = event.instanceAttributes.genre;
          switch (genre) {
            case "Flight":
              setImage(Flight);
              break;
            case "Concert":
              setImage(Concert);
              break;
            case "Road Trip":
              setImage(RoadTrip);
              break;
            case "Sports":
              setImage(Sports);
              break;
            case "Arts & Theater":
              setImage(Arts);
              break;
            default:
              setImage(DefaultGenre);
              break;
          }
        }
      } else {
        setImage(DefaultGenre);
      }
    }
  }, [event]);

  const handleInterestedUser = async () => {
    //event card details
    let eventUserInstanceId = event;
    console.log(eventUserInstanceId);
    let attendedCounter = event
      ? event.instanceAttributes
        ? event.instanceAttributes.attendedCounter
          ? event.instanceAttributes.attendedCounter
          : null
        : null
      : null;
    let assignedUsers = event
      ? event.instanceAttributes
        ? event.instanceAttributes.assignedUsers
          ? event.instanceAttributes.assignedUsers
          : null
        : null
      : null;
    //user Id that clicked
    let userId = extra
      ? extra[0]
        ? extra[0].instanceId
          ? extra[0].instanceId.id
            ? extra[0].instanceId.id
            : null
          : null
        : null
      : null;
    const newInstance = {
      ...event,
      instanceAttributes: {
        ...event.instanceAttributes,
        attendedCounter: attendedCounter + 1,
        assignedUsers: [...assignedUsers, { id: userId, isAccepted: false }],
      },
    };

    await putEventUserInstance(newInstance, user.userId.email, user);
    const myNewInstance = await getInstanceById(
      user.userId.email,
      event.instanceId.id
    );
    console.log(myNewInstance);
    setEvent(myNewInstance);
    setSpinnerStatus(false);
    props.setTopSpinner(false);
    forceUpdate();
  };
  return (
    <Card
      className="h-100 overflow"
      style={{
        width: "92%",
        // paddingRight: "10px",
        // paddingLeft: "30px",
        backgroundColor: "white",
      }}
    >
      <img
        className="img-fluid rounded-top position-relative card-img-top"
        src={img}
        style={{ height: "100%" }}
        alt=""
      />
      <Badge className="bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
        {event
          ? event.instanceAttributes
            ? event.instanceAttributes.genre
            : null
          : null}
      </Badge>
      <Card.Body>
        <h5 className="mt-3">
          {" "}
          {event
            ? event.instanceAttributes
              ? event.instanceAttributes.title
              : null
            : null}{" "}
        </h5>
        <p className="mb-0 small">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-calendar-check-fill pe-1"
            viewBox="0 0 16 16"
          >
            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>{" "}
          </svg>
          Will be held on{" "}
          {event
            ? event.instanceAttributes
              ? event.instanceAttributes.futureDate
              : null
            : null}
        </p>
        <p style={{ padding: "4px" }} className="small">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-geo-alt"
            viewBox="0 0 16 16"
          >
            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
          </svg>
          {/* <div style={{ padding: "4%" }}> */}
          <>
            From{" "}
            {event
              ? event.instanceAttributes
                ? event.instanceAttributes.origin.address
                : null
              : null}
          </>
          <br />
          <>
            To{" "}
            {event
              ? event.instanceAttributes
                ? event.instanceAttributes.dest
                  ? event.instanceAttributes.dest.address
                  : null
                : null
              : null}
          </>
          {/* </div> */}
        </p>

        <Row className="align-items-center md-2">
          <Col
            xs
            lg="2"
            className="avatar avatar-xs "
            style={{
              paddingRight: "0px",
              paddingLeft: "6px",
              margin: "0",
              width: "20%",
            }}
          >
            <div
              className="avatar-img rounded-circle bg-primary"
              style={{
                paddingRight: "0px",
                paddingLeft: "0px",
                margin: "0",
              }}
            >
              <div
                className="smaller text-white position-absolute"
                style={{ paddingTop: "15px", paddingLeft: "12px" }}
              >
                +{" "}
                {event
                  ? event.instanceAttributes
                    ? event.instanceAttributes.attendedCounter
                    : null
                  : null}
              </div>
            </div>
          </Col>

          <Col
            className="ms-3"
            style={{
              paddingLeft: "0px",
              paddingRight: "0",
              width: "80%",
            }}
          >
            <small>In attendance</small>
          </Col>
        </Row>
        <div className="mt-3 justify-content-between">
          {/* <!-- Interested button --> */}
          {props ? (
            props.eventId ? (
              <>
                <Link
                  style={{
                    paddingLeft: "30px",
                    color: "#FFFFFF",
                    textDecoration: "none",
                  }}
                  to={{
                    pathname: props.eventId,
                    state: event,
                  }}
                >
                  <Button
                    size="md"
                    variant="success"
                    className="d-block"
                    htmlFor="Interested1"
                    // disabled={interestedStatus}
                    // onClick={() => {
                    //   props.setTopSpinner(true);
                    //   setSpinnerStatus(true);
                    //   handleInterestedUser();
                    // }}
                    // htmlFor=""
                  >
                    Go to event
                  </Button>
                </Link>
              </>
            ) : null
          ) : null}

          {user ? (
            user.userId ? (
              user.userId.email !== event.createdBy.userId.email ? (
                <div style={{ display: "flex" }} className="w-100">
                  {/* {spinnerStatus ? ( */}
                  {/* <Spinner
                      style={{ width: "100px", height: "100px" }}
                      animation="border"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) :  */}
                  {!interestedStatus ? (
                    <Button
                      size="md"
                      variant="outline-success"
                      className="d-block"
                      htmlFor="Interested1"
                      disabled={interestedStatus}
                      onClick={() => {
                        props.setTopSpinner(true);
                        setSpinnerStatus(true);
                        handleInterestedUser();
                      }}
                      // htmlFor=""
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-hand-thumbs-up-fill"
                        viewBox="0 0 16 16"
                        style={{ marginRight: "5px" }}
                      >
                        <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                      </svg>
                      Interested
                    </Button>
                  ) : (
                    <svg
                      className="checkmark"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 52 52"
                    >
                      <circle
                        className="checkmark__circle"
                        cx="26"
                        cy="26"
                        r="25"
                        fill="none"
                      />
                      <path
                        className="checkmark__check"
                        fill="none"
                        d="M14.1 27.2l7.1 7.2 16.7-16.8"
                      />
                    </svg>
                  )}
                </div>
              ) : null
            ) : null
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
};
export default EventCard;

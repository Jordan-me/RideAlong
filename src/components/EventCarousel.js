import React, { useState, useEffect, useContext } from "react";
import { Badge, Button, Card, CarouselItem, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../cssFiles/Events.css";
import { LoginContext } from "../App";
import { fetchInstanceByType } from "../data/data";
import EventCard from "./EventCard";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";

function EventCarousel(props) {
  // const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [userInstances, setUserInstances] = useState([]);
  const [spinnerState, setSpinnerState] = useState(false);
  const [myEventsState, setMyEventsState] = useState(false);
  useEffect(() => {
    if (props) {
      props.myEvents ? setMyEventsState(true) : setMyEventsState(false);
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div
      style={{
        // marginTop: "22px",
        height: "100%",
        width: "100%",
        backgroundColor: "beige",
        paddingLeft: "40px",
        paddingRight: "40px",
        paddingTop: "10px",
        paddingBottom: "3%",
      }}
    >
      {!spinnerState ? (
        <>
          <h5 style={{ marginLeft: "40%" }}>
            <strong
              style={{
                padding: "4px",
                margin: "4px",
                color: "GrayText",
              }}
            >
              {props.topEvents.length} Events incoming!
            </strong>
          </h5>
          <Carousel
            showDots={false}
            interval={false}
            responsive={responsive}
            ssr={false} // means to render carousel on server-side.
            infinite={false}
            autoPlay={false}
            keyBoardControl={true}
            customTransition="all .5"
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-10-px"
          >
            {props ? (
              props.topEvents ? (
                props.topEvents.map((instance) => {
                  return (
                    <div key={instance.instanceId.id}>
                      {myEventsState ? (
                        // <div>
                        //   my Event!
                        //   <Link to={`/events/${instance.instanceId.id}`}>
                        //     <h1>Event Details</h1>
                        //   </Link>
                        // </div>
                        <EventCard
                          eventId={`/events/${instance.instanceId.id}`}
                          setTopSpinner={setSpinnerState}
                          eventInstance={instance}
                        />
                      ) : (
                        <EventCard
                          setTopSpinner={setSpinnerState}
                          eventInstance={instance}
                        />
                      )}
                    </div>
                  );
                })
              ) : (
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              )
            ) : (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </Carousel>
        </>
      ) : (
        <div style={{ margin: "15%", marginLeft: "50%", height: "100%" }}>
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
        </div>
      )}
    </div>
  );
}

export { EventCarousel };

import React, { useState, useEffect, useContext } from "react";
import { Badge, Button, Card, CarouselItem, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../cssFiles/Events.css";
import { LoginContext } from "../App";
import { fetchInstanceByType } from "../data/data";
import EventCard from "./EventCard";
import Spinner from "react-bootstrap/Spinner";
import PartnerCard from "./PartnerCard";

function PartnerCarousel(props) {
  // const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [userInstances, setUserInstances] = useState([]);
  const [spinnerState, setSpinnerState] = useState(false);

  useEffect(() => {}, []);

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
    <div>
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
          props.event ? (
            <div key={props.event.instanceId.id}>
              <EventCard eventInstance={props.event} />
            </div>
          ) : null
        ) : null}

        {props ? (
          props.partnersForEvent ? (
            props.partnersForEvent.map((instance) => {
              return (
                <div key={instance.instanceId.id}>
                  <PartnerCard partnerInstance={instance} />
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
    </div>
  );
}

export { PartnerCarousel };
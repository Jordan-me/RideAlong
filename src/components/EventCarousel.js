import React, { useState, useEffect, useContext } from "react";
import { Badge, Button, Card, CarouselItem, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../cssFiles/Events.css";
import { LoginContext } from "../App";
import { fetchInstanceByType } from "../data/data";
import EventCard from "./EventCard";
function EventCarousel(props) {
  // const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [userInstances, setUserInstances] = useState([]);
  const [spinnerState, setSpinnerState] = useState(false);

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
        // swipeable={false}
        // draggable={true}
        showDots={false}
        interval={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        // transitionDuration={1500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div style={{ display: "flex" }}>
          {props
            ? props.topEvents
              ? props.topEvents.map((instance) => {
                  return (
                    <div
                      // style={{ width: "6500px" }}
                      key={instance.instanceId.id}
                    >
                      {/* <CarouselItem> */}
                      {/* <div style={{ display: "flex" }}> */}
                      <EventCard eventInstance={instance} />
                      {/* </div> */}

                      {/* </CarouselItem> */}
                    </div>
                  );
                })
              : null
            : null}
        </div>
      </Carousel>
    </div>
  );
}
export { EventCarousel };

import React, { useState, useEffect, useContext } from "react";
import { Badge, Button, Card, CarouselItem, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../cssFiles/Events.css";
import { LoginContext } from "../App";
import { getInstanceById } from "../data/data";
import EventCard from "./EventCard";
import Spinner from "react-bootstrap/Spinner";
import PartnerCard from "./PartnerCard";

function PartnerCarousel(props) {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [userInstances, setUserInstances] = useState([]);
  const [spinnerState, setSpinnerState] = useState(false);
  const [eventUserList, setEventUserList] = useState([]);
  useEffect(() => {
    let newData = null;
    newData = props
      ? props.partnersForEvent.length > 0
        ? getAssignedUsers(props.partnersForEvent)
        : // props.partnersForEvent.map(pId =>{

          // })
          null
      : null;
    setEventUserList(newData);
    console.log("new Data: " + newData);
  }, [props]);

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
  const getAssignedUsers = async (instanceIds) => {
    const newArr = [];
    const newInstancesArr =
      (await instanceIds.length) > 0
        ? instanceIds.map(async (insId) => {
            const newInstance = await getInstanceById(
              loggedInState.user.userId.email,
              insId
            );
            newArr.push(newInstance);
            return newInstance;
          })
        : null;
    console.log("newInstancesArr:\n\n" + instanceIds + newArr);
    return newInstancesArr;
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
        {/* {props ? (
          props.event ? (
            <div key={props.event.instanceId.id}>
              <EventCard eventInstance={props.event} />
            </div>
          ) : null
        ) : null} */}
        {eventUserList ? (
          eventUserList.length > 0 ? (
            eventUserList.map((userInstance) => {
              <div key={userInstance.instanceId.id}>
                <EventCard eventInstance={userInstance} />
              </div>;
            })
          ) : (
            <Spinner
              style={{ width: "100px", height: "100px" }}
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )
        ) : (
          <Spinner
            style={{ width: "100px", height: "100px" }}
            animation="border"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
      </Carousel>
    </div>
  );
}

export { PartnerCarousel };

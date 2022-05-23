import React, { useState } from "react";
import "../cssFiles/HeroSection.css";
import { Carousel, Container } from "react-bootstrap";
import TeamPhoto from "../assets/images/background-promo-team.jpg";
import EventPhoto from "../assets/images/background-promo-event-01.jpg";
// import 'bootstrap/dist/css/bootstrap.min.css';
function HeroSection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-75"
            src={TeamPhoto}
            alt="team promo"
          />
          <Carousel.Caption className="d-md-block  d-none">
            <h3 className="display-3 w100">
              <span className="w900">Get</span>
              Me A<span className="w400">Partner</span>
            </h3>
            <p>You can find your partner for an upcoming event here.</p>
            {/* Add button Team me up */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 opacity-75 "
            src={EventPhoto}
            alt="event-promo"
          />
          <Carousel.Caption className="d-md-block d-none">
            <h3 className="display-3 w100">
              <span className="w900">Events</span>
              Coming
              <span className="w400">Soon</span>
            </h3>
            <p>Upcoming events for you, and suitable for you.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export {HeroSection};



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

//    <>
//     <div
//         id="carouselExampleCaptions"
//         className="carousel slide"
//         data-bs-ride="carousel">
//         <div className="carousel-indicators">
//         <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//         ></button>
//         <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//         ></button>
//         </div>
//         <div className="carousel-inner">
//         <div className="carousel-item active">
//             <img
//             src="assets/images/background-promo-team.jpg"
//             className="d-block w-100 opacity-75"
//             alt="team-promo"
//             />
//             <div className="carousel-caption d-none d-md-block">
//             <h3 className="display-3 w100">
//                 <span className="w900">Get</span>
//                 Me A
//                 <span className="w400">Partner</span>
//             </h3>
//             <p style="padding-bottom: 50px;">
//                 You can find your partner for an upcoming event here.
//             </p>
//             <a href="PartnersPage.html" className="btn btn-lg btn-dark btn-action">
//                 Team me up <span className="icon-arrow-right"></span>
//             </a>
//             </div>
//         </div>
//         <div className="carousel-item">
//             <img
//             src="assets/images/background-promo-event-01.jpg"
//             className="d-block w-100 opacity-75"
//             alt="event-promo"
//             />
//             <div className="carousel-caption d-none d-md-block">
//             <h3 className="display-3 w100">
//                 <span className="w900">Events</span>
//                 Coming
//                 <span className="w400">Soon</span>
//             </h3>
//             <p style="padding-bottom: 50px;">
//                 Upcoming events for tou, and suitable for you.
//             </p>
//             <a href="eventsInfo.html" className="btn btn-lg btn-dark btn-action">
//                 Event Setup <span className="icon-arrow-right"></span>
//             </a>
//             </div>
//         </div>
//         </div>
//         <button
//         className="carousel-control-prev"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="prev"
//         >
//         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//         className="carousel-control-next"
//         type="button"
//         data-bs-target="#carouselExampleCaptions"
//         data-bs-slide="next"
//         >
//         <span className="carousel-control-next-icon" aria-hidden="true"></span>
//         <span className="visually-hidden">Next</span>
//         </button>
//     </div>
//    </>

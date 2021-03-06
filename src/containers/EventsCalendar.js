import React from "react";
import { Container } from "react-bootstrap";
import { MyCalendar } from "../components/MyCalendar";
import "../cssFiles/EventsCalendar.css";
import "@hammaadhrasheedh/react-event-calendar/dist/themes/circular.css";
import { Footer } from "../components/Footer";
import Img from "../assets/images/background-events-calendar.jpg";

const EventsCalendar = () => {
  return (
    <div>
      <div style={myStyle}>
        <Container>
          <h1>Events</h1>
          <div style={calStyle}>
            <MyCalendar />
          </div>
        </Container>
        <Container className="d-none d-xl-block">
          <img
            className="d-block w-100 opacity-75"
            src={Img}
            style={imgStyle}
            alt="team promo"
          />
        </Container>
      </div>
      <Footer />
    </div>
  );
};

const myStyle = {
  backgroundColor: "#DAAD86",
  position: "relative",
  display: "flex",
  paddingTop: "150px",
  margin: "0",
  textAlign: "center",
  height: "100vh",
  paddingBottom: "10px",
};

const calStyle = {
  backgroundColor: "#DAAD86",
  display: "absolute",
  margin: "0",
  height: "100%",
  paddingBottom: "10px",
};

const imgStyle = {
  height: "100%",
};

export default EventsCalendar;

import React, { useState } from "react";
import { Button, Form, Modal, Tab, Tabs } from "react-bootstrap";
import "../cssFiles/Events.css";
import { CompanionCarousel } from "./CompanionCarousel";
import { EventCarousel } from "./EventCarousel";
import Places from "./GooglePlacesInput";
import { MyCalendar } from "./MyCalendar";

const EventForm = ({ onSubmit }) => {
  const [genre, setGenre] = useState("");
  const [title, setTitle] = useState("");
  const [origin, setOrigin] = useState("");
  const [dest, setDest] = useState("");
  const [futureDate, setDate] = useState("");
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="validationCustom001">
        <Form.Label>Genre</Form.Label>
        <Form.Select
          size="md"
          className="form-select"
          id="validationCustom002"
          value={genre}
          onChange={(e) => {
            if (e.target.value !== "None") {
              console.log(e.target.value);
              setGenre(e.target.value);
            }
          }}
          required
        >
          <option value="None">Select Genre</option>
          <option value="Flight">Flight</option>
          <option value="Concert">Concert</option>
          <option value="Trip">Road Trip</option>
          <option value="Sports">Sports</option>
          <option value="Arts">Arts & Theater</option>
          <option value="Other">Other</option>
        </Form.Select>
        <br />
      </Form.Group>
      <Form.Group>
        <Form.Control
          required
          type="text"
          placeholder="Event name here"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <br />
      </Form.Group>
      <Form.Group controlId="validationCustom05">
        <Places
          origin={origin}
          setOrigin={setOrigin}
          Dest={dest}
          setDest={setDest}
        />
        {origin ? console.log("origin: " + origin) : null}
        {dest ? console.log(dest) : null}
        {/* <div className="h-100 w-100 position-absolute">
          map
       </div> */}
        <br />
      </Form.Group>

      <Form.Group md="4" controlId="validationCustom06">
        <div className="half-input">
          <Form.Control
            required
            type="date"
            onChange={(e) => {
              setDate(e.target.value);
            }}
            name="futureDate"
          />
        </div>
      </Form.Group>
      <br />
      <Button
        variant="outline-success"
        className="btn-success-soft"
        type="submit"
      >
        Create now
      </Button>
    </Form>
  );
};

function DiscoverEvents() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [key, setKey] = useState("top");
  const onEventFormSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    handleClose();
  };
  return (
    <div>
      <div className="card h-100">
        <div className="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0">
          <h1 className="h4 card-title">Discover Events</h1>
          {/* Button modal */}
          <Button
            variant="outline-primary"
            className="btn-primary-soft"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalCreateEvents"
            onClick={handleShow}
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
              style={{ paddingRight: "5px" }}
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            Create event
          </Button>
        </div>
        <div className="card-body">
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="top" title="top">
              <EventCarousel />
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="My Events" title="My Events">
              <EventCarousel />
              {/* <Places /> */}
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="My Calender" title="My Calender">
              <MyCalendar />
            </Tab>
            <Tab eventKey="Companion" title="Companion">
              <CompanionCarousel />
              {/* <Sonnet /> */}
            </Tab>
          </Tabs>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} style={{ zIndex: "11000" }}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventForm onSubmit={onEventFormSubmit} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-danger"
            className="btn-danger-soft"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export { DiscoverEvents };

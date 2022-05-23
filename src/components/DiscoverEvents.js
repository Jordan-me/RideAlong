import React, { useContext, useEffect, useState } from "react";
import { Button, Form, Modal, Tab, Tabs } from "react-bootstrap";
import "../cssFiles/Events.css";
import { CompanionCarousel } from "./CompanionCarousel";
import { EventCarousel } from "./EventCarousel";
import Places from "./GooglePlacesInput";
import { MyCalendar } from "./MyCalendar";
import { LoginContext } from "../App";
import { fetchUser, postEventInstance, putUser } from "../data/data";
import { TopEventTab } from "./TopEventTab";
import { MyEventsTab } from "./MyEventsTab";

const EventForm = ({ handleFunc }) => {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);

  useEffect(() => {
    if (loggedInState !== null) {
      setUser(loggedInState.user);
      setExtra(loggedInState.extra[0]);
    }
  }, [loggedInState]);
  useEffect(() => {
    if (user !== null && extra !== null) {
      setUser(user);
      setExtra(extra);
    }
  }, [user, extra]);

  const [genre, setGenre] = useState("");
  const [title, setTitle] = useState("");
  const [origin, setOrigin] = useState("");
  const [dest, setDest] = useState("");
  const [futureDate, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    const userEvent = {
      genre: genre,
      title: title,
      origin: origin,
      dest: dest,
      futureDate: futureDate,
      attendedCounter: 0,
      assignedUsers: [],
    };
    let userDB = await fetchUser(user.userId.email);
    putUser(user, "Manager").then(
      async () =>
        await postEventInstance(userEvent, userDB, "eventUser").then(() =>
          putUser(user, "Player")
        )
    );
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="validationCustom001">
        <Form.Label>Genre</Form.Label>
        <Form.Select
          size="md"
          className="form-select"
          id="validationCustom002"
          value={genre}
          onChange={(e) => {
            if (e.target.value !== "None") {
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
        {/* {origin ? console.log("origin: " + origin) : null} */}
        {/* {dest ? console.log(dest) : null} */}

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
        onClick={handleFunc}
      >
        Create now
      </Button>
    </Form>
  );
};

function DiscoverEvents({ user }) {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [key, setKey] = useState("top");
  const onEventFormSubmit = (e) => {
    const form = e.currentTarget;
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
              <TopEventTab />
            </Tab>
            <Tab eventKey="My Events" title="My Events">
              <MyEventsTab />
            </Tab>
            <Tab eventKey="My Calender" title="My Calender">
              <MyCalendar />
            </Tab>
            <Tab eventKey="Companion" title="Companion">
              <CompanionCarousel />
            </Tab>
          </Tabs>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} style={{ zIndex: "11000" }}>
        <Modal.Header closeButton>
          <Modal.Title>Create Event</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EventForm handleFunc={handleClose} />
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

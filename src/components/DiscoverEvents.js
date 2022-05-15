import React, { useState } from "react";
import { Button, Modal, Tab, Tabs } from "react-bootstrap";
import "../cssFiles/Events.css";
import { CompanionCarousel } from "./CompanionCarousel";
import { EventCarousel } from "./EventCarousel";
import { MyCalendar } from "./MyCalendar";

function DiscoverEvents() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [key, setKey] = useState("top");

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
              class="bi bi-plus"
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Event Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>bla bla and mor bla</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
export { DiscoverEvents };

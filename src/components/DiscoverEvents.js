import React, { useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import "../cssFiles/Events.css";
import { EventCarousel } from "./EventCarousel";
import { MyCalendar } from "./MyCalendar";

function DiscoverEvents() {
  const [key, setKey] = useState("top");
  return (
    <div >
      <div className="card h-100">
        <div className="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0">
          <h1 className="h4 card-title">Discover Events</h1>
          {/* Button modal */}
          <Button
            className="btn-primary-soft"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#modalCreateEvents"
          >
            {" "}
            <i className="fa-solid fa-plus pe-1"></i> Create event
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
              <EventCarousel/>
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="My Events" title="My Events">
              bla
              {/* <Sonnet /> */}
            </Tab>
            <Tab eventKey="My Calender" title="My Calender">
              <MyCalendar />
            </Tab>
            <Tab eventKey="Companion" title="Companion">
              bla
              {/* <Sonnet /> */}
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
export { DiscoverEvents };

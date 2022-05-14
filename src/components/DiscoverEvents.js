import React from "react";
import { Button } from "react-bootstrap";
import "../cssFiles/Events.css";

function DiscoverEvents() {
  return (
    <div>
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
      </div>
      <div className="card-body">
        <ul className="nav nav-tabs nav-bottom-line justify-content-center justify-content-md-start">
          <li className="nav-item">
            {" "}
            <a class="nav-link active" data-bs-toggle="tab" href="#tab-1">
              {" "}
              Top{" "}
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a class="nav-link" data-bs-toggle="tab" href="#tab-2">
              {" "}
              My Events{" "}
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a class="nav-link" data-bs-toggle="tab" href="#tab-3">
              {" "}
              My Calender{" "}
            </a>{" "}
          </li>
          <li className="nav-item">
            {" "}
            <a class="nav-link" data-bs-toggle="tab" href="#tab-4">
              {" "}
              Friends{" "}
            </a>{" "}
          </li>
        </ul>
        <div className="tab-content mb-0 pb-0">
          <div className="tab-pane fade active show" id="tab-1">
            <div className="col-sm-6 col-xl-4">
              <div className="card h-100">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export { DiscoverEvents };

import React, { useEffect, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import profile_image from "../assets/images/no-profile-pic.jpg";
import { LoginContext } from "../App";
import "../cssFiles/MyProfile.css";

const MyProfile = (props) => {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);

  useEffect(() => {
    console.log(loggedInState);
  }, []);

  useEffect(() => {
    console.log(loggedInState);
    if (loggedInState !== null && !typeof loggedInState === Boolean) {
      setUser(loggedInState.user);
      setExtra(loggedInState.extra[0]);
    }
  }, [loggedInState]);
  useEffect(() => {
    console.log(user, extra);
  }, [user, extra]);
  return (
    <div className="mb-5" style={{ paddingTop: "138px" }}>
      <Container
        style={{
          marginLeft: "99.6px",
          paddingLeft: "12px",
          marginRight: "99.6px",
          paddingRight: "12px",
        }}
      >
        <Row>
          <Col className="lg-3 ms-lg-auto" style={{ width: "25%" }}>
            <Card className="border-0 shadow mb-6 mb-lg-0">
              <CardHeader
                className="p-4 border-0 text-center"
                style={{
                  background: "#F8F9FBa",
                  paddingTop: "24px",
                  paddingBottom: "24px",
                  paddingLeft: "19.2px",
                  paddingRight: "19.2px",
                }}
              >
                <div
                  className="avatar avatar-xxl p-2 mb-2"
                  style={{
                    border: "#dee2e6",
                    position: "relative",
                    display: "inline-block",
                    borderRadius: "50%",
                    boxShadow: "0 0 1rem rgb(0 0 0 / 15%)",
                  }}
                >
                  <div className="position-relative h-100 overflow-hidden rounded-circle">
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "144px",
                        height: "144px",
                        background: "none",
                        opacity: "1",
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                      }}
                    >
                      <img
                        src={
                          // user.avatar ? user.avatar :
                          profile_image
                        }
                        className="rounded-circle me-3"
                        alt=""
                        // height="150px"
                        // width="150px"
                        style={{
                          margin: "0px",
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "border-box",
                          padding: "0px",
                          border: "none",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: "100%",
                          maxWidth: "100%",
                          minHeight: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </span>
                  </div>
                </div>
                <h5>
                  {loggedInState
                    ? loggedInState.user
                      ? loggedInState.user.username
                      : null
                    : null}
                </h5>
                {loggedInState ? (
                  loggedInState.extra[0] ? (
                    <p>
                      {loggedInState.extra[0].instanceAttributes["dob"].split(
                        "-"
                      ).length === 3
                        ? Math.abs(
                            new Date().getFullYear() -
                              loggedInState.extra[0].instanceAttributes[
                                "dob"
                              ].split("-")[0]
                          )
                        : null}
                    </p>
                  ) : null
                ) : null}
                {/* <p>{JSON.stringify(extra.instanceAttributes)}</p> */}
              </CardHeader>
              <Card.Body style={{ display: "block", padding: "24px" }}>
                <div className="d-flex align-items-center me-3">
                  <div
                    className="icon-rounded icon-rounded-sm bg-primary-light me-2"
                    style={{
                      width: "3rem",
                      height: "3rem",
                      lineHeight: "3rem",
                      backgroundColor: "#e4e8fe",
                      display: "inline-block",
                      borderRadius: "50%",
                      textAlign: "center",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-award"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-0"> "2877? events"</p>
                  </div>
                </div>
                <hr />
                {loggedInState ? (
                  loggedInState.user ? (
                    <h6>
                      {loggedInState.user.username.split("_")[0]} Hobbies{" "}
                    </h6>
                  ) : null
                ) : null}
                <ul className="text-muted card-text">
                  <li>Tennis?</li>
                  <li>Chess?</li>
                  <li>Dance?</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          <Col className="ps-lg-5 me-lg-9">
            <h1 className="hero-heading mb-0">
              {loggedInState ? (
                loggedInState.user ? (
                  <strong>
                    Hello, I'm {loggedInState.user.username.replace("_", " ")}
                  </strong>
                ) : null
              ) : null}
            </h1>
            <div className="text-block">
              <p>
                {loggedInState ? (
                  loggedInState.extra[0] ? (
                    <span
                      className="badge text-secondary bg-secondary-light"
                      style={{ color: "#e83e8c", backgroundColor: "#fce2ee" }}
                    >
                      Joined in{" "}
                      {loggedInState.extra[0].createdTimestamp.split("-")[0]}
                    </span>
                  ) : null
                ) : null}
              </p>
              <div>
                <p className="text-muted">
                  DESCRIPTION? Samsa was a travelling salesman - and above it
                  there hung a picture that he had recently cut out of an
                  illustrated magazine and housed in a nice, gilded frame.
                </p>
                <p className="text-muted">
                  He must have tried it a hundred times, shut his eyes so that
                  he wouldn't have to look at the floundering legs, and only
                  stopped when he began to feel a mild, dull pain there that he
                  had never felt before.{" "}
                </p>
              </div>
            </div>
            <div
              className="text-block"
              style={{ paddingTop: "32px", paddingBottom: "16px" }}
            >
              {loggedInState ? (
                loggedInState.user ? (
                  <h4 className="mb-5">
                    {loggedInState.user.username.split("_")[0]}'s top events
                  </h4>
                ) : null
              ) : null}
              <Row>
                <Col className="mb-30px hover-animate me-lg-4 me-sm-6">
                  <Card className="h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay">
                      <span className="event-card">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0px",
                            margin: "0px",
                            padding: "66.6667% 0px 0px",
                          }}
                        >
                          <img
                            src={profile_image}
                            className="img-fluid"
                            sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, (max-width:1149px) 30vw, 280px"
                            alt=""
                            // height="150px"
                            // width="150px"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "border-box",
                              padding: "0px",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </div>
                    <Card.Body>
                      <div className="d-flex align-items-center card-body">
                        <div className="w-100">
                          <h6 className="card-title">Event title</h6>
                          <div className="d-flex mb-3 card-subtitle">
                            <p className="flex-grow-1 mb-0 text-muted text-sm">
                              Event
                            </p>
                          </div>
                          <p className="text-muted card-text">
                            <span className="h4 text-primary">amount?</span>
                            reviews
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-30px hover-animate me-lg-4 me-sm-6">
                  <Card className="h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay">
                      <span className="event-card">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0px",
                            margin: "0px",
                            padding: "66.6667% 0px 0px",
                          }}
                        >
                          <img
                            src={profile_image}
                            className="img-fluid"
                            sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, (max-width:1149px) 30vw, 280px"
                            alt=""
                            // height="150px"
                            // width="150px"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "border-box",
                              padding: "0px",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </div>
                    <Card.Body>
                      <div className="d-flex align-items-center card-body">
                        <div className="w-100">
                          <h6 className="card-title">Event title</h6>
                          <div className="d-flex mb-3 card-subtitle">
                            <p className="flex-grow-1 mb-0 text-muted text-sm">
                              Event
                            </p>
                          </div>
                          <p className="text-muted card-text">
                            <span className="h4 text-primary">amount?</span>
                            reviews
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col className="mb-30px hover-animate me-lg-4 me-sm-6">
                  <Card className="h-100 border-0 shadow">
                    <div className="card-img-top overflow-hidden gradient-overlay">
                      <span className="event-card">
                        <span
                          style={{
                            boxSizing: "border-box",
                            display: "block",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: "1",
                            border: "0px",
                            margin: "0px",
                            padding: "66.6667% 0px 0px",
                          }}
                        >
                          <img
                            src={profile_image}
                            className="img-fluid"
                            sizes="(max-width:576px) 100vw, (max-width:991px) 50vw, (max-width:1149px) 30vw, 280px"
                            alt=""
                            // height="150px"
                            // width="150px"
                            style={{
                              position: "absolute",
                              inset: "0px",
                              boxSizing: "border-box",
                              padding: "0px",
                              border: "none",
                              margin: "auto",
                              display: "block",
                              width: "0px",
                              height: "0px",
                              minWidth: "100%",
                              maxWidth: "100%",
                              minHeight: "100%",
                              maxHeight: "100%",
                            }}
                          />
                        </span>
                      </span>
                    </div>
                    <Card.Body>
                      <div className="d-flex align-items-center card-body">
                        <div className="w-100">
                          <h6 className="card-title">Event title</h6>
                          <div className="d-flex mb-3 card-subtitle">
                            <p className="flex-grow-1 mb-0 text-muted text-sm">
                              Event
                            </p>
                          </div>
                          <p className="text-muted card-text">
                            <span className="h4 text-primary">amount?</span>
                            reviews
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      {/* <h1 style={{ paddingTop: "150px" }}>Hello my profile page</h1>
      <h2>user: {JSON.stringify(user)}</h2>
      <p>extendedUser: {JSON.stringify(extendedUser)}</p> */}
    </div>
  );
};

export { MyProfile };

import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import Img from "../assets/images/background-promo-event.jpg";
import Logo from "../assets/images/logo2.png";
function SignUp() {
  const myStyle = {
    backgroundColor: "#DAAD86",
    position: "relative",
    display: "flex",
    paddingTop: "150px",
    margin: "0",
    textAlign: "center",
    height: "100vh",
  };
  const imgStyle = {
    height: "100%",
  };
  return (
    <>
      <div style={myStyle}>
        <Container>
          <h1>RideAlong</h1>
          <hr></hr>
          <div className="color-overlay d-flex justify-content-center">
            <Form className="rounded p-4 p-md-3 ">
              <Row style={{paddingBottom:"10px"}}>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="password" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
          <Button
            className="rounded-5"
            variant="outline-dark"
            style={{ borderRadius: "500px" }}
          >
            REGISTER
          </Button>
          <br />
          <br />
          <hr style={{ width: "70%", display: "inline-block" }}></hr>
          <h5>
            <strong>Already have an account?</strong>
          </h5>
          <Button
            className="rounded-5"
            variant="outline-dark"
            style={{ borderRadius: "500px" }}
            href="/login"
          >
            LOGIN
          </Button>
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
    </>
  );
}
export { SignUp };

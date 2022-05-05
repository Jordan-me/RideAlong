import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import Img from "../assets/images/background-promo-event.jpg";
import Logo from "../assets/images/logo2.png";
import { postUser } from "../data/data";
import useGeoLocation from "../components/useGeoLocation";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const location = useGeoLocation();

  const [validated, setValidated] = useState(false);
  const handleSignUp = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);

    const user = {
      username: firstName + "_" + lastName,
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: "player",
      avatar: "asd.jpg",
      lat: location.coordinates.lat,
      lng: location.coordinates.lng,
    };
    postUser(user);
    console.log("user: " + firstName, lastName, password, email);
  };


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
            <Form onSubmit={handleSignUp} className="rounded p-4 p-md-3 ">
              <Row style={{ paddingBottom: "10px" }}>
                <Col>
                  <Form.Control
                    placeholder="First name"
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Last name"
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control 
                    type="date" 
                    name='date_of_birth' 
                    
                     />
                </Col>
                <Col xs={12} md={8}>
                  <Form.Select aria-label="Default select example" style={{marginTop: "10px"}} >
                    <option>Select gender</option>
                    <option value="1">Female</option>
                    <option value="2">Man</option>
                    <option value="3">Unknown</option>
                  </Form.Select>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      name="terms"
                      label="Agree to terms and conditions"
                      feedbackType="invalid"
                      style={{ marginTop: "10px" }}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>
              <Button
                type="submit"
                className="rounded-5"
                variant="outline-dark"
                style={{ borderRadius: "500px", marginTop: "20px" }}
              >
                REGISTER
              </Button>
            </Form>
          </div>

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
};
export { SignUp };

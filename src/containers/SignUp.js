import React, { useState } from "react";
import { Row, Col, Container, Form, Button, InputGroup } from "react-bootstrap";
import { Footer } from "../components/Footer";
import Img from "../assets/images/background-promo-event.jpg";
import { fetchUser, postUser, postUserInstance, putUser } from "../data/data";
import { useNavigate, NavLink } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import useGeoLocation from "../components/useGeoLocation";
import "../cssFiles/SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setProfilePic] = useState("https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0=");
  const [spinnerState, setSpinnerState] = useState(false);
  const location = useGeoLocation();

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    setSpinnerState(true);
    event.stopPropagation();
    if (form.checkValidity() === false) {
      setSpinnerState(false);
      // event.preventDefault();
    } else {
      const user = {
        username: firstName + "_" + lastName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        dob: dob,
        gender: gender,
        eventsCounter:0,
        eventsList:[],
        role: "Manager",
        avatar: avatar,
        lat: location.coordinates.lat,
        lng: location.coordinates.lng,
      };
      postUser(user)
      .then(() =>
        postUserInstance(user, "User").then(() => setSpinnerState("SUCCESS"))
          .then(()=>
            putUser(fetchUser(user.email),"Player")
        ));
      
    }
    setValidated(true);
  };

  return (
    <div>
      <div className="myStyle">
        <Container fluid="md">
          <h1>RideAlong</h1>
          <hr></hr>
          <div className="color-overlay d-flex justify-content-center">
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="rounded p-4 p-md-3 "
            >
              <Row className="mb-3" style={{ paddingBottom: "10px" }}>
                <Col>
                  <Form.Group md="4" controlId="validationCustom01">
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group md="4" controlId="validationCustom02">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col>
                  <Form.Group md="4" controlId="validationCustom03">
                    <Form.Select
                      className="form-select"
                      id="validationCustom04"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                      required
                    >
                      <option defaultValue="" >Select gender</option>
                      <option value="Female">Female</option>
                      <option value="Man">Man</option>
                      <option value="Unknown">Unknown</option>
                    </Form.Select>
                    <div className="invalid-feedback">
                      Please select gender.
                    </div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group md="4" controlId="validationCustom05">
                    <Form.Control
                      required
                      type="date"
                      onChange={(e) => {
                        setDob(e.target.value);
                      }}
                      name="date_of_birth"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Form.Group className="mb-2" md="4" controlId="formBasicEmail">
                  <Form.Control
                    required
                    type="email"
                    placeholder="Enter Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group className="mb-2" controlId="formBasicPassword">
                  <Form.Control
                    required
                    type="password"
                    placeholder="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </Form.Group>
              </Row>
              <Row className="mb-2">
                <div className="input-group mb-3">
                  <input
                    required
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                    onChange={(e) => {
                      setProfilePic(e.target.value);
                    }}
                    style={{paddingTop:"5px"}}
                  />
                  <img src="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0="
                   alt="Avatar" className="avatar"/>
                </div>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      name="terms"
                      label="Agree to terms & conditions"
                      feedbackType="invalid"
                      style={{ marginTop: "10px" }}
                    />
                  </Form.Group>
                </Col>
                <Col></Col>
              </Row>

              {spinnerState === true ? (
                <Button
                  style={{ borderRadius: "500px", marginLeft: "30px" }}
                  className="rounded-5"
                  // variant="primary"
                  variant="outline-dark"
                  disabled
                >
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    style={{ marginRight: "10px" }}
                  />
                  Loading...
                </Button>
              ) : spinnerState === false ? (
                <Button
                  type="submit"
                  className="rounded-5"
                  variant="outline-dark"
                  style={{
                    width: "130px",
                    borderRadius: "500px",
                    marginTop: "20px",
                    marginRight: "20px",
                  }}
                >
                  REGISTER
                </Button>
              ) : spinnerState === "SUCCESS" ? (
                <label
                  type="label"
                  className="rounded-5"
                  variant="filled"
                  style={{
                    width: "280px",
                    borderRadius: "500px",
                    marginTop: "20px",
                    marginRight: "20px",
                  }}
                >
                  Success{navigate("/")}
                </label>
              ) : null}
            </Form>
          </div>
          <hr style={{ width: "70%", display: "inline-block" }}></hr>
          <h6>
            <strong>Already have an account?</strong>
          </h6>
          <NavLink to="/login">
            <Button
              className="rounded-5"
              variant="outline-dark"
              style={{ borderRadius: "500px" }}
            >
              LOGIN
            </Button>
          </NavLink>
        </Container>
        <Container className="d-none d-xl-block">
          <img
            className="d-block w-100 opacity-75 imgStyle"
            src={Img}
            alt="team promo"
          />
        </Container>
      </div>
      <div style={{ bottom: "0", width: "100%", position: "relative" }}>
        <Footer />
      </div>
    </div>
  );
};
export { SignUp };

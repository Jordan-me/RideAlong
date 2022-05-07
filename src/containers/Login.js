import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import Img from "../assets/images/background-promo-event.jpg";
import Logo from "../assets/images/logo2.png";
import { getUser } from "../data/data";
function Login() {
  const [email, setEmail] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const fetchedEmail = await getUser(email);
    console.log(fetchedEmail);
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
            <Form onSubmit={handleLogin} className="rounded p-4 p-md-3 ">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="password" />
              </Form.Group>
              <Button
                type="submit"
                style={{ marginTop: "20px" }}
                className="rounded-5"
                variant="outline-dark"
              >
                LOGIN
              </Button>
            </Form>
          </div>

          <br />
          <br />
          <hr style={{ width: "70%", display: "inline-block" }}></hr>
          <h5>
            <strong>Don't have an account?</strong>
          </h5>
          <Button
            href="/signup"
            className="rounded-5"
            variant="outline-dark"
            style={{ borderRadius: "500px" }}
          >
            SIGN UP FOR RIDEALONG
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
export { Login };

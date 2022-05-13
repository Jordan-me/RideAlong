import React, { useEffect, useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import { LoginContext } from "../App";
import Logo from "../assets/images/logo2.png"; //  src/images
const NavigationBar = (props) => {
  const navigate = useNavigate();
  const [loggedInState, setLoggedInState] = useContext(LoginContext);

  return (
    <>
      <Navbar collapseOnSelect fixed="top" bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="logo" height="70px" width="90px" />
            Ride Along
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/"
                  smooth="true"
                  duration="500"
                  offset="20"
                  spy="true"
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              {loggedInState ? (
                <>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/calendar">
                      Events
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/calendar">
                      Chat
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/calendar">
                      Profile
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      onClick={() => {
                        localStorage.setItem("loginState", false);
                        setLoggedInState(false);
                        navigate("/");
                      }}
                    >
                      Log out
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  <Nav.Item>
                    <Nav.Link as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}

              <Nav.Item>
                <Nav.Link
                  href="/#question"
                  smooth="true"
                  duration="500"
                  offset="-70"
                  spy="true"
                >
                  FAQ
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  href="/#about"
                  smooth="true"
                  duration="500"
                  offset="-70"
                  spy="true"
                >
                  About
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;

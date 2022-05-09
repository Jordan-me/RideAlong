import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container, NavLink } from "react-bootstrap";
import Logo from "../assets/images/logo2.png"; //  src/images
export const NavigationBar = () => (
  <>
    <Navbar collapseOnSelect fixed="top" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img src={Logo} alt="logo" height="70px" width="90px" />
          Ride Along
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <Nav.Link href="/#" smooth="true">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/calendar">
                EventsCalendar
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav.Item>
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

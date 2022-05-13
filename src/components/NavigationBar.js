import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import Logo from "../assets/images/logo2.png"; //  src/images
const NavigationBar = (props) => {
  const navigate = useNavigate();

  const [loggedInStyle, setLoggedInStyle] = useState({ visibility: "visible" });
  // const handleLoggedInStyle = (isLogged) => {
  //   //   console.log("handlestyle is invoked");
  //   //   isLogged ? setLoggedInStyle(false) : setLoggedInStyle(true);
  //   setLoggedInStyle(false);
  // };
  useEffect(() => {
    localStorage.getItem("loginState") === false
      ? setLoggedInStyle({ visibility: "visible" })
      : setLoggedInStyle({ visibility: "hidden" });
  }, [localStorage.getItem("loginState")]);

  // localStorage.getItem("loginState")
  //   ? setLoggedInStyle({ visibility: "hidden" })
  //   : setLoggedInStyle({ visibility: "visible" });
  // useEffect(() => {
  //   console.log("hi1" + props.loggedInState);
  //   if (props.loggedInState) setLoggedInStyle(false);
  //   else setLoggedInStyle(true);
  //   // const loginState = localStorage.getItem("loginState");
  //   // loginState ? handleStyle(true) : handleStyle(false);
  // }, [props.loggedInState]);

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
                {/* <Nav.Link as={Link} to="/"> */}
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
                {/* </Nav.Link> */}
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as={Link} to="/calendar">
                  Calendar
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  // style={loggedInStyle}
                  // state={{
                  //   handleLoggedInStyle: handleLoggedInStyle,
                  // }}
                  as={NavLink}
                  to="/login"
                >
                  Login
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link
                  style={loggedInStyle}
                  onClick={() => {
                    localStorage.setItem("loginState", false);
                    navigate("/");
                  }}
                >
                  Log Out
                </Nav.Link>
              </Nav.Item> */}
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

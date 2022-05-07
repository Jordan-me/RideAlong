import React, { Component, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Footer } from "../components/Footer";
import Img from "../assets/images/background-promo-event.jpg";
import { fetchUser, fetchInstanceByName } from "../data/data";
import { useNavigate, Navigate, Route } from "react-router-dom";
import { setUser, setExtendedUser } from "./MyProfile";
// class loginClass extends Component() {
//   constructor(props) {
//     super(props);
//     this.state = { user: "", extra: "" };
//   }
//   login = (email) => {
//     fetchUser(email).then((res) => {
//       if(res.success ===true){
//         var user =  res.json();
//         AsyncStorage.setItem('user',user);
//         fetchInstanceByName(email).then((res2) => {
//           var extendedUser =  res2.json();
//           AsyncStorage.setItem('extra',extendedUser);
        
//         });

//         this.props.navigator.push({
//           id:'myProfile'
//         });
        
//       }else{
//         alert.apply(res.message);
//       }
//     });
//   };
// }
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      // let loginComp = new loginClass();
      // loginComp.login(email);
      let user = fetchUser(email).then((data) => {
        // setUser(data);
        // setUser(data);
        console.error(data);
      });
      let extra = fetchInstanceByName(email).then((data) => {
        // setExtendedUser(data);
        // setExtendedUser(data);
        console.error(data);
      });
      if (user != null) {
        navigate("/myProfile");
      }
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
    height: "100%",
    paddingBottom: "10px",
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
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              className="rounded p-4 p-md-3 "
            >
              <Form.Group className="mb-2" md="4" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>

                <Form.Control
                  required
                  type="password"
                  placeholder="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>

              <Button
                type="submit"
                className="rounded-5"
                variant="outline-dark"
                style={{ borderRadius: "500px" }}
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
};
export { Login };

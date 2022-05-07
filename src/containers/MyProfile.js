import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import profile_image from "../assets/images/profile_image.jpg";
const MyProfile = (props) => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);

  useEffect(() => {
    if(user && extra){
      setUser(location.state.userState);
      setExtra(location.state.extraState[0]);

    }
    console.log(user);
    console.log(extra);
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
          <Col className="lg-3 ms-lg-auto">
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
                <div className="avatar avatar-xxl p-2 mb-2">
                  <div className="position-relative h-100 overflow-hidden rounded-circle">
                    <span style ={{boxSizing: "border-box",
                     display: "inline-block", overflow: "hidden", width: "144px", height: "144px", background: "none", opacity: "1",
                      border: "0px", margin: "0px", padding: "0px", position: "relative"}}>

                      <img
                        src={profile_image}
                        className="rounded-circle mb-3"
                        alt=""
                        // height="150px"
                        // width="150px"
                        style={{margin:"0px",position: "absolute", inset: "0px", boxSizing: "border-box",
                         padding: "0px", border: "none", display: "block", width: "0px", height: "0px", 
                         minWidth: "100%", maxWidth: "100%", minHeight: "100%",maxHeight: "100%"}}
                      />
                      </span>
                  </div>
                </div>
                <p>MyProfile</p>
                <h5>{user.username.replace("_", " ")}</h5>
              </CardHeader>
            </Card>
          </Col>
          <Col>bla bka</Col>
        </Row>
      </Container>
      {/* <h1 style={{ paddingTop: "150px" }}>Hello my profile page</h1>
      <h2>user: {JSON.stringify(user)}</h2>
      <p>extendedUser: {JSON.stringify(extendedUser)}</p> */}
    </div>
  );
};

export { MyProfile };

import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
import profile_image from "../assets/images/profile_image.jpg";
const MyProfile = (props) => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, []);

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
            <p>MyProfile</p>
            <Card className="border-0 shadow mb-6 mb-lg-0">
              <CardHeader
                className="bg-gray-100 py-4 border-0 text-center"
                style={{
                  paddingTop: "24px",
                  paddingBottom: "24px",
                  paddingLeft: "19.2px",
                  paddingRight: "19.2px",
                }}
              >
                {/* <a href='#' className='d-inline-block'>
                            <Card.Img className='p-2 mb-2 position-relative h-100 overflow-hidden rounded-circle' 
                            style ={{paddingTop:"24px",paddingBottom:"24px"}}
                            
                            >              
            
                              
                            </Card.Img>
                          </a> */}
              </CardHeader>
            </Card>
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

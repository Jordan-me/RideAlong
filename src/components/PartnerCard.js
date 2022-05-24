import React, { useState, useEffect, useContext } from "react";
import { Badge, Button, Card, Carousel, Col, Row } from "react-bootstrap";
import "../cssFiles/Events.css";
import { LoginContext } from "../App";
import getLocationDisplay from './GooglePlacesInput'
const PartnerCard = (props) => {
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [partner, setPartner] = useState(null);
  const [img, setImage] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (loggedInState !== null) {
      setUser(loggedInState.user);
      console.log(user, partner);
    }
  }, [loggedInState]);
  useEffect(() => {
    if (props) if (props.partnerInstance) setPartner(props.partnerInstance);
  }, []);

  return (
    <>
      <Card
        className="h-100 overflow"
        style={{ paddingRight: "2px", paddingLeft: "2px" }}
      >
        <img
          className="img-fluid rounded-circle rounded-top position-relative"
          src="https://social.webestica.com/assets/images/avatar/04.jpg"
          alt=""
          style={{
            height: "140px",
            width: "140px",
            marginLeft: "24%",
            marginTop: "10%",
          }}
        />
        <Card.Body>
          <h5 className="mt-3"> {partner.instanceAttributes.firstName} {partner.instanceAttributes.lastName} </h5>
          <p className="small">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-geo-alt"
              viewBox="0 0 16 16"
            >
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            {getLocationDisplay(partner.location.lat,partner.location.lng)} 
          </p>

          <div
            className="mt-3 justify-content-between"
            style={{ marginLeft: "20%" }}
          >
            {/* <!-- Interested button --> */}
            <div className="w-100">
              <Button
                size="md"
                variant="outline-success"
                className="d-block"
                for="Interested1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-arrow-up-circle-fill"
                  viewBox="0 0 16 16"
                  style={{ paddingRight: "5px" }}
                >
                  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
                Pick me
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};
export default PartnerCard;

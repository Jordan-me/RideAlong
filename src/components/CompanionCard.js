import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../cssFiles/Events.css";
function CompanionCard(props) {
  return (
    <div>
      <Card className="h-100 pr-20">
        <img
          className="img-fluid rounded-circle rounded-top position-relative"
          src="https://social.webestica.com/assets/images/avatar/04.jpg"
          alt=""
          style={{height:"140px", width:"140px", marginLeft: "24%" , marginTop: "10%"}}
        />
        <Card.Body>
          <h5 className="mt-3"> Name? </h5>
          <p className="mb-0 small">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-calendar-check-fill pe-1"
              viewBox="0 0 16 16"
            >
              <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>{" "}
            </svg>
            Mon, Sep 25, 2020 at 9:30 AM: DAY, Month dayNumber, Year at,
            hour:minutes{" "}
          </p>
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
            San francisco: location? city{" "}
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
                  style={{paddingRight:"5px"}}
                >
                  <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                </svg>
                Pick me
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
export { CompanionCard };

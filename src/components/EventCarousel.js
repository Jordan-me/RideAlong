import React from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../cssFiles/Events.css";
function EventCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Carousel
        // swipeable={false}
        // draggable={true}
        showDots={false}
        interval={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={false}
        autoPlay={false}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        // autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        // transitionDuration={1500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
          <Card className="h-100 pr-20">
            <img
              className="img-fluid rounded-top position-relative"
              src="https://social.webestica.com/assets/images/events/01.jpg"
              alt=""
            />
            <Badge className="bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
              genre?
            </Badge>
            <Card.Body>
              <h5 className="mt-3"> Title? </h5>
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

              <Row className="align-items-center md-2">
                <Col
                  xs
                  lg="2"
                  className="avatar avatar-xs "
                  style={{
                    paddingRight: "0px",
                    paddingLeft: "0px",
                    margin: "0",
                    width: "20%",
                  }}
                >
                  <div
                    className="avatar-img rounded-circle bg-primary"
                    style={{
                      paddingRight: "0px",
                      paddingLeft: "0px",
                      margin: "0",
                    }}
                  >
                    <div
                      className="smaller text-white position-absolute"
                      style={{ paddingTop: "11px", paddingLeft: "6px" }}
                    >
                      +78
                    </div>
                  </div>
                </Col>

                <Col
                  className="ms-3"
                  style={{
                    paddingLeft: "0px",
                    paddingRight: "0",
                    width: "80%",
                  }}
                >
                  <small> are attending</small>
                </Col>
              </Row>
              <div className="mt-3 justify-content-between" style={{marginLeft:"20%"}}>
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
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-hand-thumbs-up-fill"
                      viewBox="0 0 16 16"
                      style={{marginRight:"5px"}}
                    >
                      <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
                    </svg>
                    Interested
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="h-100 pr-20">
            <img
              className="img-fluid rounded-top position-relative"
              src="https://social.webestica.com/assets/images/events/01.jpg"
              alt=""
            />
            <Badge className="bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
              genre?
            </Badge>
          </Card>
        </div>
        <div>
          <Card className="h-100 pr-20">
            <img
              className="img-fluid rounded-top position-relative"
              src="https://social.webestica.com/assets/images/events/01.jpg"
              alt=""
            />
            <Badge className="bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
              genre?
            </Badge>
          </Card>
        </div>
        <div>
          <Card className="h-100 pr-20">
            <img
              className="img-fluid rounded-top position-relative"
              src="https://social.webestica.com/assets/images/events/01.jpg"
              alt=""
            />
            <Badge className="bg-danger text-white mt-2 me-2 position-absolute top-0 end-0">
              genre?
            </Badge>
          </Card>
        </div>
      </Carousel>
    </>
  );
}
export { EventCarousel };
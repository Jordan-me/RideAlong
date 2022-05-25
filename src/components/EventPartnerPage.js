import react, {
  useEffect,
  useState,
  useContext,
  useParams,
  useLocation,
} from "react";
import { Button, Row } from "react-bootstrap";
// import { CurrentEventContext } from "../components/EventCard";
import { LoginContext } from "../App";
import "../cssFiles/EventPartner.css";

const EventPartnerPage = () => {
  const [chosenEvent, setChosenEvent] = useState(null);
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  // let location = useLocation();
  // let { event } = useParams();
  // const [event, setEvent] = useContext(CurrentEventContext);
  useEffect(() => {
    // console.log(location);
    // const val = event ? "partner : " : null;
    // console.log({
    //   val,
    // });
  }, []);

  return (
    <div
      className="h-100 gradient-custom-2"
      style={{ height: "100vh", marginTop: "6.2rem" }}
    >
      <div className="p-0 card" style={{ marginBottom: "0" }}>
        <img
          className="card-img-top"
          src="	https://falconreact.prium.me/static/media/13.8c60319e.jpg"
          alt=""
        />
        <div className="overflow-hidden card-body">
          <Row className="flex-center">
            <div className="d-flex">
              <div className="calendar">
                <span className="calendar-month">Dec</span>
                <span className="calendar-day">31</span>
              </div>
              <div className="fs--1 ms-2 flex-1">
                <h2 className="fs-0 text-capitalize">
                  FREE New Year's Eve Midnight Harbor Fireworks
                </h2>
                <p className="mb-0 text-capitalize">
                  by
                  <a className=" ms-1 " href="/events/event-detail#!">
                    Boston Harbor Now
                  </a>
                </p>
              </div>
            </div>
          </Row>
        </div>
      </div>
      <div className="card" style={{ height: "100vh" }}>
        <div className="d-flex justify-content-between align-items-center bg-light card-header">
          <h5 className="mb-0"> Partners</h5>
        </div>
        <div className="fs--1 card-body">
          <div className="row">
            <div className="h-100 col-md-6">
              <div className="d-flex">
                <img
                  className="img-fluid rounded-circle rounded-top position-relative"
                  src="https://social.webestica.com/assets/images/avatar/04.jpg"
                  alt=""
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
                <div className="flex-1 position-relative ps-3">
                  <h6 className="fs-0 mb-0">
                    <a href="/events/event-detail">
                      <span className="me-1">Name?</span>
                    </a>
                  </h6>
                  <p className="mb-0">From: The Liberty Warehouse, New Yourk</p>
                  <Button
                    size="md"
                    variant="outline-success"
                    className="d-block"
                    style={{ marginTop: "2px" }}
                    htmlFor="Interested1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-up-circle-fill"
                      viewBox="0 0 16 16"
                      style={{ paddingRight: "5px" }}
                    >
                      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                    </svg>
                    Pick me
                  </Button>

                  <div className="border-dashed-bottom my-3"></div>
                </div>
              </div>
            </div>

            <div className="h-100 col-md-6">
              <div className="d-flex">
                <img
                  className="img-fluid rounded-circle rounded-top position-relative"
                  src="https://social.webestica.com/assets/images/avatar/04.jpg"
                  alt=""
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
                <div className="flex-1 position-relative ps-3">
                  <h6 className="fs-0 mb-0">
                    <a href="/events/event-detail">
                      <span className="me-1">Name?</span>
                    </a>
                  </h6>
                  <p className="mb-0">From: The Liberty Warehouse, New Yourk</p>
                  <Button
                    size="md"
                    variant="outline-success"
                    className="d-block"
                    style={{ marginTop: "2px" }}
                    htmlFor="Interested1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-up-circle-fill"
                      viewBox="0 0 16 16"
                      style={{ paddingRight: "5px" }}
                    >
                      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                    </svg>
                    Pick me
                  </Button>

                  <div className="border-dashed-bottom my-3"></div>
                </div>
              </div>
            </div>

            <div className="h-100 col-md-6">
              <div className="d-flex">
                <img
                  className="img-fluid rounded-circle rounded-top position-relative"
                  src="https://social.webestica.com/assets/images/avatar/04.jpg"
                  alt=""
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
                <div className="flex-1 position-relative ps-3">
                  <h6 className="fs-0 mb-0">
                    <a href="/events/event-detail">
                      <span className="me-1">Name?</span>
                    </a>
                  </h6>
                  <p className="mb-0">From: The Liberty Warehouse, New Yourk</p>
                  <Button
                    size="md"
                    variant="outline-success"
                    className="d-block"
                    style={{ marginTop: "2px" }}
                    htmlFor="Interested1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-up-circle-fill"
                      viewBox="0 0 16 16"
                      style={{ paddingRight: "5px" }}
                    >
                      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                    </svg>
                    Pick me
                  </Button>

                  <div className="border-dashed-bottom my-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPartnerPage;

import react, { useEffect, useState, useContext } from "react";
import { Button, Row, Spinner } from "react-bootstrap";
import { LoginContext } from "../App";
import "../cssFiles/EventPartner.css";
import { getInstanceById } from "../data/data";
const EventPartnerPage = (props) => {
  const [chosenEventID, setChosenEventID] = useState(null);
  const [chosenEvent, setChosenEvent] = useState(null);
  const [dateMonth, setDateMonth] = useState(null);
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [myPartnersList, setMyPartnersList] = useState([]);

  const fetchAssignedUsersEvents = async (email, usersList) => {
    let myUsers = [];
    if (usersList) {
      for (let i = 0; i < usersList.length; i++) {
        const userId = usersList[i]["id"];
        const data = await getInstanceById(email, userId);
        myUsers.push(data);
      }
      return myUsers;
    }
  };
  const getAssignedUsers = async (event) => {
    let myPartners = event.instanceAttributes.assignedUsers;
    let email = event.createdBy.userId.email;
    let myPartnersData = await fetchAssignedUsersEvents(email, myPartners);
    setMyPartnersList(myPartnersData);
  };
  const getEvent = async (user, chosenEventID) => {
    let myEvent = await getInstanceById(user.userId.email, chosenEventID);
    setChosenEvent(myEvent);
  };
  useEffect(() => {
    if (loggedInState !== null) {
      setUser(loggedInState.user);
      // console.log(extra);
    }
  }, [loggedInState]);
  useEffect(() => {
    const pathname = window.location.pathname;
    setChosenEventID(pathname.split("/")[2]);
  }, []);

  useEffect(() => {
    if (user !== null) {
      setUser(user);
    }
  }, [user]);
  useEffect(() => {
    if (user !== null && chosenEventID !== null) {
      getEvent(user, chosenEventID);
    }
  }, [chosenEventID, user]);
  useEffect(() => {
    if (chosenEvent !== null) {
      let date = new Date(
        chosenEvent.instanceAttributes.futureDate.split("-")[0],
        chosenEvent.instanceAttributes.futureDate.split("-")[1],
        chosenEvent.instanceAttributes.futureDate.split("-")[2]
      );
      getAssignedUsers(chosenEvent);
      setDateMonth(date.toLocaleString("en-us", { month: "short" }));
    }
  }, [chosenEvent]);
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
                <span className="calendar-month">
                  {dateMonth ? dateMonth : null}
                </span>
                <span className="calendar-day">
                  {chosenEvent
                    ? chosenEvent.instanceAttributes.futureDate.split("-")[2]
                    : null}
                </span>
              </div>
              <div className="fs--1 ms-2 flex-1">
                <h2
                  className="fs-0 text-capitalize"
                  style={{ paddingTop: "30px" }}
                >
                  {chosenEvent
                    ? chosenEvent.instanceAttributes.title +
                      " - " +
                      chosenEvent.instanceAttributes.genre
                    : null}
                </h2>
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
            {myPartnersList.length > 0 ? (
              myPartnersList.map((instance) => {
                return (
                  <>
                    <div
                      key={instance.id}
                      style={{
                        backgroundColor: "#dbdada86",
                        borderRadius: "2%",
                        padding: "2%",
                      }}
                      className="h-100 col-md-6"
                    >
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
                            <span className="me-1">
                              {instance.instanceAttributes.firstName +
                                " " +
                                instance.instanceAttributes.lastName}
                            </span>
                          </h6>
                          <div className="border-dashed-bottom my-3">
                            <a href="/events/event-detail">
                              <span className="me-1">{instance.name}</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <Button
                        size="md"
                        variant="outline-success"
                        className="d-block"
                        style={{ marginTop: "2px", marginRight: "10px" }}
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
                    </div>
                  </>
                );
              })
            ) : (
              <Spinner
                style={{ width: "100px", height: "100px" }}
                animation="border"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPartnerPage;

import React, { useContext, useEffect, useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../App";
import image from "../assets/images/no-profile-pic.jpg";
import "../cssFiles/Events.css";

function SideCard() {
  const navigate = useNavigate();
  const [loggedInState, setLoggedInState] = useContext(LoginContext);
  const [user, setUser] = useState(null);
  const [extra, setExtra] = useState(null);

  useEffect(() => {
    if (loggedInState !== null) {
      setUser(loggedInState.user);
      setExtra(loggedInState.extra[0]);
    }
  }, [loggedInState]);
  return (
    <div>
      <div
        className="offcanvas-body px-2 px-lg-0 d-none d-xl-block"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="card overflow-hidden">
          <div className="card-body pt-0">
            <div className="text-center">
              {/* Avatar */}
              <div
                className="avatar avatar-lg mt n5 mb-3"
                style={{ paddingTop: "5px" }}
              >
                <img
                  className="avatar-img rounded border border-white border-3"
                  src={image}
                  alt="av"
                />
              </div>
              {/* info */}
              <h5 className="mb-0">
                {loggedInState
                  ? loggedInState.user
                    ? loggedInState.user.username
                    : null
                  : null}
              </h5>
              <strong>
                {loggedInState ? (
                  loggedInState.extra[0] ? (
                    <p>
                      {loggedInState.extra[0].instanceAttributes["dob"].split(
                        "-"
                      ).length === 3
                        ? Math.abs(
                            new Date().getFullYear() -
                              loggedInState.extra[0].instanceAttributes[
                                "dob"
                              ].split("-")[0]
                          )
                        : null}
                    </p>
                  ) : null
                ) : null}
              </strong>
              <p className="mt-3">Description</p>
            </div>
          </div>
          <div className="card-footer text-center py-2">
            <Button
              className="btn-sm "
              style={{
                position: "center",
                marginLeft: "20%",
                marginRight: "20%",
              }}
              onClick={() => navigate("/myProfile")}
            >
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export { SideCard };

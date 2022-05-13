import React from "react";
import { Button } from "react-bootstrap";
import image from "../assets/images/no-profile-pic.jpg";
import "../cssFiles/Events.css";

function SideCard() {
  return (
    <div>
      <div
        className="offcanvas-body d-block px-2 px-lg-0"
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
              <h5 className="mb-0">MY-NAME?</h5>
              <small> occupation/Age</small>
              <p className="mt-3">Description</p>
            </div>
          </div>
          <div card-footer text-center py-2>
            <Button class="btn btn-sm " style={{position:"center", marginLeft:"33%"}} href="/myProfile">View Profile </Button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
export { SideCard };

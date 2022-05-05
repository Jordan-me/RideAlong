import React from "react";
import { Container } from "react-bootstrap";
import Katia from "../assets/images/meetKatya.jpg";
import Mark from "../assets/images/meetMark.jpg";
import Tor from "../assets/images/meetTor.jpg";
import Noa from "../assets/images/meetNoa.jpg";
import Tzuf from "../assets/images/meetTzuf.jpg";
import Noy from "../assets/images/meetNoy.jpg";
import Omri from "../assets/images/meetOmri.jpg";
import Yarden from "../assets/images/meetYarden.JPG";
function About() {
  const myStyle = {
    backgroundColor: "#DAAD86",
    paddingBottom: "30px",
    padding: "10px",
    fontFamily: "Roboto",
  };
  return (
    <div id="about" className="p-6" style={myStyle}>
      <Container>
        <h2 className="text-center text-white">About Us</h2>
        <p className="lead text-center text-white mb-5">
          Following the Corona period we initiated the idea of finding partners
          <br />
          for travel, trips, events. Hoping to correct the <br />
          social distance created.{" "}
        </p>
        <div className="row g-4" style={{ paddingBottom: "30px" }}>
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Katia}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px"
                  width="150px"
                />
                <h3 className="card-title mb-3">Katia Stepovoy </h3>
                <p className="card-text ">Our Technical writer Team</p>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Mark}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px"
                  width="150px"
                />
                <h3 className="card-title mb-3">Mark Giliadov </h3>
                <p className="card-text">Our DBA Team</p>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Yarden}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px"
                  width="150px"
                />
                <h3 className="card-title mb-3">Yarden Dahan</h3>
                <p className="card-text">Our Team Lead Team</p>
                <a href="https://www.linkedin.com/in/yarden-dahan-0282b6201/">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Tor}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px"
                  width="150px"
                />
                <h3 className="card-title mb-3">Tor Hanan</h3>
                <p className="card-text">Our Scrum Master Team</p>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Second row */}
        <div className="row g-4">

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Noa}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px"
                  width="150px"
                />
                <h3 className="card-title mb-3">Noa Shmuel </h3>
                <p className="card-text">Our UX/UI Team</p>
                <a href="#">
                  <i className="bi bi-linkedin text-dark mx-1"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Tzuf}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px" width="150px"
                />
                <h3 className="card-title mb-3">Tzuf Stokelman  </h3>
                <p className="card-text">
                  Our DevOps Team 
                </p>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Omri}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px" width="150px"
                />
                <h3 className="card-title mb-3">Omri Meller</h3>
                <p className="card-text">
                  Our QA engineer Team
                </p>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
  
          <div className="col-md-6 col-lg-3 rounded-3">
            <div className="card bg-light rounded-3">
              <div className="card-body text-center">
                <img
                  src={Noy}
                  className="rounded-circle mb-3"
                  alt=""
                  height="150px" width="150px"
                />
                <h3 className="card-title mb-3">Noy Korleker </h3>
                <p className="card-text">
                  Our System Architect  Team
                </p>
                <a href="#"><i className="bi bi-linkedin text-dark mx-1"></i></a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
export { About };
 
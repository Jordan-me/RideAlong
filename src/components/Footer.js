import React from "react";
import { Container } from "react-bootstrap";
function Footer() {
  return (
    <div>
      <footer className="p-2 bg-dark text-white text-center position-relative">
        <Container>
          <p className="lead">Copyright &copy; 2022 RideAlong</p>

          <a href="#" className="position-absolute bottom-0 end-0 p-5">
            <i className="bi bi-arrow-up-circle h1"></i>
          </a>
        </Container>
      </footer>
    </div>
  );
}
export { Footer };

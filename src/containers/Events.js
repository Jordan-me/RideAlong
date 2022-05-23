import React, { useContext, useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { LoginContext } from "../App";
import { DiscoverEvents } from "../components/DiscoverEvents";
import { Footer } from "../components/Footer";
import { SideCard } from "../components/SideCard";
import "../cssFiles/Events.css";

const Events = (props) => {
  return (
    
      <div className="leftStyle" style={{ height: "100vh" }}>
        <Container fluid="md">
          <div className="row g-4 ">
            <div className="col-lg-3">
              <SideCard />
              <p className="small text-center mt-1 d-none d-xl-block">
                ©2022 RideAlong
              </p>
            </div>
            <Stack
              direction="vertical"
              gap={4}
              className="col-md-5 mx-auto rightStyle"
              style={{ height: "100%" }}
            >
              {/* CARD START */}
              <DiscoverEvents />
            </Stack>
          </div>
        </Container>
      </div>

  );
};
export { Events };

import React, { useContext, useEffect, useState } from 'react';
import { Container } from "react-bootstrap";
import { LoginContext } from '../App';
import { DiscoverEvents } from '../components/DiscoverEvents';
import { SideCard } from '../components/SideCard';
import "../cssFiles/Events.css";

const Events = (props) => {


  return (
    <div className='leftStyle'>
      <Container  fluid="md">
        <div className = 'row g-4 '>
          <div className='col-lg-3'>
              <SideCard/>
              <p className="small text-center mt-1 d-none d-xl-block">©2022 RideAlong</p>
          </div>
          <div className='col-md-8 col-lg-6 vstack gap-4 rightStyle'>
            {/* CARD START */}
            <DiscoverEvents />
              

          </div>
        </div>

      </Container>
    </div>

  )
}
export { Events };


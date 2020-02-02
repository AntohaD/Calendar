import React from 'react';
import TimeComponent from '../../Components/TimeComponent/TimeComponent';
import EventComponent from "../../Components/EventComponent/EventComponent";

import './MainPage.scss';

function MainPage() {
  return (
    <div className="main-container">
      <h3 className="main-container__title">Calendar</h3>
      <div className="main-container__table">
        <TimeComponent />
        <EventComponent />
        
      </div>
    </div>
  );
}

export default MainPage;
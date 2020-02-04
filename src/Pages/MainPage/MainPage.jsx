import React, { useState } from 'react';
import TimeComponent from '../../Components/TimeComponent/TimeComponent';
import EventComponent from "../../Components/EventComponent/EventComponent";
import TimeModal from '../../Components/TimeModal/TimeModal';

import './MainPage.scss';

function MainPage() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="main-container">
      <h3 className="main-container__title">Calendar</h3>
      <div className="main-container__table">
        <TimeComponent />
        <EventComponent />
      </div>
      <button
        className="main-container__button"
        onClick={() => setModalShow(true)}
      >
        Add
      </button>
      <TimeModal 
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default MainPage;
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import GeneralActions from "../../store/actions/general/actions";
import TimeComponent from '../../Components/TimeComponent/TimeComponent';
import EventComponent from "../../Components/EventComponent/EventComponent";
import TimeModal from '../../Components/TimeModal/TimeModal';

import './MainPage.scss';

function MainPage() {
  const dispatch = useDispatch();
  const state = useSelector(state => ({ general: state.general }));

  const [modalShow, setModalShow] = useState(state.general.isOpenModal);

  useEffect(() => {
    setModalShow(state.general.isOpenModal);
  },[state.general.isOpenModal])

  return (
    <div className="main-container">
      <h3 className="main-container__title">Calendar</h3>
      <div className="main-container__table">
        <TimeComponent />
        <EventComponent />
      </div>
      <button
        className="main-container__button"
        onClick={() => dispatch(GeneralActions.openModal())}
      >
        Add
      </button>
      <TimeModal 
        show={modalShow}
        onHide={() => dispatch(GeneralActions.closeModal())}
      />
    </div>
  );
}

export default MainPage;
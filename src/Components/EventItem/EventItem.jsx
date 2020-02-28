import React from 'react';
import { useSelector, useDispatch } from "react-redux";

import GeneralActions from "../../store/actions/general/actions";

import './EventItem.scss'

function EventItem(props) {
  const dispatch = useDispatch();
  const state = useSelector(state => ({ general: state.general }));

  const { startTime, endTime, text, index, id } = props;
  const height = endTime - startTime;

  function clickOnEvent() {
    dispatch(GeneralActions.selectEvent(id));
    dispatch(GeneralActions.openModal('editEvent'));
  }

  const style = () => {
    if (index === 0) {
      return 'one';
    } else if (index === 1) {
      return 'first';
    } else {
      return 'second';
    }
  }  

  return (
    <div
      className={`eventItem__${style()}`}
      style={{ height: `${height}px`, top: `${startTime}px` }}
      onClick={clickOnEvent}
    >
      <p className="eventItem__text">{text}</p>
    </div>
  );
}

export default EventItem;
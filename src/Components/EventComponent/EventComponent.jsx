import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import GeneralActions from "../../store/actions/general/actions";
import EventItem from '../EventItem/EventItem';

import './EventComponent.scss';

function EventComponent() {
  const dispatch = useDispatch();
  const state = useSelector(state => ({ general: state.general }));

  const [eventList, setEventList] = useState(state.general.eventList);

  useEffect(() => {
    dispatch(GeneralActions.getEventList());
    setEventList(state.general.eventList);
  }, [state.general.eventList]);

  return (
    <div className="eventComponent">
      {eventList.map(item => {
        return (
          <div key={item.id}>
            <EventItem
              id={item.id}
              startTime={item.startTime}
              endTime={item.endTime}
              text={item.text}
              index={item.index}
            />
          </div>
        );
      })}
    </div>
  );
}

export default EventComponent;
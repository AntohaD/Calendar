import React from 'react';
import EventItem from '../EventItem/EventItem';
import { EventData } from "../../Data/";

import './EventComponent.scss';

function EventComponent() {
  function sort(arr) {
    arr.sort((a, b) => (a.startTime > b.startTime ? 1 : -1));
  }

  sort(EventData.event);

  return (
    <div className="eventComponent">
      {EventData.event.map(item => {
        return (
          <div key={item.id}>
            <EventItem 
              startTime={item.startTime}
              endTime={item.endTime}
              text={item.text}
              index={item.index}
            />
          </div>
        )
      })}
    </div>
  );
}

export default EventComponent;
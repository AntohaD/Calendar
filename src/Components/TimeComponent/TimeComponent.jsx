import React from 'react';
import { TimeData } from '../../Data/';

import './TimeComponent.scss';

function TimeComponent() {
  return (
    <div className="time-component">
      {TimeData.time.map(time => {
        return (
          <div className="time-component__container" key={time.time}>
            <div className="time-component__big-time">{`${time.time}:00`}</div>
            {time.time !== 5 && (
              <div className="time-component__small-time">{`${time.time}:30`}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default TimeComponent;
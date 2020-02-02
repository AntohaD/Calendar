import React from 'react';

import './EventItem.scss'

function EventItem(props) {
  const { startTime, endTime, text, index } = props;
  const height = endTime - startTime;

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
    >
      <p className="eventItem__text">{text}</p>
    </div>
  );
}

export default EventItem;
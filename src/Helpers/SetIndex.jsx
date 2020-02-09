import React from 'react';

import DataService from '../services/DataService';

class SetIndex {
  static async setIndex() {
      const eventList = await DataService.getEvents();
      let index = 0;

      if (eventList.length === 0) {
        index = 0;
      } else {
        console.log(eventList);
      }
    return index;
  }
}

export default SetIndex;
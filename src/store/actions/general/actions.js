import types from './actionTypes.js';
import { EventData } from "../../../Data/";
import Convert from "../../../Helpers/Convert";
import DataService from '../../../services/DataService';
import SetIndex from '../../../Helpers/SetIndex';

function getEventList() {
  return async dispatch => {
    const eventList = await DataService.getEvents();

    dispatch({
      type: types.GET_EVENT_LIST,
      list: eventList,
    })
  }
}

function getInputValue(description, startHours, startMinutes, endHours, endMinutes) {
  return async dispatch => {
    const startHouseConvert = Convert.convertHours(startHours);
    const endHoursConvert = Convert.convertHours(endHours);

    const startTime = startHouseConvert + startMinutes;
    const endTime = endHoursConvert + endMinutes;

    dispatch({
      type: types.ADD_EVENT,
      addStartTime: startTime,
      addEndTime: endTime,
      addDescription: description
    });

    dispatch(addData(startTime, endTime, description));
  }
}

function addData(startTime, endTime, description) {
  return async dispatch => {
    if (endTime > 0) {
      let index = await SetIndex.setIndex();
      const idEvent = parseInt(`${new Date().getHours()}${new Date().getMinutes()}${new Date().getSeconds()}`);
      const eventList = await DataService.getEvents();

      if (eventList.length === 0) {
        index = 0;
        eventList.push({
          id: idEvent,
          startTime: startTime,
          endTime: endTime,
          text: description,
          index: index,
        });

        dispatch({
          type: types.ADD_EVENT_LIST,
          list: eventList,
        })
      } else {
        function sort(arr) {
          arr.sort((a, b) => (a.startTime > b.startTime ? 1 : -1));
        }
        sort(eventList);

        for (let i = 0; i < eventList.length; i++) {
          if(eventList[i].endTime > startTime && eventList[i].index === 0) {
            eventList[i].index = 1;
            index = 2;       
            
            eventList.push({
              id: idEvent,
              startTime: startTime,
              endTime: endTime,
              text: description,
              index: index
            });
          } else if (
              eventList[i].endTime > startTime 
              && (eventList[i].index === 1)
            ) {
              alert('You already have 2 events on this time');
          } else if (
              eventList[i].endTime > startTime &&
              eventList[i].index === 2
            ) {
              index = 1;

              eventList.push({
                id: idEvent,
                startTime: startTime,
                endTime: endTime,
                text: description,
                index: index
              });
            }
        }

        dispatch({
          type: types.ADD_EVENT_LIST,
          list: eventList
        });
      }
    }
  };
}


export default {
  getEventList,
  addData,
  getInputValue,
};
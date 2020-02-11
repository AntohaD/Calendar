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
        console.log(eventList);

        for (let i = 0; i < eventList.length; i++) {
          if((eventList[i].endTime > startTime && eventList[i].index === 0 && endTime > eventList[i].startTime) ||
            (eventList[i].endTime > startTime && eventList[i].index === 1)
            ) {
            eventList[i].index = 1;
            index = 2;
          } else if (
              eventList[i].endTime > startTime && eventList[i].index === 2
            ) {
              index = 1;
          } else if (i > 0) {
            if (eventList[i-1].endTime > startTime) {
              index = -1;
              alert('You already have 2 events on this time');
              break;
            }
          }
        }

        if(index !== -1) {
          eventList.push({
            id: idEvent,
            startTime: startTime,
            endTime: endTime,
            text: description,
            index: index
          });
  
          eventList.sort((a, b) => {
            return a.startTime - b.startTime;
          });
  
          dispatch({
            type: types.ADD_EVENT_LIST,
            list: eventList
          });
        }
      }
    }
  };
}

function selectEvent(id) {
  return dispatch => {
    dispatch({
      type: types.SELECT_EVENT,
      idEvent: id
    });
  }
}

function openModal() {
  return dispatch => {
    dispatch({
      type: types.OPEN_MODAL,
    });
  }
}

function closeModal() {
  return dispatch => {
    dispatch({
      type: types.CLOSE_MODAL,
    });
  }
}


export default {
  getEventList,
  addData,
  getInputValue,
  selectEvent,
  openModal,
  closeModal,
};
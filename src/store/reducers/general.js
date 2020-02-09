import ACTION_TYPES from '../actions/general/actionTypes';

const initialState = {
  eventList: [],
  event: {
    startTime: 0,
    endTime: 0,
    description: 0,
  },
};

const General = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_EVENT:
      const startTime = action.addStartTime;
      const endTime = action.addEndTime;
      const description = action.addDescription;
      return {
        ...state,
        event: {
          startTime: startTime,
          endTime: endTime,
          description: description,
        }
      };
    case ACTION_TYPES.GET_EVENT_LIST:
      return { ...state, eventList: action.list }
    case ACTION_TYPES.ADD_EVENT_LIST:
      return { ...state, eventList: action.list }
    default:
      return state;
  }
}

export default General;
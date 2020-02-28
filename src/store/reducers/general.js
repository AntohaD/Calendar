import ACTION_TYPES from '../actions/general/actionTypes';

const initialState = {
  eventList: [],
  event: {
    startTime: 0,
    endTime: 0,
    description: 0,
  },
  selectEvent: [],
  isOpenModal: false,
  typeModal: '',
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
    case ACTION_TYPES.SELECT_EVENT:
      return { ...state, selectEvent: action.idEvent }
    case ACTION_TYPES.OPEN_MODAL:
      return { ...state, isOpenModal: true, typeModal: action.typeWindow }
    case ACTION_TYPES.CLOSE_MODAL:
      return { ...state, isOpenModal: false, selectEvent: 0, typeModal: '' }
    default:
      return state;
  }
}

export default General;
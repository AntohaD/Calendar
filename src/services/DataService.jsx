import { EventData } from "../Data";

class DataService {
  static async getEvents() {
    return EventData.event;
  }

  static getEventById(id) {
    EventData.event.map(event => {
      let needEvent = [];
      if (event.id === id) {
        needEvent = event;
      }

      console.log(needEvent);

      return needEvent;
    })
  }
}

export default DataService;
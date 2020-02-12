import { EventData } from "../Data";

class DataService {
  static async getEvents() {
    return EventData.event;
  }

  static async getEventById(id) {
    let needEvent = [];

    EventData.event.map(event => {
      if (event.id === id) {
        needEvent = event;
      }
      return needEvent;
    });
    return needEvent;
  }
}

export default DataService;
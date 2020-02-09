import { EventData } from "../Data";

class DataService {
  static async getEvents() {
    return EventData.event;
  }
}

export default DataService;
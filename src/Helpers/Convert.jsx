import { TimeData } from "../Data";

class Convert {
  static convertHours(timeEvent) {
    let height = 0;

    TimeData.time.map(time => {
      return (timeEvent === time.time) && (height = time.height);
    })

    return height;
  }
}

export default Convert;
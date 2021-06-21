import { intervalToDuration } from "date-fns";

const parseSecondsToMinute = (seconds) => {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });
  const formattedTime = `${duration.minutes}:${duration.seconds}`;
  return formattedTime;
};

export default parseSecondsToMinute;

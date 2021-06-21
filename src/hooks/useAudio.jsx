import { useState, useEffect } from "react";
import parseSecondsToMinute from "../helpers/parseSecondsToMinute";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(parseSecondsToMinute(0));

  const setPlayingToggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  audio.addEventListener("timeupdate", function () {
    setCurrentTime(parseSecondsToMinute(this.currentTime));
  });

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));

    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return {
    playing,
    setPlayingToggle,
    currentTime,
  };
};

export default useAudio;

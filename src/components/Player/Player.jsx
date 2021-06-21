import React from "react";
import { Wrapper } from "./Player.styles";
import ProgressBar from "../ProgressBar/ProgressBar";

const Player = ({ currentTime, playing, duration, setPlayingToggle }) => (
  <Wrapper>
    <ProgressBar duration={duration} currentTime={currentTime} />
    <div className="control">
      <img src="/assets/images/back.png" alt="icon back" />
      <div onClick={setPlayingToggle}>
        {playing ? (
          <span className="icon-play">||</span>
        ) : (
          <img
            className="icon-play"
            src="/assets/images/play.png"
            alt="icon play"
          />
        )}
      </div>

      <img src="/assets/images/next.png" alt="icon next" />
    </div>
  </Wrapper>
);
export default Player;

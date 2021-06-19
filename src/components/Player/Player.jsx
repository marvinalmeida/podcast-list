import React from "react";
import { Wrapper } from "./Player.styled";
import ProgressBar from "../ProgressBar/ProgressBar";

const Player = () => {
  return (
    <Wrapper>
      <ProgressBar />
      <div className="control">
        <img src="./assets/images/back.png" alt="icon back" />
        <img
          className="icon-play"
          src="./assets/images/play.png"
          alt="icon play"
        />
        <img src="./assets/images/next.png" alt="icon next" />
      </div>
    </Wrapper>
  );
};
export default Player;

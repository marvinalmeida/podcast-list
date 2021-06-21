import React from "react";
import { Wrapper } from "./ProgressBar.styles";

const ProgressBar = ({ currentTime, duration }) => (
  <Wrapper>
    <span className="times">{currentTime}</span>
    <div className="container-lines">
      <div className="progress-lines total" />
      <div className="progress-lines current" />
    </div>
    <span className="times">{duration}</span>
  </Wrapper>
);

export default ProgressBar;

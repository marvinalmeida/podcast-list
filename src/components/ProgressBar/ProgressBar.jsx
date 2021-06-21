import React from "react";
import { Wrapper } from "./ProgressBar.styles";

const ProgressBar = () => (
  <Wrapper>
    <span className="times">02:56</span>
    <div className="container-lines">
      <div className="progress-lines total" />
      <div className="progress-lines current" />
    </div>
    <span className="times">10:15</span>
  </Wrapper>
);

export default ProgressBar;

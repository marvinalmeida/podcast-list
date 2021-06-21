import React from "react";
import ExpandText from "../ExpandText/ExpandText";

const PodcastDetail = ({ podcast }) => {
  console.log("podcast", podcast);

  return (
    <div>
      <div>
        <h3>{podcast.name}</h3>
      </div>
      <ExpandText
        description={podcast.description}
        participants={podcast.participants}
      />
    </div>
  );
};
export default PodcastDetail;

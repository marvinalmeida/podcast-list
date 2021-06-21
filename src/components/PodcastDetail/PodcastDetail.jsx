import React from "react";
import ExpandText from "../ExpandText/ExpandText";
import Player from "../../components/Player/Player";
import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "./close.svg";
import { ContainerPlayer, Wrapper, Content } from "./PodcastDetail.styles";
import useAudio from "../../hooks/useAudio";
import parseSecondsToMinute from "../../helpers/parseSecondsToMinute";

const PodcastDetail = ({ podcast }) => {
  const { setPlayingToggle, playing, currentTime } = useAudio(podcast.audio);

  return (
    <Wrapper>
      <Content>
        <div className="container-image">
          <img src={podcast.cover} alt={podcast.name} />
        </div>
        <div className="container-infos">
          <h3>{podcast.name}</h3>
          <ExpandText
            description={podcast.description}
            participants={podcast.participants}
          />
        </div>
      </Content>
      <ContainerPlayer>
        <Player
          playing={playing}
          duration={parseSecondsToMinute(podcast.duration || 0)}
          currentTime={currentTime}
          setPlayingToggle={setPlayingToggle}
        />
      </ContainerPlayer>
      <div className="container-close-icon">
        <Link to="/">
          <CloseIcon className="close-icon" />
        </Link>
      </div>
    </Wrapper>
  );
};

export default PodcastDetail;

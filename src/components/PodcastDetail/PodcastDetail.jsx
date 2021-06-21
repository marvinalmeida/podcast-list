import React from "react";
import ExpandText from "../ExpandText/ExpandText";
import Player from "../../components/Player/Player";
import { Link } from "react-router-dom";
import { ReactComponent as CloseIcon } from "./close.svg";
import { ContainerPlayer, Wrapper, Content } from "./PodcastDetail.styles";

const PodcastDetail = ({ podcast }) => (
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
      <Player />
    </ContainerPlayer>
    <div className="container-close-icon">
      <Link to="/">
        <CloseIcon className="close-icon" />
      </Link>
    </div>
  </Wrapper>
);

export default PodcastDetail;

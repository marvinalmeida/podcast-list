import React from "react";
import { Wrapper } from "./PodcastList.styles";
import { Link } from "react-router-dom";
import ExpandText from "../../components/ExpandText/ExpandText";

const PodcastList = ({ podcasts }) => {
  const isMobile = window.innerWidth < 768;

  return (
    <Wrapper>
      <div className="img-initial">
        <div className="title-epsodes">
          <span>{podcasts.name}</span>
          <small>{podcasts.episodes?.length} episódios</small>
        </div>
      </div>
      <div className="podcast-list">
        {!isMobile && (
          <>
            <h4 className="podcast-list__title">Sobre o Podcast</h4>
            <ExpandText description={podcasts.description} />
          </>
        )}
        <h4 className="podcast-list__title">lista de epsódios</h4>
        {podcasts.episodes?.map((episode) => (
          <div key={episode.id} className="podcast-list__episode">
            <div className="podcast-list__episode__image">
              <img src={episode.cover} alt={episode.name} />
            </div>

            <div className="podcast-list__episode__item">
              <Link
                className="podcast-list__episode__name"
                to={`/podcast/${episode.id}`}
              >
                {episode.name}
              </Link>
              <span className="podcast-list__episode__time">
                {episode.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default PodcastList;

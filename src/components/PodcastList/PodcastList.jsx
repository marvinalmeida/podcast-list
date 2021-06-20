import React from "react";
import { Wrapper } from "./PodcastList.styles";
import podcastMock from "../../mocks/podcast.json";

const PodcastList = () => {
  return (
    <Wrapper>
      <div className="img-initial">
        <div style={{ position: "relative" }}>
          <img src="./assets/images/image1.png" alt="" />
          <div className="title-epsodes">
            <span>podlogic</span>
            <small>6 epsodios</small>
          </div>
        </div>
      </div>

      <div>
        <div className="epsodes-description">
          <h4>lista de epsódios</h4>
        </div>
        <div className="epsodes-description">
          <div className="image-ep">
            <img src="./assets/images/image2.png" alt="" />
          </div>
          <div className="text-ep">
            <span>
              episódio 1 - cuidando das finanças pessoais com Sarah Gonçalves
            </span>
            <span className="time">45:00</span>
          </div>
        </div>
        <div className="epsodes-description">
          <div className="image-ep">
            <img src="./assets/images/image3.png" alt="" />
          </div>
          <div className="text-ep">
            <span>episódio 2 - produtividade no homeoffice</span>
            <span className="time">45:00</span>
          </div>
        </div>
        <div className="epsodes-description">
          <div className="image-ep">
            <img src="./assets/images/image4.png" alt="" />
          </div>
          <div className="text-ep">
            <span>episódio 3 - inteligência artificial nas nossas casas</span>
            <span className="time">45:00</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default PodcastList;

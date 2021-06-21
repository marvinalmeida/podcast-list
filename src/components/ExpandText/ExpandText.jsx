import { useState } from "react";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import { HiddenContent, Wrapper } from "./ExpandText.styles";

const ExpandText = ({ description, participants }) => {
  const [openDetail, setOpenDetail] = useState(false);

  return (
    <Wrapper>
      <HiddenContent openDetail={openDetail}>
        <p>{description}</p>
      </HiddenContent>
      {openDetail ? (
        <span
          className="action-button"
          onClick={() => setOpenDetail(!openDetail)}
        >
          Ler menos
          <ArrowIcon className="arrow-icon rotate" />
        </span>
      ) : (
        <div className="container-read-more">
          <div className="shadow"></div>
          <span
            className="action-button"
            onClick={() => setOpenDetail(!openDetail)}
          >
            Ler mais
            <ArrowIcon className="arrow-icon" />
          </span>
          {participants && (
            <span className="container-read-more__participants">
              Participantes:{" "}
              {participants.map((participant) => `${participant},`)}
            </span>
          )}
        </div>
      )}
    </Wrapper>
  );
};

export default ExpandText;

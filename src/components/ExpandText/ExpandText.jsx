import { useState } from "react";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  .action-button {
    color: ${(props) => props.theme.link};
    font-weight: bold;
    cursor: pointer;
    display: block;
    margin-top: 8px;
  }
  p {
    color: ${(props) => props.theme.title};
    font-style: italic;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
  }
  .container-read-more {
    background-color: ${(props) => props.theme.secondary};
    .shadow {
      width: 100%;
      height: 5px;
      background: linear-gradient(
        180deg,
        rgba(45, 86, 103, 0) 0%,
        ${(props) => props.theme.primary} 100%
      );
      opacity: 0.5;
    }
  }
`;

const HiddenContent = styled.div`
  height: ${(props) => (props.openDetail ? "100%" : "50px")};
  overflow: hidden;
`;

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
        </span>
      ) : (
        <div className="container-read-more">
          <div className="shadow"></div>
          <span
            className="action-button"
            onClick={() => setOpenDetail(!openDetail)}
          >
            Ler mais
            <ArrowIcon />
          </span>
          {participants && (
            <span>
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

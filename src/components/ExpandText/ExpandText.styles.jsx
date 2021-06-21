import styled from "styled-components";

export const Wrapper = styled.div`
  .action-button {
    color: ${(props) => props.theme.link};
    font-weight: bold;
    cursor: pointer;
    display: block;
    margin-top: 8px;
    display: flex;
    align-items: center;
    .arrow-icon {
      margin-left: 6px;
    }
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
    &__participants {
      display: block;
      font-size: 10px;
      font-weight: 600;
      color: white;
      opacity: 0.5;
      margin: 16px 0;
    }
  }
  .rotate {
    transform: rotate(180deg);
  }
`;

export const HiddenContent = styled.div`
  height: ${(props) => (props.openDetail ? "100%" : "70px")};
  overflow: hidden;
`;

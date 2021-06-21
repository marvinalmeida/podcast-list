import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  .control {
    display: flex;
    align-items: center;
    margin-top: 16px;

    @media (min-width: 768px) {
      margin-left: 24px;
      margin-top: 0;
    }

    img {
      transition: 0.4s;
    }

    img:hover {
      transform: scale(1.2);
      cursor: pointer;
    }

    .icon-play {
      margin: 0 16px;
      min-width: 60px;
      display: flex;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

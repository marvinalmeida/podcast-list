import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  .times {
    font-size: 12px;
    color: #8aa3ad;
  }

  .container-lines {
    width: 100%;
    margin: 0 10px;
    height: 10px;
    position: relative;
    .progress-lines {
      border-radius: 15px;
      position: absolute;
      left: 0;
      top: 0;
      &.total {
        background-color: #446c7c;
        width: 100%;
        height: 10px;
      }
      &.current {
        background-color: #2FA0D0;
        width: 20%;
        height: 10px;
        z-index: 2;
      }
    }
  }
`;

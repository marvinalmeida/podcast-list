import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #244857;
  display: flex;
  flex-direction: column;

  .img-initial {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title-epsodes {
        font-weight: bold;
        padding: 24px;
      font-style: italic;
      font-size: 34px;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
      position: absolute;
      color: white;
      bottom: 0;
      left: 0;
      span{
          display: block;
      }
      small{
          font-size: 16px;
      }
    }
  }

  .epsodes-description {
    max-width: 300px;
    margin: 0 auto;
    display: flex;
    h4 {
      text-transform: uppercase;
      font-size: 8px;
      color: #8aa3ad;
      letter-spacing: 0.46em;
    }
  }
  .text-ep {
    width: 243px;
    font-weight: bold;
    font-size: 14px;
    color: white;
    margin: 0 9px;
  }
  .time {
    font-size: 12px;
    color: #8aa3ad;
    display: flex;
    margin: 4px 0;
  }
`;

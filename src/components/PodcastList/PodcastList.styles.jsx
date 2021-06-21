import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 418px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  .img-initial {
    position: relative;
    display: flex;
    align-items: center;
    width: 315px;
    border-radius: 8px 0 0 8px;
    background-image: url("/assets/images/image1.png");
    background-position-y: 0;
    background-position-x: -70px;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 768px) {
      width: 100%;
      height: 331px;
      background-position-x: 0;
      border-radius: 0;
    }
    .title-epsodes {
      width: 100%;
      background-image: linear-gradient(
        rgba(0, 0, 0, 0.01),
        rgba(0, 0, 0, 0.5)
      );
      font-weight: bold;
      padding: 24px;
      font-style: italic;
      font-size: 34px;
      text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
      position: absolute;
      color: white;
      bottom: 0;
      left: 0;
      span {
        display: block;
      }
      small {
        font-size: 16px;
      }
    }
  }

  .podcast-list {
    background-color: #27657f;
    width: 453px;
    border-radius: 0 8px 8px 0;
    padding: 24px;
    overflow-y: scroll;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      overflow-y: visible;
    }
    &__title {
      text-transform: uppercase;
      font-size: 8px;
      color: #8aa3ad;
      letter-spacing: 0.46em;
    }
    &__episode {
      margin: 12px 0;
      display: flex;
      &__image {
        min-width: 70px;
        width: 70px;
        img {
          width: 100%;
        }
      }
      &__item {
        margin: 0 9px;
      }
      &__name {
        font-weight: bold;
        font-size: 14px;
        color: white;
        display: block;
        &:hover {
          opacity: 0.7;
        }
      }
      &__time {
        font-size: 12px;
        color: #8aa3ad;
        margin: 4px 0;
      }
    }
  }
`;

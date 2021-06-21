import styled from "styled-components";

export const Wrapper = styled.div`
  width: 768px;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;

  .container-close-icon {
    position: absolute;
    top: 20px;
    right: 20px;
    transition: 0.4s;
    @media (max-width: 768px) {
      background-color: ${(props) => props.theme.primary};
      border-radius: 50%;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        width: 40px;
      }
    }
  }

  .close-icon {
    &:hover {
      transform: scale(1.2);
    }
  }
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.secondary};
  display: flex;
  border-radius: 8px 8px 0 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .container-image {
    min-width: 300px;
    border-radius: 4px;

    @media (min-width: 768px) {
      padding: 28px 0 32px 32px;
    }

    img {
      width: 100%;
      border-radius: 4px;
    }
  }

  .container-infos {
    padding: 24px;
  }
`;

export const ContainerPlayer = styled.div`
  background-color: #15475b;
  border-radius: 0 0 8px 8px;
  padding: 24px;
`;

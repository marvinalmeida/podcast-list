import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Layout = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Layout;

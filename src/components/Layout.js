import styled from "styled-components";
import Header from "./Header";

const Content = styled.div`
  max-width: 630px;
  width: 100%;
  margin-top: 25px;
  margin: 0 auto;
`;

function Layout({ children }) {
  return (
    <>
      {" "}
      <Header></Header>
      <Content>{children}</Content>
    </>
  );
}
export default Layout;

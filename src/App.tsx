import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/common/Header";

function App() {
  const { pathname } = useLocation();
  const isGoBack = pathname !== "/";

  return (
    <Container>
      <Header isGoBack={isGoBack} />
      <Outlet />
    </Container>
  );
}

export default App;

export const Container = styled.div`
  width: 100%;
  height: 800px;
`;

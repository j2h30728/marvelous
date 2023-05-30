import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import { Container } from "./GlobalStyle";

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

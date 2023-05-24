import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";
import * as S from "./GlobalStyle";

function App() {
  const { pathname } = useLocation();
  const isGoBack = pathname !== "/";

  return (
    <S.Container>
      <Header isGoBack={isGoBack} />
      <Outlet />
    </S.Container>
  );
}

export default App;

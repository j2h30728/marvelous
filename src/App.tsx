import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header";

function App() {
  const { pathname } = useLocation();
  const isGoBack = pathname !== "/";
  return (
    <>
      <Header goBack={isGoBack} />
      <Outlet />
    </>
  );
}

export default App;

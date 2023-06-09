import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CharacterDetail from "./pages/CharacterDetail";
import Main from "./pages/Main";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "character/:id",
        element: <CharacterDetail />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;

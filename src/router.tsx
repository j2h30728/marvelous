import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Detail from "./pages/Detail";
import Main from "./pages/Main";

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
        element: <Detail />,
      },
    ],
  },
]);
export default router;

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Detail from "./pages/Detail";
import List from "./pages/List";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <List />,
      },
      {
        path: "character/:id",
        element: <Detail />,
      },
    ],
  },
]);
export default router;

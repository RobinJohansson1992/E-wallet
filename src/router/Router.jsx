import { createBrowserRouter } from "react-router-dom";

import AllCards from "../views/AllCards";
import AddCard from "../views/AddCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllCards />,
  },
  {
    path: "/AddCards",
    element: <AddCard />,
  },
]);

export default router;

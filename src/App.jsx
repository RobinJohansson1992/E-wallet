import "./App.css";
import { RouterProvider } from "react-router-dom";

import Router from "./router/Router";

function App() {
  return (
    <main>
      <div className="mainContainer">
        <RouterProvider router={Router} />
      </div>
    </main>
  );
}

export default App;

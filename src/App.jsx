import { useState } from "react";
import "./App.css";
import AllCards from "./views/AllCards";
import { RouterProvider } from "react-router-dom";

import Router from "./router/Router";

function App() {
  return (
    <main>
      <div className="mainContainer">
        {/* <AllCards /> */}
        <RouterProvider router={Router} />
      </div>
    </main>
  );
}

export default App;

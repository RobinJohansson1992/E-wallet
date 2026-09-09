import { useState } from "react";
import "./App.css";
import AllCards from "./views/AllCards";

function App() {
  return (
    <main>
      <div className="mainContainer">
        <AllCards />
      </div>
    </main>
  );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { firebase, FBContext } from "./firebase";
import App from "./ui/App";
import "./ui/style/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <FBContext.Provider value={firebase}>
        <App />
      </FBContext.Provider>
    </Router>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { FavoriteContextProvider } from "./store/favorites-context";

const Application = () => {
  return (
    <FavoriteContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoriteContextProvider>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));

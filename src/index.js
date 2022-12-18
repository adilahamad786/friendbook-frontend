import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {ShowContextProvider} from "./context/ShowContext";
import ThemeContextProvider from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ShowContextProvider>
        <App />
      </ShowContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

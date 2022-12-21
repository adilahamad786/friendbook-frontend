import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ShowContextProvider } from "./context/ShowContext";
import ThemeContextProvider from "./context/ThemeContext";
import { AuthContextProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ShowContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ShowContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);

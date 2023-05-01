import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./route";
import { BrowserRouter } from "react-router-dom";
import "./Resources/css/app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes></Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

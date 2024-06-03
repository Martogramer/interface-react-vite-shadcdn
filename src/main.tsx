import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import RoutesLayout from "./routes/RoutesLayout";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
        <RoutesLayout />
  </React.StrictMode>
);

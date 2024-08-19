import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import RoutesLayout from "./routes/RoutesLayout";
import ErrorBoundary from "@/components/errorPage/ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RoutesLayout />
    </ErrorBoundary>
  </React.StrictMode>
);

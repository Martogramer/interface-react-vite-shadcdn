import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import RoutesLayout from "./routes/RoutesLayout";
import ErrorBoundary from "@/components/errorPage/ErrorBoundary";
import { ThemeProvider } from "@/context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store/Store";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <ThemeProvider>
          <Provider store={store}>
            <RoutesLayout />
          </Provider>
        </ThemeProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
}

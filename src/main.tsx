import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import RoutesLayout from "./routes/RoutesLayout";
import { AuthContextProvider } from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./store/Store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <RoutesLayout />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);

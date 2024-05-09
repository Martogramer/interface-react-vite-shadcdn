import React from "react";
import ReactDOM from "react-dom/client";
import './global.css'
import RoutesLayout from "./routes/RoutesLayout";
import { AuthContextProvider } from './context/AuthContext';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <RoutesLayout />
    </AuthContextProvider>
  </React.StrictMode>
);

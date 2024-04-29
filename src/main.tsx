import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/createRouter";
import { Button } from "./components/ui/button";
import { Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <p>Rutaaaa main</p>
      
      <Button variant="outline"></Button>
      <Button variant="outline"> </Button>

      <div className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700">
        <RouterProvider router={router} />
      </div>
    </>
  </React.StrictMode>
);

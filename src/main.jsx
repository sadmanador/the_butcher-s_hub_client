import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { router } from "./Routes/router";
import "./index.css";
import AuthProviders from "./providers/AuthProviders";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProviders>
  </React.StrictMode>
);

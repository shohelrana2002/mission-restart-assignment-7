import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./app.css";
import { RouterProvider } from "react-router";
import { router } from "./route/Route.jsx";
import MainLayOut from "./Layout/MainLayOut.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <MainLayOut />
    </RouterProvider>
  </StrictMode>,
);

import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { StrictMode } from "react";
import { routers } from "./Routes/Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routers} fallbackElement={<div>Loading...</div>} />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import router from "./router.jsx";
import "./global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <RootLayout />
    </RouterProvider>
  </StrictMode>,
);

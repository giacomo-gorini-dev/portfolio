import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./RootLayout.jsx";
import "./global.css";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import router from "./router.jsx";
import queryClient from "./services/queryClient.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
        <RootLayout />
      </RouterProvider>
    </QueryClientProvider>
  </StrictMode>,
);

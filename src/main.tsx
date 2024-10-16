import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "@styles/tailwind.css";
import ErgastProvider from "@services/providers/ErgastProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

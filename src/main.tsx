import "./theme/tailwind.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./theme/index.css";
import { StrictMode } from "react";
import { worker } from "./mocks";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
worker.start();

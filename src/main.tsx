import "./theme/tailwind.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./theme/index.css";
import { StrictMode } from "react";
import { worker } from "./mocks/index.ts";

worker
  .start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: import.meta.env.VITE_MSW_URL,
    },
  })
  .then(() => {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  });

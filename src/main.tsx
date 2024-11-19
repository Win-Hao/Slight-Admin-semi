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
const isDevelopment = process.env.NODE_ENV === "development";
worker
  .start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: `${isDevelopment ? "/mockServiceWorker.js" : "/Slight-Admin-semi/mockServiceWorker.js"}`,
    },
  })
  .then();

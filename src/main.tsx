import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./globals.css";
import { MyRuntimeProvider } from "./MyRuntimeProvider";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MyRuntimeProvider>
      <App />
    </MyRuntimeProvider>
  </StrictMode>,
);

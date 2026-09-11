import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/styles/index.css";
import "virtual:uno.css";
import "./fonts.css";
import { PlaygroundApp } from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlaygroundApp />
  </StrictMode>,
);

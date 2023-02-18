import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const appContainer = document.getElementById("app-container");
if (!appContainer) throw new Error("app-container not found in html file");

const root = createRoot(appContainer);

root.render(<App />);

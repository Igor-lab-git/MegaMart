import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/globals.scss";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <App />
  </HashRouter>
);

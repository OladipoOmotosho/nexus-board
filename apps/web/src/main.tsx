// main.tsx
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "./ThemeProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);

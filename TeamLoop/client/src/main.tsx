// main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NuqsAdapter } from "nuqs/adapters/react";

import "./index.css";
import App from "./App.tsx";
import QueryProvider from "./context/query-provider.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx"; // <-- NEW
import { Toaster } from "./components/ui/toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <ThemeProvider>
        {" "}
        {/* <-- WRAPPING APP */}
        <NuqsAdapter>
          <App />
        </NuqsAdapter>
        <Toaster />
      </ThemeProvider>
    </QueryProvider>
  </StrictMode>
);

import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import HomePage from "./pages/HomePage";
import { BrowserRouter } from "react-router-dom";

function App({ children }) {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

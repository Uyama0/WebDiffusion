import { BrowserRouter } from "react-router";

import { Router } from "./router/Router";
import { ThemeProvider } from "./providers";

export const App = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { theme } from "./theme";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
      cacheTime: 1000 * 60 * 5,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(

  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <ReactQueryDevtools />
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </QueryClientProvider>
);

reportWebVitals();

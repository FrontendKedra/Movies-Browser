import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "./globalStyle";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./store";
import { theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </Provider>
);

reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { AUTH_CLIENT_ID, AUTH_DOMAIN } from "./consts/consts";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./themes/theme";

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Auth0Provider
            domain={AUTH_DOMAIN}
            clientId={AUTH_CLIENT_ID}
            redirectUri={window.location.origin}
          >
            <App />
            <ToastContainer
              theme={"dark"}
              pauseOnFocusLoss={false}
              pauseOnHover={false}
              position={"bottom-right"}
              autoClose={1500}
            />
          </Auth0Provider>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

import "@/styles/main.scss";
import "leaflet/dist/leaflet.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { GlobalProvider } from "./containers/global/index.tsx";
import { configureAppStore } from "./store/configureStore.ts";

export const store = configureAppStore();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalProvider />
      <App />
    </Provider>
  </StrictMode>
);

import "./index.css";
import App from "./App.jsx";
import React from "react";

import ReactDOM from "react-dom/client";
import StoreContextProvider from "./context/StoreContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
)

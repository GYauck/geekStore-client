import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductsProvider } from "./context/ProductsProvider";
//redux
import { Provider } from "react-redux";
import store from "./state/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>
);

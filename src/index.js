import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { ProductsProvider } from "./context/ProductsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>
);

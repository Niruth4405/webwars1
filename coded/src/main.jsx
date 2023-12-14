import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer />
  </React.StrictMode>
);

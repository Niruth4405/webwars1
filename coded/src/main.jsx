import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Navbar from "../src/components/Navbar.jsx";
import Footer from "../src/components/Footer.jsx";
import {BrowserRouter as Router} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Router>
  <Navbar />
    <App />
    <Footer />
  </Router>
  </React.StrictMode>
);

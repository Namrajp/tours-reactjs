import "./index.scss";
import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router-dom"; changed in v6 docs
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

import NavBar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/tours" element={<TourList />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

import "./index.scss";
import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";

import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <main>
        <Navbar />
        <TourList />
      </main>
    );
  }
}

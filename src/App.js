import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={6} country="in" category="General" />} />
          <Route path="/Business" element={<News key="business" pageSize={6} country="in" category="Business" />} />
          <Route path="/Entertainment" element={<News key="entertainment" pageSize={6} country="in" category="Entertainment" />} />
          <Route path="/Sports" element={<News key="sports" pageSize={6} country="in" category="Sports" />} />
          <Route path="/Health" element={<News key="health" pageSize={6} country="in" category="Health" />} />
          <Route path="/Science" element={<News key="science" pageSize={6} country="in" category="Science" />} />
          <Route path="/Technology" element={<News key="technology" pageSize={6} country="in" category="Technology" />} />
          <Route path="/General" element={<News key="general" pageSize={6} country="in" category="General" />} />
        </Routes>
      </Router>
    );
  }
}

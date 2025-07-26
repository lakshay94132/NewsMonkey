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
  pageSize = 12;
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize = {this.pageSize} country="us" category="General" />} />
          <Route path="/Business" element={<News key="business" pageSize = {this.pageSize} country="us" category="Business" />} />
          <Route path="/Entertainment" element={<News key="entertainment" pageSize = {this.pageSize} country="us" category="Entertainment" />} />
          <Route path="/Sports" element={<News key="sports" pageSize = {this.pageSize} country="us" category="Sports" />} />
          <Route path="/Health" element={<News key="health" pageSize = {this.pageSize} country="us" category="Health" />} />
          <Route path="/Science" element={<News key="science" pageSize = {this.pageSize} country="us" category="Science" />} />
          <Route path="/Technology" element={<News key="technology" pageSize = {this.pageSize} country="us" category="Technology" />} />
          <Route path="/General" element={<News key="general" pageSize = {this.pageSize} country="us" category="General" />} />
        </Routes>
      </Router>
    );
  }
}

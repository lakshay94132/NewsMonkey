import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  pageSize = 12;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({progress: progress});
  }
  render() {
    return (
      <Router>
        <Navbar />
        <LoadingBar
        color="#f11946"
        progress={this.state.progress}
      />

        <Routes>
          <Route path="/" element={<News setProgress = {this.setProgress} key="general" pageSize = {this.pageSize} country="us" category="General" />} />
          <Route path="/Business" element={<News setProgress = {this.setProgress} key="business" pageSize = {this.pageSize} country="us" category="Business" />} />
          <Route path="/Entertainment" element={<News setProgress = {this.setProgress} key="entertainment" pageSize = {this.pageSize} country="us" category="Entertainment" />} />
          <Route path="/Sports" element={<News setProgress = {this.setProgress} key="sports" pageSize = {this.pageSize} country="us" category="Sports" />} />
          <Route path="/Health" element={<News setProgress = {this.setProgress} key="health" pageSize = {this.pageSize} country="us" category="Health" />} />
          <Route path="/Science" element={<News setProgress = {this.setProgress} key="science" pageSize = {this.pageSize} country="us" category="Science" />} />
          <Route path="/Technology" element={<News setProgress = {this.setProgress} key="technology" pageSize = {this.pageSize} country="us" category="Technology" />} />
          <Route path="/General" element={<News setProgress = {this.setProgress} key="general" pageSize = {this.pageSize} country="us" category="General" />} />
        </Routes>
      </Router>
    );
  }
}

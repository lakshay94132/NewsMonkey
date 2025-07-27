import "./App.css";

import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = (props) => {
  const pageSize = 12;

  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <Navbar />
      <LoadingBar color="#f11946" progress={progress} />

      <Routes>
        <Route
          path="/"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="us"
              category="General"
            />
          }
        />
        <Route
          path="/Business"
          element={
            <News
              setProgress={setProgress}
              key="business"
              pageSize={pageSize}
              country="us"
              category="Business"
            />
          }
        />
        <Route
          path="/Entertainment"
          element={
            <News
              setProgress={setProgress}
              key="entertainment"
              pageSize={pageSize}
              country="us"
              category="Entertainment"
            />
          }
        />
        <Route
          path="/Sports"
          element={
            <News
              setProgress={setProgress}
              key="sports"
              pageSize={pageSize}
              country="us"
              category="Sports"
            />
          }
        />
        <Route
          path="/Health"
          element={
            <News
              setProgress={setProgress}
              key="health"
              pageSize={pageSize}
              country="us"
              category="Health"
            />
          }
        />
        <Route
          path="/Science"
          element={
            <News
              setProgress={setProgress}
              key="science"
              pageSize={pageSize}
              country="us"
              category="Science"
            />
          }
        />
        <Route
          path="/Technology"
          element={
            <News
              setProgress={setProgress}
              key="technology"
              pageSize={pageSize}
              country="us"
              category="Technology"
            />
          }
        />
        <Route
          path="/General"
          element={
            <News
              setProgress={setProgress}
              key="general"
              pageSize={pageSize}
              country="us"
              category="General"
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
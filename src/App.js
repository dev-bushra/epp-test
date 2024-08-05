import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Login from "./login";
import Dashboard from "./dashboard";
import Main from "./components/layout/Main";
import Salaries from "./salaries";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Main>
              <Dashboard />
            </Main>
          }
        />
        <Route
          path="/salaries"
          element={
            <Main>
              <Salaries />
            </Main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

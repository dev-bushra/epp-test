import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";

function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Login</Link>
        <Link to="/Dashboard">About</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

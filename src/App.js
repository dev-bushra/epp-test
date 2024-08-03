import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./login";
import Dashboard from "./dashboard";

import Main from "./components/layout/Main";
// import "antd/dist/antd.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";
import Salaries from "./salaries";
function App() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Login</Link>
        <Link to="/Dashboard">About</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Main> */}
          <Route path="/dashboard" element={<Main><Dashboard /></Main>} />
          <Route path="/salaries" element={<Main><Salaries /></Main>} />
        {/* </Main> */}
      </Routes>
    </div>
  );
}

export default App;

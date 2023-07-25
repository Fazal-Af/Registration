import React from "react";
import Nav from "./component/nav/Nav";
import { Routes, Route } from "react-router-dom";
import StatePractic from "./component/StatePractice";
import "./App.css";

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Routes>
        <Route path={"/"} element={<StatePractic />} />
      </Routes>
    </div>
  );
};

export default App;

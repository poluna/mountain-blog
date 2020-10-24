import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import MainPanel from "./components/MainPanel";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <MainPanel />
        <Cards />
        <Switch>
          <Route path="/" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;

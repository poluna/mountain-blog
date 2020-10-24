import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Posts from "./components/pages/Posts";
import Gallery from "./components/pages/Gallery";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

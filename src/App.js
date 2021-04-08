import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import About from "./Pages/About";
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import './index.css';

function App() {
  return (
    <Router basename="/React-Portfolio">
      <div>
          <Route exact path="/" component={About} />
          <Route exact path="/projects" component={Work} />
          <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
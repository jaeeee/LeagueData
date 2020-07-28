import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Diamond from "./pages/Diamond";


function App() {
  return(
    <Router>
      <div className="container">
        <p>Reee</p>
      </div>

      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/diamond" component={Diamond}/>
      </Switch>
    </Router>
  )
}

export default App;
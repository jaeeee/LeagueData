import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./pages/Home";
import Diamond from "./pages/Diamond";


function App() {
  return(
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/diamond">Diamond Ladder</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/diamond" component={Diamond}/>
      </Switch>
    </Router>
  )
}

export default App;
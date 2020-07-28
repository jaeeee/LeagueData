import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./pages/Home";
import Diamond from "./pages/Diamond";
import TopPlayers from "./pages/TopPlayers";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
  } from "mdbreact";


function App() {
  return(
    <Router>
      <div className="container">
      <MDBNavbar color="blue" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">LoL Data</strong>
        </MDBNavbarBrand>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/diamond">Diamond Ladder</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/ladder">Top Players</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          </MDBNavbar>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/diamond">Diamond Ladder</Link>
            </li>
            <li>
            <Link to="/ladder">Top Players</Link>
            </li>
          </ul>
        </nav> */}
      </div>

      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/diamond" component={Diamond}/>
      <Route path="/ladder" component={TopPlayers}/>
      </Switch>
    </Router>
  )
}

export default App;
import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import Home from "./pages/Home";
import Diamond from "./pages/Diamond";
import TopPlayers from "./pages/TopPlayers";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBFooter, MDBContainer, MDBRow, MDBCol
  } from "mdbreact";
import TopPlayersGraphs from './pages/TopPlayersGraphs';
import DiamondGraphs from './pages/DiamondGraphs';
// import Footer from './Footer';
import {FaChartBar} from "react-icons/fa";
import {GiLaurelsTrophy} from "react-icons/gi";
import {FaMedal} from "react-icons/fa";
import {FaGem} from "react-icons/fa";

function App() {
  return(
    <Router>
      <div className="container">
      <MDBNavbar color="blue" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">LeagueData</strong>
        </MDBNavbarBrand>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/"><FaChartBar></FaChartBar> Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/diamond"><FaGem></FaGem> Diamond I Ladder</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/ladder"><FaMedal></FaMedal> Top Players</MDBNavLink>
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

      {/* {Footer} */}

      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/diamond" component={Diamond}/>
      <Route path="/ladder" component={TopPlayers}/>
      <Route path="/topGraphs" component={TopPlayersGraphs}/>
      <Route path="/diamondGraphs" component={DiamondGraphs}/>
      </Switch>


    </Router>


    
  )
}

export default App;
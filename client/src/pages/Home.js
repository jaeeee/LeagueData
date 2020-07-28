import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn,
    MDBCard,
    MDBCardBody
  } from "mdbreact";
import {Link} from "react-router-dom";

import winRateBox from "../img/topPlayers/winrateBox.png";
import maxGamesPlayed from "../img/topPlayers/maxGamesPlayed.png";
import avgGamesPlayed from "../img/topPlayers/avgGamesPlayed.png";

function Home() {
    return(
        <MDBContainer>
       <MDBCard>
        <center>
            <br></br>
               <h1>Welcome to LeagueData!</h1>
               <p>Please refer to our navbar to navigate through the site! Below, we have also provided links to our data visualizations.</p>
                {/* <p></p> */}
                <ul>
                    <li>
                <Link to="/topGraphs"><h4>Graphical Data for Top Players</h4></Link>
                </li>
                <Link to="/diamondGraphs"><h4>Graphical Data for Diamond Players</h4></Link>
                </ul>
               {/* <h3><b>Analytics for Top Players (Master+)</b></h3>
                <h4>Win-rate distribution per rank</h4>
                <img src={winRateBox} />
                <h4>Average # games played</h4>
                <img src={avgGamesPlayed} />
                <h4>Highest # games played per Rank</h4>
                <img src={maxGamesPlayed} /> */}

               </center>
       </MDBCard>
       </MDBContainer>
    )
}

export default Home;
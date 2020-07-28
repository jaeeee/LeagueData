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

// import winRateBox from "../img/topPlayers/winrateBox.png";
// import maxGamesPlayed from "../img/topPlayers/maxGamesPlayed.png";
// import avgGamesPlayed from "../img/topPlayers/avgGamesPlayed.png";

import winrateBox from "../img/diamond/winrateBox.png";

function DiamondGraphs() {
    return(
        <MDBContainer>
       <MDBCard>
        <center>
               {/* <h1>Welcome home!</h1>
               <p>Please refer to our navbar to navigate through the site!</p> */}
<br></br>
               <h3><b>Analytics for Diamond Players</b></h3>
                <h4>Win-rate distribution</h4>
                <img src={winrateBox} />
                {/* <h4>Average # games played</h4>
                <img src={avgGamesPlayed} />
                <h4>Highest # games played per Rank</h4>
                <img src={maxGamesPlayed} /> */}

               </center>
       </MDBCard>
       </MDBContainer>
    )
}

export default DiamondGraphs;
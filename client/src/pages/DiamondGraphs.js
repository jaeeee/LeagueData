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
               <h3><b>Analytics for Diamond I Players</b></h3>
                <h4>Win-rate distribution</h4>
                <img src={winrateBox} />
                {/* <p> */}
                <ul>
               <li>count    2848.000000</li> 
               <li>mean       55.206812</li> 
               <li>std         5.455288</li> 
               <li>min        47.000000</li> 
               <li>25%        51.000000</li> 
               <li>50%        54.000000</li> 
               <li>75%        57.000000</li> 
              <li>max        88.000000</li>
                </ul>
                {/* </p> */}
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
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

import winRateBox from "../img/topPlayers/winrateBox.png";
import maxGamesPlayed from "../img/topPlayers/maxGamesPlayed.png";
import avgGamesPlayed from "../img/topPlayers/avgGamesPlayed.png";

function TopPlayersGraphs() {
    return(
        <MDBContainer>
       <MDBCard>
        <center>
               {/* <h1>Welcome home!</h1>
               <p>Please refer to our navbar to navigate through the site!</p> */}
<br></br>
               <h3><b>Analytics for Top Players (Master+)</b></h3>
                <h4>Win-rate distribution per rank</h4>
                <img src={winRateBox} />
                <p>The lowest win rate in the Challenger ladder is approximately 49%, while the highest is about 78%. The average winrate is 55%. There are several outliers are most likely professional players who play on eSports organizations, and are therefore more skillful than the average Challenger player.</p>
                <br></br>
                <h4>Average # games played</h4>
                <img src={avgGamesPlayed} />
                <p>From this bar graph, we can see that the higher ranked a player is, the more games he/she has played during the current season. For Challenger players, the average games played is about 500 games. For Grandmaster players, that number is 490 and for Master, it is 424. From this, we can draw the conclusion that in order to achieve a high rank, a player must invest lots of hours to practice and get better. The more games you play, the better you will become.</p>
<br></br>
                <h4>Highest # games played per Rank</h4>
                <img src={maxGamesPlayed} />

               </center>
       </MDBCard>
       </MDBContainer>
    )
}

export default TopPlayersGraphs;
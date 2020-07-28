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

function Home() {
    return(
        <MDBContainer>
       <MDBCard>
        <center>
               <h1>Welcome home!</h1>
               <p>Please refer to our navbar to navigate through the site!</p>
               </center>
       </MDBCard>
       </MDBContainer>
    )
}

export default Home;
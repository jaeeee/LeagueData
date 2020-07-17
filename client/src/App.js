import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";

// SERVICES
import productService from './services/playersService';

function App() {
  const [products, setproducts] = useState(null);

  useEffect(() => {
    if(!products) {
      getProducts();
    }
  })

  const getProducts = async () => {
    let res = await productService.getAll();
    console.log(res);
    setproducts(res);
  }

  const renderProduct = product => {
    return (
      <li key={product._id} className="list__item product">
        <h3 className="product__name">{product.summonerName}</h3>
        {/* <p className="product__description">{product.summonerId}</p> */}
        <p>{product.tier} {product.rank} {product.leaguePoints} LP</p>
        <p>{product.wins}W {product.losses}L</p>
        <p>Winrate: {product.Winrate}</p>
      </li>
    );
  };

  return (
    <MDBContainer>
    <div className="App" >
      <center>     
        <MDBCard>
        <h1>LoL Ladder Rankings</h1>
        <br>
        </br>
      <ul className="list">
        {(products && products.length > 0) ? (
          products.map(product => renderProduct(product))
        ) : (
          <p>No products found</p>
        )}
      </ul>
      </MDBCard>
      </center>
    </div>
    </MDBContainer>
  );
}

export default App;
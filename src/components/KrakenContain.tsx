import React from 'react'
import logo from './img/Kraken.png'
import hero from './img/edit.png'

const KrakenContain = () => {
  return (
    <div>
      <div className="navbar">
          <img className="img" src={logo} />
          <h5>Womens</h5>
          <h5>Mens</h5>
          <h5>New arrival</h5>
          <h5>SALE</h5>
          <h5>Shop</h5>

      </div>
      <div className="hero-photo">

          <img src={hero} className="shot" />
          <h1 id="kraken-h1">KRAKEN</h1>
          <h5 id="kraken-h5">Click here to join the Kraken community and stay up to date on all team information</h5>
          <button className="new-button">NEW COLLECTION</button>
      </div>
    </div>
  )
}

export default KrakenContain

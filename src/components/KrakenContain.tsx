import React from 'react'
import logo from './img/Kraken.png'
import hero from './img/edit.png'

const KrakenContain = () => {
  return (
    <div>
      <div className="navbar">
          <img className="img" src={logo} />
          <h4>Shop</h4>
      </div>
      <div className="hero-photo">

          <img src={hero} className="shot" />
          <h1 id="kraken-h1">KRAKEN</h1>
          <button className="new-button">NEW COLLECTION</button>
      </div>
    </div>
  )
}

export default KrakenContain

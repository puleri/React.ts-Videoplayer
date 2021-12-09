import React from 'react'
import logo from './img/Kraken.png'
import hero from './img/edit.png'
import first from './img/firstGoal.png'
import armsUp from './img/armsUp.png'
import cut from './img/cut.png'
import eberle from './img/eberle.png'
import cut2 from './img/cut2.png'
import anchor from './img/seattlekrakenlogo.png'


const KrakenContain = () => {
  return (
    <div>
      <div className="navbar">
          <img style={{ filter:'brightness(0)', marginLeft:"-60px", height: '30px', fontWeight: 'lighter'}} src={anchor} />
          <h5 style={{ fontWeight: 'lighter'}}>Womens</h5>
          <h5 style={{ textDecoration: "strikethrough", marginRight: "100px" }}>Mens</h5>
          <h5 style={{ fontWeight: 'lighter'}}>New arrivals</h5>
          <h5 style={{ fontWeight: 'lighter'}}>SALE</h5>
          <h5 style={{ fontWeight: 'lighter'}}>Iceplex</h5>
      </div>
      <div className="hero-photo">

          <img src={first} className="shot" />
          <h1 id="kraken-h1">KRAKEN</h1>
          <h5 id="kraken-h5">Click here to join the Kraken community and stay up to date on all team information</h5>
          <button className="new-button">NEW COLLECTION</button>

          <div className="photo-scroll">
            <ul>
            <img src={cut2} className="scroll-item" />
            <img src={eberle} className="scroll-item" />
              <img src={cut} className="scroll-item" />
              <img src={armsUp} className="scroll-item" />
              <img src={hero} className="scroll-item" />
              <img src={logo} className="img"/>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default KrakenContain

import React from 'react'
import logo from './img/Kraken.png'
import hero from './img/edit.png'

const KrakenContain = () => {
  return (
    <div>
      <div className="hero-photo">

          <img src={hero} className="shot" />

      </div>
      Go Kraken
      <img className="img" src={logo} />
    </div>
  )
}

export default KrakenContain

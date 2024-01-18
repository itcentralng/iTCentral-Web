import React from 'react'
import './Advert.css'
import Button from './Button'

function Advert() {
  return (
    <div className="advert">
      <div className="container">
        <div className="advert--writing">
          <h1>Are you a developer?</h1>
          <p>Join the iT Central family today</p>
        </div>
        <div className="advert--button">
          <Button style = 'button-white' text = 'Apply Now!' link="/apply"/>
        </div>            
      </div>

    </div>
)
}

export default Advert

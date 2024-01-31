import { data } from 'jquery'
import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-scroll'
import "../components/HeroSection.css"
import Button from './Button'

import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { TimelineLite, Power2 } from 'gsap'

function HeroSection() {

  let container = useRef(null)
  // let image = useRef(null)
  let imageReveal = CSSRulePlugin.getRule('.hero--image::after')
  let headingReveal = CSSRulePlugin.getRule('#hero--container h2::after')
  let image = CSSRulePlugin.getRule('.hero--image .image')

  let tl = new TimelineLite()


  useEffect(() => {
    tl.to(headingReveal, 1.4, {height: "0%", ease: Power2.easeInOut})
    .to(imageReveal, 1.4, {width: "0%", ease: Power2.easeInOut, delay: -1.6 })
    .from(image, 1.4, { scale: 1.6, ease: Power2.easeInOut})
    .to(container, 1, { visibility: "visible" })
  })

  return (
    <div id='hero--container'>
      <div ref={el => container = el} className="container">
        <div className="hero--writings">
          <h6>IT Central Limited</h6>
          <h2>Building the next generation of tech talents</h2>
          <p>Empowering the next generation of tech innovators in northern Nigeria by fostering startups and communities.</p>
          <Button text = "Explore" link = "Explore" style = 'button-blue' />
        </div>
        <div className="hero--image">
            <img ref={el => (image = el)} src="./Images/hero-3.svg" alt="" className='image' />
        </div>
      </div>
      
    </div>
  )
}

export default HeroSection

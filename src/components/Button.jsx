import React, { useEffect, useRef} from 'react'
import './Button.css'
import { Link } from 'react-scroll'

import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { TimelineLite, Power2 } from 'gsap'

function Button(props) {

  const buttonReveal = CSSRulePlugin.getRule('.button-blue a::after')

  let tl = new TimelineLite();

useEffect(() => {
  tl.to(buttonReveal, 1.4, {width: "0%", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", ease: Power2.easeInOut})
})

  return (
    <div className={props.style}>
      <Link to={props.link}
        smooth={true}
        offset={-50}
        duration={500} >{props.text}
      </Link>

    </div>
  )
}

export default Button

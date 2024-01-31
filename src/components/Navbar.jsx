import React, { useState, useEffect, useRef } from "react";
import "../components/Navbar.css";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Router } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { TimelineLite, Power2 } from 'gsap'


function Navbar() {

let imageReveal = CSSRulePlugin.getRule('.logo::after')
let linkReveal = CSSRulePlugin.getRule('.nav--item a::after')


let tl = new TimelineLite()


useEffect(() => {
  tl.to(imageReveal, 1.4, {width: "0%", ease: Power2.easeInOut});
  tl.to(linkReveal, 1.4, {width: "0%", ease: Power2.easeInOut, delay: -1.6 })
})


  const [hamburgerState, setHamburgerState] = useState(false);
  function handleClick(event) {
    event.stopPropagation();
    let lists = document.querySelector("ul");
    let computedStyle = window.getComputedStyle(lists);
    let height = computedStyle.getPropertyValue("height");
    let navItems = document.querySelector("#nav--items");
    setHamburgerState(!hamburgerState);
    if (height === "0px") {
      navItems.style.height = "70rem";
      lists.style.height = "70rem";
    } else {
      lists.style.height = "0px";
      navItems.style.height = "0";
    }
  }

  document.addEventListener("click", (event) => {
    let target = event.target;
    let navItems = document.querySelector("#nav--items");
    let lists = document.querySelector("ul");
    let navItemsHeight = window.getComputedStyle(navItems).height;

    if (!navItems.contains(target) && navItemsHeight > "0px") {
      navItems.style.height = "0";
      lists.style.height = "0px";
      setHamburgerState(!hamburgerState);
    } else if (
      target.matches("#nav--items") ||
      target.matches(".hamburger img")
    ) {
      setHamburgerState(!hamburgerState);
    } else {
      setHamburgerState(false);
    }
  });

  document.addEventListener("click", (event) => {
    let target = event.target;
    let links = document.querySelector("a");
    let navItems = document.querySelector("#nav--items");
    let lists = document.querySelector("ul");
    if (!target.matches(".nav--item")) {
      navItems.style.height = "0";
      lists.style.height = "0px";
    } else {
    }
  });
  const [isOpen, setOpen] = useState(false);

  const [boxShadow, setBoxShadow] = useState("blue");

  useEffect(() => {
    function handleScroll() {
      setBoxShadow(
        window.pageYOffset > 0 ? "0 0 1em 0 rgb(131 135 137 / 25%)" : "none"
      );
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar" style={{ boxShadow }}>
      <div className="container">
        <div className="logo">
          <h3>
            <Link to={"/"}>iT Central</Link>
          </h3>
        </div>
        <div className="hamburger" onClick={handleClick}>
          <img
            src={
              hamburgerState ? "/Images/cancel.svg" : "/Images/hamburger.svg"
            }
            alt=""
          />
        </div>

        <div id="nav--items">
          <ul>
            <li className="nav--item">
              <Link to="/" smooth={true} offset={-50} duration={500}>
              <span className="hover-line"></span>Home
              </Link>
            </li>
            <li className="nav--item">
              <Link to="/about"><span className="hover-line"></span>About Us</Link>
            </li>
            <li className="nav--item">
              <Link
                to={"/apply"}
                className="scroll--link"
                smooth={true}
                offset={-50}
                duration={500}
              >
                <span className="hover-line"></span>Join Us
              </Link>
            </li>
            <li className="nav--item">
              <Link
                to="/presentations"
                smooth={true}
                offset={-50}
                duration={500}
              >
                <span className="hover-line"></span>Presentations
              </Link>
            </li>
            <li className="nav--item">
              <Link to="/contactus" smooth={true} offset={-50} duration={500}>
              <span className="hover-line"></span>Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

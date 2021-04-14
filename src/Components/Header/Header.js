import React from 'react'
import gsap from 'gsap'

import './header.css'
import illustration from './img/comic.png'

import Navbar from './Navbar'
const Header = (//{offsetY}
  ) => {
  React.useEffect(()=>{ 
    // gsap.from(heroRef.current,{x:100,scale:0,duration:.3})

    gsap.from("nav",{opacity:0,duration:1,delay:1})
    gsap.from(".slide",{x:-500, opacity:0,stagger:.25,duration:.25,delay:.25})
    gsap.from(".illustration-img",{x:400,y:100,rotate:180,opacity:0,duration:.5,delay:.25})
},[])

  return (
    <div className='header' // style={{transform:`translateY(${offsetY * -.75}px)`}}
   >
      <Navbar />
      <div className='container-large'>
        <header // data-scroll-section
        >
        <div className='main-header'data-scroll data-scroll-speed="5">
          <h1 className="slide">
            Hey there, <br />
            my name is Kiran, <br />a freelance Front-End developer.
          </h1>
          <h3 className="slide">
            I craft high-quality, bespoke digital solutions for forward-thinking
            brands, like yours.
          </h3>
          <a className="header-button" href="/about">
          <button className="slide">learn more </button>
          </a>
        </div>
        <div className="main-illustration" data-scroll data-scroll-speed="1">
      <img //style={{transform:`translateY(${offsetY * .75}px)`}}
   src={illustration} className="illustration-img" alt="welcome"/>
        </div>
        </header> 
      </div>
    </div>
  )
}

export default Header

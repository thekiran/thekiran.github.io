import React, { useState } from 'react'; 
import './base.css';
import Header from './Components/Header/Header';
import Showcase from './Components/Showcase/Showcase';
// import like from './like.svg'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import About from './Components/About';
import Footer from './Components/footer';

function App() {
  // const [darkMode, setDarkMode] = useState(true)

  // const theme = () => {
  //   if(darkMode) {
  //     return 'app-dark'
  //   } else{
  //     return 'app-light'
  //   }
  // }
    // let offsetY = window.pageYOffset
    // const [offsetY, setOffsetY] = React.useState(0)
    // const handleScroll = () => setOffsetY(window.pageYOffset) 
  
    gsap.registerPlugin(ScrollTrigger) 
   
    React.useEffect(()=>{
        const scroll = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          multiplier:0.5
        });

        scroll.on("scroll", ScrollTrigger.update);
        ScrollTrigger.scrollerProxy("[data-scroll-container]", {
          scrollTop(value) {
            return arguments.length ? scroll.scrollTo(value, 0, 0) :    scroll.scroll.instance.scroll.y;
            }, // we don't have to define a scrollLeft because we're only scrolling vertically.
            getBoundingClientRect() {
              return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
            },  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
            pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
          });
 
          gsap.set(".about-col",{y:50,opacity:0})
          gsap.set(".contact-footer",{y:100,opacity:0})
          gsap.set(".main-footer",{y:-50,opacity:0})

          let tl = gsap.timeline({defaults:{ease:"none"}})
            .to(".about-col", {y:0,opacity:1, duration:1,stagger:.1}) 
 
            ScrollTrigger.create({
              trigger:".about-row",
              // start:"0%",
              // end:"+=300",
              scroller:"[data-scroll-container]",
              animation:tl,
              // scrub:true,
              // pin:true
            })

            let t2 = gsap.timeline({defaults:{ease:"none"}})
            .to(".contact-footer", {y:0,opacity:1, duration:1}) 
 
            ScrollTrigger.create({
              trigger:".contact-footer",
              // start:"0%",
              // end:"+=300",
              scroller:"[data-scroll-container]",
              animation:t2,
              // scrub:true,
              // pin:true
            })

            let t3 = gsap.timeline({defaults:{ease:"none"}})
            .to(".main-footer", {y:0,opacity:1, duration:1}) 
 
            ScrollTrigger.create({
              trigger:".main-footer",
              // start:"0%",
              // end:"+=300",
              scroller:"[data-scroll-container]",
              animation:t3,
              // scrub:true,
              // pin:true
            })

            // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
            ScrollTrigger.addEventListener("refresh", () => scroll.update());

            // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
            ScrollTrigger.refresh(); 

      // window.addEventListener("scroll",handleScroll) 
      //return () => window.removeEventListener("scroll",handleScroll)

        // // Get the id of the <path> element and the length of <path>
        // var triangle = document.getElementById("triangle");
        // var length = triangle.getTotalLength();
        
        // // The start position of the drawing
        // triangle.style.strokeDasharray = length;
        
        // // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
        // triangle.style.strokeDashoffset = length;
        
        // function myFunction() {
        // var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        
        //   var draw = length * scrollpercent;
          
        //   // Reverse the drawing (when scrolling upwards)
        //   triangle.style.strokeDashoffset = length - draw;
        // }

        //  // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
        //  window.addEventListener("scroll",myFunction)
        // //  window.addEventListener("scroll",handleScroll) 
        
        // return () => window.removeEventListener("scroll",myFunction)
  

      // window.addEventListener("scroll",(e)=>{
        //      myFunction()
        //      handleScroll()
        //    })
        //   //  window.addEventListener("scroll",handleScroll) 
          
        // return () => {
        //  return window.removeEventListener("scroll",(e)=>{
        //     myFunction()
        //     handleScroll()
        //   })
        // }
  

    },[])
  return (
    <div //className={`app ${theme()}`}
    >
      <Header //offsetY={offsetY}
       />
      <Showcase //offsetY={offsetY}
      />
      <About />
      <Footer />
      {/* <div className="space" style={{height:'100px',background:'#000'}}></div> */}
      {/* <img src={like}/> */}
    </div>
  );
}

export default App;

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';

export default function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        multiplier:0.8
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

        gsap.set(".first-col",{y:50,opacity:0})
        gsap.set(".sec-col",{y:50,opacity:0})
        gsap.set(".third-col",{y:50,opacity:0})
        gsap.set(".contact-footer",{y:100,opacity:0})
        gsap.set(".main-footer",{y:-50,opacity:0})

        let tl = gsap.timeline({defaults:{ease:"none"}})
          .to(".first-col", {y:0,opacity:1, duration:1,stagger:.1}) 

          ScrollTrigger.create({
            trigger:".about-row",
            // start:"0%",
            // end:"+=300",
            scroller:"[data-scroll-container]",
            animation:tl,
            // scrub:true,
            // pin:true
          })
          
        let tlb = gsap.timeline({defaults:{ease:"none"}})
        .to(".sec-col", {y:0,opacity:1, duration:1,stagger:.1}) 
        ScrollTrigger.create({
          trigger:".sec-col",
          // start:"0%",
          // end:"+=300",
          scroller:"[data-scroll-container]",
          animation:tlb,
          // scrub:true,
          // pin:true
        })

        let tlc = gsap.timeline({defaults:{ease:"none"}})
        .to(".third-col", {y:0,opacity:1, duration:1,stagger:.1}) 
        ScrollTrigger.create({
          trigger:".third-col",
          // start:"0%",
          // end:"+=300",
          scroller:"[data-scroll-container]",
          animation:tlc,
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

}
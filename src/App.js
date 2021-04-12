import React from 'react'; 
import './base.css';
// import Header from './Components/Header/Header';
// import Showcase from './Components/Showcase/Showcase';
// import like from './like.svg' 
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';
// import LocomotiveScroll from 'locomotive-scroll';
// import About from './Components/About';
// import Footer from './Components/footer';
import Homepage from './pages/Homepage';
import Ab from './pages/About';
import scrollAnimation from './scrollAnimation'

function App() { 
    gsap.registerPlugin(ScrollTrigger) 
   
    React.useEffect(()=>{ 
      scrollAnimation()
    },[])

  return (
    <BrowserRouter> 
    {/* <Homepage /> */}
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={Ab} />
    </BrowserRouter>
  );
}

export default App;

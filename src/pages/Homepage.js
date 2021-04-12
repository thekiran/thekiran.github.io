import React from 'react'; 
import Header from '../Components/Header/Header';
import Showcase from '../Components/Showcase/Showcase'; 
import About from '../Components/About';
import Footer from '../Components/footer';

function Homepage() {
 
  return (
    <React.Fragment //className={`app ${theme()}`}
    >
      <Header //offsetY={offsetY}
       />
      <Showcase //offsetY={offsetY}
      />
      <About />
      <Footer />
      {/* <div className="space" style={{height:'100px',background:'#000'}}></div> */}
      {/* <img src={like}/> */}
      
    </React.Fragment>
  );
}

export default Homepage;

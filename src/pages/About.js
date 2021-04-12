import React from 'react'
import About from '../Components/About'
import Footer from '../Components/footer'
import Header from '../Components/Header-about/Header'
import Navbar from '../Components/Header/Navbar'
import Info from '../Components/Info-about/Info'

function Ab() {
  return (
    <React.Fragment //className={`app ${theme()}`}
    >
      <Navbar //offsetY={offsetY}
      />
      <Header />
      <Info />
      <div className="space" style={{height:'200px'}}></div>
      <Footer />
      {/* <img src={like}/> */}
    </React.Fragment>
  )
}

export default Ab

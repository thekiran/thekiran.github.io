import './info.css'

const Info = () => {
  return (
    <div
      className='info' //data-scroll-container
    >
      <div
        className='container-large' //data-scroll-section
      >
        <div className='info-sec'>
          <div className='info-row'>
          <div className='info-col'>
          <h2 className='info-title'> 
          {/* //data-scroll data-scroll-speed='3'> */}
              Languages
            </h2>
            <p>
              I utilize the following programming languages to build the
              backbone of effeicient, future-proof websites.
            </p>
            <div className="info-lists">
            <ul className='info-list'>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SCSS </li>  
              </ul>
            <ul className='info-list'>
              <li>JavaScript</li>
              <li>Webpack</li>
              <li>Git</li>
            </ul>
            </div> 
          </div>  
          <div className='info-col'>
          <h2 className='info-title'> 
          {/* //data-scroll data-scroll-speed='3'> */}
              Platforms
            </h2>
            <p>I also use the following platforms and tools.</p>

            <div className="info-lists" style={{marginTop:'25px'}}>
            <ul className='info-list'>
              <li>Bootstrap</li>
              <li>Material UI</li>
              <li>React / Next </li>  
              </ul>
            <ul className='info-list'>
              <li>GSAP</li>
              <li>NodeJs</li>
              <li>API's</li>
            </ul>
            </div> 
          </div>  
            </div>
        </div>
      </div>
    </div>
  )
}

export default Info

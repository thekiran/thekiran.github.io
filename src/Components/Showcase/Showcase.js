import mainImg from './img/s.png'
// import subImg from './img/showcase-sub1.jpg'
import subImg from './img/showcase-sub2.jpg'

import './showcase.css'

const Showcase = () =>
  //{offsetY}
  {
    return (
      <div className='showcase'>
        <div
          className='container-large' // data-scroll-container
        >
          <div
            className='showcase-container' // data-scroll-section
          >
            <div
              className='showcase-content'
              data-scroll
              data-scroll-speed='-1' //style={{transform:`translateY(${offsetY * .0001}px)`}}
            >
              <h2>I build pixel-perfect web solutions for all devices.</h2>
              <a href="/about">view my work</a>
            </div>
            <div
              className='showcase-main' // data-scroll-section
            >
              <div className='mainImg' data-scroll data-scroll-speed='2'>
                <a href='https://thekiran.github.io/trainer/' without rel="noreferrer"  target='_blank'>
                
                  <img
                    src={mainImg}
                    loading='lazy' //style={{transform:`translateY(${offsetY * -.4}px)`}}
                    alt=''
                  /> 
                </a>
              </div>
              <div
                className='subImg'
                data-scroll
                data-scroll-speed='9'
                // data-scroll-target=".showcase"
              >
                <img
                  src={subImg}
                  loading='lazy' // data-scroll data-scroll-speed="3"//style={{transform:`translateY(${offsetY * -.2}px)`}}
                  alt=''
                />{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

export default Showcase

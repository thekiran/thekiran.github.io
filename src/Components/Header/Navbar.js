import {Link} from 'react-router-dom'

import './header.css'

const Navbar = () => {
    return (  <div className="container-large nav-wrapper"> 
    <nav>
      <div className='logo hover-this'> 
        <h1><a href="/">Kir.</a></h1> 
      </div>
      <ul className='nav-links'>
        <li>
          <a href="/about">about</a>
        </li>
        {/* <li>
          <button>darkmode</button>
        </li> */}
        <div className="curso"></div>
      </ul>
    </nav></div> );
}
 
export default Navbar;
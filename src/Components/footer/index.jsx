import './footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="container-large">
                <div className="contact-footer">
                    <h3>Let's build something great together.
                    </h3>
                    <p>
                        If you'd like to start a new project, need help with an existing project or have any other enquiry, please get in touch.
                    </p>
                    <h5>
                        kirankumargs02@gmail.com
                    </h5>
                </div>
                <div className="main-footer">
                    <div className='logo'> 
                        <h1>Kir.</h1> 
                    </div>
                    <ul className='footer-links'>
                        <li>
                        <button>github</button>
                        </li>
                        <li>
                        <button>linkedin</button>
                        </li>
                    </ul>
                    </div>
            </div> 
            <span>Inspired by @nurpais</span>
        </div>);
}

export default Footer;
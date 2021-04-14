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
                    <a href="mailto:kirankumargs02@gmail.com"  target="_blank"> 
                        kirankumargs02@gmail.com
                    </a>
                </div>
                <div className="main-footer">
                    <div className='logo'> 
                        <a href="/">Kir.</a> 
                    </div>
                    <ul className='footer-links'>
                        <li>
                        <a href="">github</a>
                        </li>
                        <li>
                        <a href="">linkedin</a>
                        </li>
                    </ul>
                    </div>
            </div> 
            <span>Inspired by @nurpais</span>
        </div>);
}

export default Footer;
import React from 'react';
// import gsap from 'gsap'

import './about.css'

const About = () => {
    React.useEffect(()=>{
        // gsap.from(".about-col",{y:60,opacity:0,duration:1,stagger:.5,scrollTrigger:".about"})
    },[])
    return ( <div className="about" //data-scroll-container
    >
        <div className="container-large" //data-scroll-section
        >
            <h2 id="about-title" data-scroll data-scroll-speed="3">I can take responsibility for one part <br/>
            of your project, or deliver the whole solution.
            
            </h2>
                <div className="about-row" data-scroll data-scroll-speed="3" >
                    <div className="about-col first-col">
                        <h3>Web Design and Development</h3>
                        <p>
                            I build bespoke, scalable web applications using modern web technologies and tools. I ensure all websites adhere to insustry standards and deliver the best possible user experience.
                        </p>
                    </div> 
                    <div className="about-col first-col"  >
                        <h3>Responsive Design</h3>
                        <p>
                        Mobile phones now account for more than half of all internet traffic which is why I ensure that all websites I develop are responsive; this means that the website can adjust to any screen size or device.
                        </p>
                    </div> 
            </div>
            <div className="about-row" data-scroll data-scroll-speed="3">
                 <div className="about-col sec-col" >
                 <h3> E-Commerce
                        </h3>
                        <p> 
I utilize powerfull platforms and tools to build scalable, purpose-driven e-Commerce solutions. Your bespoke online store will provide a seamless user experience, that turns leads in to customers.
                        </p>
                    </div> 
                 <div className="about-col sec-col" >
                        <h3> Content Management</h3>
                        <p> It's important that you're able to self-manage your website from any place at any time, which is why I develop content management systems that give you control over your website data.
                        </p>
                    </div> 
                    
                    </div>
            <div className="about-row" data-scroll data-scroll-speed="3"> 
             <div className="about-col third-col" >
                        <h3>Website Management </h3>
                        <p> I provide various website management options which include - updating content, backing-up important data, monitoring and security/software updates.
                        </p>
                    </div> 
                 <div className="about-col third-col" >
                        <h3>SEO </h3>
                        <p> Standard on-page SEO practices are included with every website I develop. This allows your website to rank higher in search engine results and potentially drive more traffic to your site.
                      
                        </p>
                    </div> </div>
        </div> 
    </div> );
}
 
export default About;
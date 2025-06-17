import React from "react"
import { Container} from "reactstrap";
import socialLinks from '../constants/socialLinks'
import Fade from 'react-reveal/Fade';

const Hero = ({toggleDarkMode, darkMode}) => {

    return (
        <div className="hero section-odd">
            <Container>
                <div className="toggle-container">
                  <span className="darkmode-toggle">
                    <label class="switch">
                      <input checked={darkMode}
                        onChange={toggleDarkMode}
                        type="checkbox"
                        className="checkbox"
                        id="checkbox" 
                      />
                      <span class="slider round"></span>
                    </label>
                    <p>Dark Mode</p>
                  </span>
                </div>
                <div className="col-12 col-md-12 hero-text">
                    <Fade top>
                        <div className="underline"></div>
                        <h1>Omanshu Mahawar</h1>
                        <h5>Senior Software Engineer at Visa Inc</h5>
                        {/* <div>{`I am a Senior Software Engineer with expertise in designing and developing scalable solutions in the financial technology space. Currently, at Visa Inc., I lead a team of 12 developers, driving the development of critical features for Authorize.NET, including Accepting Payments, Payment Links, and Transaction Security Settings. My leadership in modernizing the platform with a React UI and ASP.NET backend has improved both performance and user experience.

In addition to technical leadership, I have extensive experience in full-stack development using technologies like React, Node.js, Vert.x, and SpringBoot, with a strong emphasis on building secure, scalable APIs. I am also familiar with DevOps, deploying applications on cloud platforms like AWS and Azure. My work has spanned both frontend and backend, ensuring end-to-end delivery of high-quality, secure applications.

I also have leadership experience beyond my engineering role, having organized large-scale events such as HackVerse, a 24-hour nationwide hackathon, and led recruitment and development efforts as the Website Head at the Institution of Engineers, NITK.`}</div> */}
                        <a href="#contact">
                            <button className="btn">
                                Contact Me
                            </button>
                        </a>
                        
                        <ul className="social-links">
                            { socialLinks.map(link => {
                                    return (
                                        <li key={link.id}>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer" className="social-link">
                                                {link.icon}
                                            </a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </Fade>
                </div>
            </Container>
        </div>
    )
}

export default Hero;
import React from "react"
import { Container} from "reactstrap";
import socialLinks from '../constants/socialLinks'
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

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
                        <h5>3rd Year CSE Under Graduate</h5>
                        <Link to="/contact">
                            <button className="btn">
                                Contact Me
                            </button>
                        </Link>
                        
                        <ul className="social-links">
                            { socialLinks.map(link => {
                                    return (
                                        <li key={link.id}>
                                            <a href={link.url} className="social-link">
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
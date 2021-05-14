import React from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import projects from "../constants/projects"
import Fade from 'react-reveal/Fade';

class Projects extends React.Component {


    render() {

        return (
            <div id="projects" className="section-even projects">
                <div className="section-title">
                    <h2>Projects</h2>
                    <div className="underline"></div>
                </div>
                <div className="section-center projects-center">
                    {
                        projects.map((item, index) => {
                            if(index<= this.props.limit) {
                                return(
                                    <div className="project">
                                        <img className="project-img" src={item.imgLink} alt="img" />

                                        <Fade top>
                                            <div className="project-info">
                                                <span className="project-number">0{index + 1}.</span>
                                                <h3>{item.title}</h3>
                                                <p className="project-desc">
                                                    {item.description}
                                                </p>
                                                <div className="project-stack">
                                                    {item.stack.map(tool => {
                                                        return <span className="stack-item">{tool}</span>
                                                    })}
                                                </div>
                                                <div className="project-links">
                                                <a href={item.githubLink}>
                                                    <FaGithubSquare className="project-icon" />
                                                </a>
                                                <a href={item.Link}>
                                                    <FaShareSquare className="project-icon" />
                                                </a>
                                                </div>
                                            </div>
                                        </Fade>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div></div>
                                )
                            }
                        })
                    }
                </div>
            </div>
            )
        }
}

export default Projects;
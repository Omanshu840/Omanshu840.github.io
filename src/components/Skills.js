import React from "react"
import Fade from 'react-reveal/Fade';
import skills from "../constants/skills";

class Skills extends React.Component {

    render() {

        const data = skills;

        return (
            <div id="skills" className="section-odd skills">
                <Fade top>
                    <div className="section-title">
                        <h2>Skills</h2>
                        <div className="underline"></div>
                    </div>
                </Fade>
                <div className="container">
                    <Fade top>
                        <div className="row">
                            {data.map(item => {
                                return (
                                    <div className="col-12 col-md-5 skill-subset">
                                        <h3>{item.name}</h3>
                                        <div className="project-stack">
                                            {item.skill.map(item => {
                                                return (
                                                    <span className="stack-item">{item}</span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </Fade>
                </div>
            </div>        
    )}
}

export default Skills;
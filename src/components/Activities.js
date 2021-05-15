import React from "react"
import { Container } from "reactstrap"
import activities from '../constants/activities'
import Fade from 'react-reveal/Fade';

class Activities extends React.Component {

    render() {
        return (
            <div id="activities" className="section-odd activities">
                <Fade top>
                    <div className="section-title">
                        <h2>Activities</h2>
                        <div className="underline"></div>
                    </div>
                </Fade>
                <div className="Timeline">
                    <Container>
                        {activities.slice(0).reverse().map((item, idx) => {
                            const dir = idx % 2 === 0 ? "timeline-item-left" : "timeline-item-right";
                            return (
                                    <div className={dir}>
                                        <div className="timeline-img">
                                            
                                        </div>
                                        <Fade top>
                                            <div className="timeline-content">
                                                <div className="date">{item.date}</div>
                                                <a href={item.companyLink} target="_blank" rel="noopener noreferrer"><img src={item.imgLink} className="act-img" alt={item.id}/></a>
                                                <h3>{item.title}</h3>
                                                <a href={item.companyLink} target="_blank" rel="noopener noreferrer"><h4>{item.company}</h4></a>
                                            </div>
                                        </Fade>
                                    </div>
                               
                            )
                        })}
                    </Container>
                </div>
            </div>
    )}
}

export default Activities;
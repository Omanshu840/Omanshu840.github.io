import React from "react"
import Fade from 'react-reveal/Fade';

const data = [
    {
      id: 1,
      institute: "National Institute of Technology Karnataka, Surathkal",
      degree: "B.Tech Computer Science Engineering",
      grade: "CGPA 8.87/10.0",
      time: "July 2018 – May 2022",
      tab: "B.Tech"
    },
    {
        id: 2,
        institute: "Jankidevi Public School",
        degree: "CBSE 12th Boards",
        grade: "92.8%",
        time: "March 2018",
        tab: "12th"
    },
    {
        id: 3,
        institute: "Jankidevi Public School",
        degree: "CBSE 10th Boards",
        grade: "CGPA 9.2/10.0",
        time: "March 2016",
        tab: "10th"
    },
    
  ]

const Education = () => {

    const [value, setValue] = React.useState(0)
    const { institute, degree, grade, time} = data[value]

    return (
        <div id="education" className="section-even education">
            <div className="section-title">
                <Fade top>
                    <h2>Education</h2>
                    <div className="underline"></div>
                </Fade>
            </div>
            <div className="edu-container">
                <div className="btn-container">
                    <Fade top>
                        {data.map((item, index) => {
                            return (
                            <button 
                                key={item.id} 
                                className={`edu-btn ${index === value && "active-btn"}`}
                                onClick={() => setValue(index)}
                            >
                                {item.tab} 
                            </button>
                            )
                        })}
                    </Fade>
                </div>
                <Fade top>
                    <div className="edu-info">
                            <h3>{degree}</h3>
                            <h4>{institute}</h4>
                            <p className="edu-date">{time}</p>
                            {/* <div className="edu-desc">
                                <FaAngleDoubleRight className="edu-icon"></FaAngleDoubleRight>
                                <p>{grade}</p>
                            </div> */}
                    </div>
                </Fade>
            </div>
            
        </div>
    )
}

export default Education;
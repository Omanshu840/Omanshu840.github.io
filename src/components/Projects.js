import React, { useEffect, useState } from "react"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import project_list from "../constants/projects"
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';
import Row from "reactstrap/lib/Row";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";
import Dropdown from "reactstrap/lib/Dropdown";
import { AiOutlineCloseCircle } from "react-icons/ai";


const Projects = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    const [filters, setFilters] = useState([])
    const [projects, setProjects] = useState(project_list)

    const [techs, setTechs] = useState([]) 

    useEffect(() => {
        const t_techs = []

        for(var i in project_list) {
            for(var j in project_list[i].stack) {
                if(!(t_techs.includes(project_list[i].stack[j])))
                {
                    t_techs.push(project_list[i].stack[j])
                }
            }
        }

        setTechs(t_techs)
    }, [])

    const UpdateProjects = () => {
      
        var t_projects = []

        if(filters.length===0) {
            t_projects = project_list;
        }
        else {
            for(var i in project_list) {
                var f = 0
                for(var j in filters){
                    if((project_list[i].stack).includes(filters[j])) {
                        f = 1
                        break
                    }
                }

                if(f) {
                    t_projects.push(project_list[i])
                }
            }
        }

        setProjects(t_projects)
    }

    const AddFilter = (filter) => {
        if(!filters.includes(filter)) {
            const t_filter = filters
            t_filter.push(filter)
            setFilters(t_filter)
            UpdateProjects()
        }
    }

    const RemoveFilter = (filter) => {
        const t_filter = filters;
        const index = t_filter.indexOf(filter);
        if (index > -1) {
            t_filter.splice(index, 1);
        }
        setFilters(t_filter)
        UpdateProjects()
    }

    return (
        <div id="projects" className="section-even projects">
            <div className="section-title">
                <h2>Projects</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center projects-center">
                <Row>
                    <div className="col-12 col-md-10">
                        <div className="filters project-stack">
                            {filters.map((item , index) => {
                                return (
                                    <span key={index} className="stack-item">{item} 
                                        <AiOutlineCloseCircle 
                                            className="ml-2 close-filter-btn"
                                            onClick={() => RemoveFilter(item)}
                                        />
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="col-12 col-md-2" style={{textAlign: "right"}}>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                Tech
                            </DropdownToggle>
                            <DropdownMenu right>
                                {techs.map((item, index) => {
                                    return (
                                        <DropdownItem 
                                            key={index}
                                            onClick={() => AddFilter(item)}
                                        >
                                            {item}
                                        </DropdownItem>
                                    )
                                })}
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </Row>
                <Row className="justify-content-center">
                    {projects.map((item, index) => {
                        return (
                            <div className="col-12 col-sm-6 col-lg-4 d-flex">
                                <Card className="my-3">
                                    <CardImg top width="100%" src={item.imgLink} alt="Card image cap" />
                                    <CardBody className="project-info">
                                        <CardTitle tag="h5" className="mt-3">{item.title}</CardTitle>
                                        <CardText className="project-desc">{item.description}</CardText>
                                        <div className="project-stack">
                                            {item.stack.map(tool => {
                                                return <span className="stack-item" onClick={() => {AddFilter(tool)}}>{tool}</span>
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
                                    </CardBody>
                                </Card>
                            </div>
                        )
                    })}
                </Row>
            </div>
        </div>
        )
}



export default Projects;
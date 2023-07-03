"use client";

import { Container, Col, Row, Tab, Nav } from "react-bootstrap";
import { Skill } from "./Skill";
import ProgressBar from 'react-bootstrap/ProgressBar';

import { ProjectCard } from "./ProjectCarousel";
import magneto from "../assets/img/magneto.jpeg";
import bemo from "../assets/img/bemo.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {

    const skills = [
        {
            type: 'language',
            skill: 'C#',
            level: 60,
        },
        {
            type: 'language',
            skill: 'C++',
            level: 60,
        },
        {
            type: 'language',
            skill: 'C',
            level: 60,
        },
        {
            type: 'language',
            skill: 'Python',
            level: 60,
        },
        {
            type: 'language',
            skill: 'JavaScript',
            level: 60,
        },
        {
            type: 'language',
            skill: 'Java',
            level: 60,
        },
        {
            type: 'tool',
            skill: 'Solidworks',
            level: 60,
        },
        {
            type: 'tool',
            skill: 'Fusion 360',
            level: 60,
        },
        {
            type: 'tool',
            skill: 'Altium',
            level: 60,
        },
        {
            type: 'tool',
            skill: 'VSCode',
            level: 60,
        },
        {
            type: 'tool',
            skill: 'Visual Studio',
            level: 60,
        },
        {
            type: 'tool',
            skill: 'Figma',
            level: 60,
        },
        {
            type: 'framework',
            skill: 'React',
            level: 60,
        },
        {
            type: 'framework',
            skill: 'Boostrap',
            level: 60,
        },
        {
            type: 'framework',
            skill: '.Net Core',
            level: 60,
        },
        {
            type: 'framework',
            skill: 'Flask',
            level: 60,
        },
    ]

    const work = [
        {
            timeline: '2022-now',
            title: 'Controls Eningeer at Tertuliano Lab (UPENN)',
        },
        {
            timeline: '2020-2022',
            title: 'Mechatronics Engineer at Lab2Fab',
        },
        {
            timeline: '2019-2020',
            title: 'Software Engineer Intern at Sage Intacct',
        },
        {
            timeline: '2017-2018',
            title: 'Software Engineer Intern at Adobe Inc',
        },
        {
            timeline: '2015-2017',
            title: 'Software Engineer Intern at Adobe Inc',
        },
    ]

    const education = [
        {
            timeline: '2022-now',
            degree: 'MSE in Robotics at the University of Pennsylvania',
        },
        {
            timeline: '2014-2017',
            degree: 'MBA at Santa Clara University',
        },
        {
            timeline: '2010-2014',
            degree: 'BA at Santa Clara University',
        },
    ]

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate_animated animate__fadeIn": ""}>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                        <Nav.Link className="project-nav-link" eventKey="languages">Languages</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link className="project-nav-link" eventKey="frameworks">Frameworks & Libraries</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link className="project-nav-link" eventKey="tools">Programs & Tools</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="languages">
                                            <Col>
                                                {
                                                    skills.map((skill, index) => {
                                                        if (skill.type === 'language')
                                                        {
                                                            return (
                                                                <Skill
                                                                    key={index}
                                                                    {...skill}
                                                                    />
                                                                )
                                                        } 
                                                    })
                                                }
                                            </Col>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="frameworks">
                                            <Col>
                                                {
                                                    skills.map((skill, index) => {
                                                        if (skill.type === 'framework')
                                                        {
                                                            return (
                                                                <Skill
                                                                    key={index}
                                                                    {...skill}
                                                                    />
                                                                )
                                                        } 
                                                    })
                                                }
                                            </Col>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="tools">
                                            <Col>
                                                {
                                                    skills.map((skill, index) => {
                                                        if (skill.type === 'tool')
                                                        {
                                                            return (
                                                                <Skill
                                                                    key={index}
                                                                    {...skill}
                                                                    />
                                                                )
                                                        } 
                                                    })
                                                }
                                            </Col>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
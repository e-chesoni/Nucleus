"use client";

import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import FadeInOnScrollDefault from '@/components/detail/FadeInOnScrollDefault';

import { projects } from "../app/projects.js";

export const Projects = () => {

    return (
        <section>
            <Container className="projects-container min-h-screen">
                <Row className="projects-row">
                    <Col className="projects-col">
                        
                            <div>
                                <Tab.Container id="projects-tabs" defaultActiveKey="embedded">
                                    <Nav variant="pills" className="nav-pills mb-3 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                        <Nav.Link className="project-nav-link" eventKey="embedded">Embedded Systems</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link className="project-nav-link" eventKey="controls">Control Systems</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link className="project-nav-link" eventKey="pcb">Printed Circuit Boards</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="embedded">
                                            <Container className="project-card-container mb-5">
                                                {
                                                    projects.map((project, index) => {
                                                        if (project.group === 'embed')
                                                        {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                    />
                                                                )
                                                        } 
                                                    })
                                                }
                                            </Container>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="controls">
                                            <Container className="project-card-container mb-5">
                                                {
                                                    projects.map((project, index) => {
                                                        if (project.group === 'control')
                                                        {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                    />
                                                                )
                                                        } 
                                                    })
                                                }
                                            </Container>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="pcb">
                                            <Container className="project-card-container mb-5">
                                                {
                                                    projects.map((project, index) => {
                                                        if (project.group === 'embed')
                                                        {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                    />
                                                                )
                                                        } 
                                                    })
                                                }
                                            </Container>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                            </div>

                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}
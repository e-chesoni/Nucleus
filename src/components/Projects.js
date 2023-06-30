"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import magneto from "../assets/img/magneto.jpeg";
import bemo from "../assets/img/bemo.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            category: "Embedded Systems",
            title: "Magneto",
            imgUrl: magneto,
            tagline: "magneto tagline",
            what: "Pokem ipsum dolor sit amet Poison Sting Misty Raichu Elekid make it double Mineral Badge.",
            how: "Ice Klinklang S.S. Anne Palkia grumpy old man who needs coffee Igglybuff the enemy Pokemon fainted.",
            why: "S.S. Anne Dig Ash Ketchum Skarmory Cryogonal Weedle Snivy.",
        },
        {
            category: "Embedded Systems",
            title: "Another Project",
            imgUrl: magneto,
            tagline: "another project tagline",
            what: "Some different stuff",
            how: "In a different way",
            why: "Because it was fun",
        },
        {
            category: "Controls",
            title: "BEM-0",
            imgUrl: bemo,
            tagline: "bem-o tagline",
            what: "Hydro Pump you're not wearing shorts Blizzard Slowking searching far and wide Burnt Berry Ninetales.",
            how: "Boulder Badge Grumpig Rotom Hippowdon Ninjask Flamethrower Muk.",
            why: "Misty Pachirisu Dragon Zangoose Skorupi Armaldo Manectric.",
        },
    ];

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
                                            <Col>
                                                {
                                                    projects.map((project, index) => {
                                                        if (project.category === 'Embedded Systems')
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
                                            </Col>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="controls">
                                            <Col>
                                                {
                                                    projects.map((project, index) => {
                                                        if (project.category === 'Controls')
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
                                            </Col>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="pcb">
                                            <Col>
                                                {
                                                    projects.map((project, index) => {
                                                        if (project.category === 'PCB Design')
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
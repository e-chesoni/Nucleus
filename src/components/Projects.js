"use client";

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import magneto from "../assets/magneto.jpeg";
import bemo from "../assets/bemo.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    const projects = [
        {
            category: "Embedded Systems",
            title: "Magneto test",
            imgUrl: magneto,
            what: "Pokem ipsum dolor sit amet Poison Sting Misty Raichu Elekid make it double Mineral Badge.",
            how: "Ice Klinklang S.S. Anne Palkia grumpy old man who needs coffee Igglybuff the enemy Pokemon fainted.",
            why: "S.S. Anne Dig Ash Ketchum Skarmory Cryogonal Weedle Snivy.",
        },
        {
            category: "Controls",
            title: "BEM-0 test",
            imgUrl: bemo,
            what: "Hydro Pump you're not wearing shorts Blizzard Slowking searching far and wide Burnt Berry Ninetales.",
            how: "Boulder Badge Grumpig Rotom Hippowdon Ninjask Flamethrower Muk.",
            why: "Misty Pachirisu Dragon Zangoose Skorupi Armaldo Manectric.",
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate_animated animate__fadeIn": ""}>
                                <h2>Projects</h2>
                                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                        <Nav.Item>
                                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                        <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                            projects.map((project, index) => {
                                                return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                            }
                                        </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="section">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
"use client";

import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image from 'next/image'

// Backgrounds
import magneto from "../assets/img/background/magneto/magneto.jpeg";
import magneto1 from "../assets/img/background/magneto/magneto1.svg";
import magneto_printing from "../assets/img/background/magneto/magneto-printing.jpg";

import bemo from "../assets/img/background/bemo/bemo.jpeg";
import bemo_side from "../assets/img/background/bemo/bem01-side.jpeg";
import bemo_desk_original from "../assets/img/background/bemo/chris-obrist-9X1VJKrz1lU-unsplash.jpg";
import bemo_components_original from "../assets/img/background/bemo/robin-glauser-aSvBypuXGkc-unsplash.jpg";
import bemo_testing_original from "../assets/img/background/bemo/tim-kabel-FCrYdP8gohg-unsplash.jpg";
import bemo_desk from "../assets/img/background/bemo/desk-gradient.png";
import bemo_components from "../assets/img/background/bemo/components-gradient.png";
import bemo_testing from "../assets/img/background/bemo/bemo-testing-gradient.png";

import pcb from "../assets/img/background/pcb/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";

import code from "../assets/img/background/other/christopher-gower-m_HRfLhgABo-unsplash.jpg";

// Icons
import car from "../assets/img/icon/car.svg";
import car_white from "../assets/img/icon/car-white.svg";
import magneto_helment from "../assets/img/icon/magneto_helment.svg";
import magneto_helment_white from "../assets/img/icon/magneto-helment-white.svg";
import bike_white from "../assets/img/icon/bike-white.svg";
import fish_white from "../assets/img/icon/fish-white.svg";
import cloud_white from "../assets/img/icon/cloud-white.svg";

// Skills
import altium from "../assets/img/skill/altium-skill.svg";
import aws from "../assets/img/skill/aws-skill.svg";
import c from "../assets/img/skill/c-skill.svg";
import circuit from "../assets/img/skill/circuit-skill.svg";
import cpp from "../assets/img/skill/cpp-skill.svg";
import csharp from "../assets/img/skill/c-sharp-skill.svg";
import java from "../assets/img/skill/java-skill.svg";
import javascript from "../assets/img/skill/javascript-skill.svg";
import python from "../assets/img/skill/python-skill.svg";
import solder from "../assets/img/skill/solder-skill.svg";
import solidworks from "../assets/img/skill/solidworks-skill.svg";
import typescript from "../assets/img/skill/typescript-skill.svg";
import vscode from "../assets/img/skill/vs-code-skill.svg";
import vs from "../assets/img/skill/vs-skill.svg";


export const Projects = () => {
    const projects = [
        {
            category: "Embedded Systems",
            title: "Magneto",
            imgUrl: magneto_helment,
            tagline: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            what: "Pokem ipsum dolor sit amet Poison Sting Misty Raichu Elekid make it double Mineral Badge.",
            how: "Ice Klinklang S.S. Anne Palkia grumpy old man who needs coffee Igglybuff the enemy Pokemon fainted.",
            why: "S.S. Anne Dig Ash Ketchum Skarmory Cryogonal Weedle Snivy.",
        },
        {
            category: "Embedded Systems",
            title: "Another Project",
            imgUrl: magneto_helment,
            tagline: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            what: "Some different stuff",
            how: "In a different way",
            why: "Because it was fun",
        },
        {
            category: "Controls",
            title: "BEM-0",
            imgUrl: car,
            tagline: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            what: "Hydro Pump you're not wearing shorts Blizzard Slowking searching far and wide Burnt Berry Ninetales.",
            how: "Boulder Badge Grumpig Rotom Hippowdon Ninjask Flamethrower Muk.",
            why: "Misty Pachirisu Dragon Zangoose Skorupi Armaldo Manectric.",
        },
        {
            category: "Controls",
            title: "Second Controls Project",
            imgUrl: car,
            tagline: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
            what: "Hydro Pump you're not wearing shorts Blizzard Slowking searching far and wide Burnt Berry Ninetales.",
            how: "Boulder Badge Grumpig Rotom Hippowdon Ninjask Flamethrower Muk.",
            why: "Misty Pachirisu Dragon Zangoose Skorupi Armaldo Manectric.",
        },
    ];

    const categories = [
        {
            group: "embed",
            projects: [
                {
                    title: "bemo",
                    tagline: "first tagline",
                    imgUrl: bemo_desk,
                    iconUrl: car_white,
                    skills: [ 
                        {
                            skillUrl: cpp,
                            skillAlt: "cpp tile"
                        },
                        {
                            skillUrl: circuit,
                            skillAlt: "circuitry tile"
                        },
                        {
                            skillUrl: solder,
                            skillAlt: "solder tile"
                        },
                    ],
                    description: "Pokem ipsum dolor sit amet Poison Sting Misty Raichu Elekid make it double Mineral Badge.",
                },
                {
                    title: "second",
                    tagline: "second tagline",
                    imgUrl: bemo_components,
                    iconUrl: car_white,
                    skills: [ 
                        {
                            skillUrl: csharp,
                            skillAlt: "c-sharp tile"
                        },
                    ],
                    description: "Hydro Pump you're not wearing shorts Blizzard Slowking searching far and wide Burnt Berry Ninetales.",
                },
            ]
        },
        {
            group: "control",
            projects: [
                {
                    title: "magneto",
                    tagline: "third tagline",
                    imgUrl: magneto_printing,
                    iconUrl: magneto_helment_white,
                    skills: [ 
                        {
                            skillUrl: csharp,
                            skillAlt: "c-sharp tile"
                        },
                        {
                            skillUrl: vs,
                            skillAlt: "vs tile"
                        },
                        {
                            skillUrl: solidworks,
                            skillAlt: "solidworks tile"
                        }
                    ],
                    description: "Boulder Badge Grumpig Rotom Hippowdon Ninjask Flamethrower Muk.",
                },
                {
                    title: "fourth",
                    tagline: "fourth tagline",
                    imgUrl: code,
                    iconUrl: magneto_helment_white,
                    skills: [ 
                        {
                            skillUrl: csharp,
                            skillAlt: "c-sharp tile"
                        }
                    ],
                    description: "Ice Klinklang S.S. Anne Palkia grumpy old man who needs coffee Igglybuff the enemy Pokemon fainted.",
                },
            ]
        },
        {
            group: "pcb",
            projects: [
                {
                    title: "fifth",
                    tagline: "third tagline",
                    imgUrl: pcb,
                    iconUrl: magneto_helment_white,
                    skills: [ 
                        {
                            skillUrl: csharp,
                            skillAlt: "c-sharp tile"
                        }
                    ],
                    description: "S.S. Anne Dig Ash Ketchum Skarmory Cryogonal Weedle Snivy.",
                },
            ]
        }
    ];

    return (
        <section>
            <Container className="projects-container">
                <Row className="projects-row">
                    <Col className="projects-col">
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate_animated animate__fadeIn": ""}>
                                <Tab.Container id="projects-tabs" defaultActiveKey="embedded">
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
                                            {
                                                categories.map((category, index) => {
                                                    if (category.group === 'embed')
                                                    {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...category}
                                                                />
                                                            )
                                                    } 
                                                })
                                            }
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="controls">
                                            {
                                                categories.map((category, index) => {
                                                    if (category.group === 'control')
                                                    {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...category}
                                                                />
                                                            )
                                                    } 
                                                })
                                            }
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="pcb">
                                            {
                                                categories.map((category, index) => {
                                                    if (category.group === 'pcb')
                                                    {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...category}
                                                                />
                                                            )
                                                    } 
                                                })
                                            }
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
   
    {/*
    return (
        <Carousel>
          <Carousel.Item interval={1000}>
            <Image
                className="d-block w-100"
                src={magneto_helment}
                alt="First slide"
                height={500}
                width={500}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
*/}
}
"use client";

import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image from 'next/image'

// Backgrounds
import magneto from "../assets/img/background/magneto/magneto.jpeg";
import magneto1 from "../assets/img/background/magneto/magneto1.svg";
import magneto_printing_original from "../assets/img/background/magneto/magneto-printing.jpg";
import magneto_printing from "../assets/img/background/magneto/magneto-printing-gradient.png";

import bemo from "../assets/img/background/bemo/bemo.jpeg";
import bemo_side from "../assets/img/background/bemo/bem01-side.jpeg";
import bemo_desk_original from "../assets/img/background/bemo/chris-obrist-9X1VJKrz1lU-unsplash.jpg";
import bemo_components_original from "../assets/img/background/bemo/robin-glauser-aSvBypuXGkc-unsplash.jpg";
import bemo_testing_original from "../assets/img/background/bemo/tim-kabel-FCrYdP8gohg-unsplash.jpg";
import bemo_desk from "../assets/img/background/bemo/desk-gradient.png";
import bemo_components from "../assets/img/background/bemo/components-gradient.png";
import bemo_testing from "../assets/img/background/bemo/bemo-testing-gradient.png";

import pcb_original from "../assets/img/background/pcb/alexandre-debieve-FO7JIlwjOtU-unsplash.jpg";
import pcb from "../assets/img/background/pcb/pcb-gradient.png";

import code_original from "../assets/img/background/other/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import code from "../assets/img/background/other/code-gradient.png";

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
import fusion from "../assets/img/icon/fusion-360-tile.svg";
import java from "../assets/img/skill/java-skill.svg";
import javascript from "../assets/img/skill/javascript-skill.svg";
import python from "../assets/img/skill/python-skill.svg";
import solder from "../assets/img/skill/solder-skill.svg";
import solidworks from "../assets/img/skill/solidworks-skill.svg";
import typescript from "../assets/img/skill/typescript-skill.svg";
import vscode from "../assets/img/skill/vs-code-skill.svg";
import vs from "../assets/img/skill/vs-skill.svg";


export const Projects = () => {

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
                    description: "Pokem ipsum dolor sit amet Deino Tympole Palpitoad Earthquake Regice Croconaw. Rock the enemy Pokemon fainted Goldeen Growl Earth Badge Magby Nincada. Fire Regigigas Luvdisc what kind of Pokemon are you Walrein Bibarel Teddiursa.",
                },
                {
                    title: "magikarp",
                    tagline: "second tagline",
                    imgUrl: bemo_components,
                    iconUrl: fish_white,
                    skills: [ 
                        {
                            skillUrl: cpp,
                            skillAlt: "cpp tile"
                        },
                        {
                            skillUrl: circuit,
                            skillAlt: "circuit tile"
                        },
                        {
                            skillUrl: fusion,
                            skillAlt: "fusion 360 tile"
                        },
                    ],
                    description: "Dig Venomoth Rising Badge Rhydon Hoenn Combusken Solosis. Pokemon like no one ever was Slowpoke Meloetta Druddigon Phanpy Hoppip. Pokemon Rhyhorn Carracosta Aron Terrakion Fire Stunky. Venusaur Blastoise Unfezant Nidoking Emboar Galvantula Earthquake. Flying Accelgor Lopunny Furret Purugly Kecleon consectetur adipisicing elit",
                },
                {
                    title: "skyblue",
                    tagline: "fourth tagline",
                    imgUrl: code,
                    iconUrl: cloud_white,
                    skills: [ 
                        {
                            skillUrl: csharp,
                            skillAlt: "c-sharp tile"
                        },
                        {
                            skillUrl: aws,
                            skillAlt: "aws tile"
                        },
                        {
                            skillUrl: vs,
                            skillAlt: "visual studio tile"
                        },
                    ],
                    description: "Blastoise Mareep Slowpoke Tyrogue incididunt ut labore Magikarp used Splash bicycle. Ut enim ad minim veniam Golem Hypno Purugly Slakoth Darmanitan Mint Berry. Velit esse cillum dolore eu fugiat nulla pariatur Mareep Pachirisu Cerulean City Fire Red Rotom Grumpig.",
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
                    description: "Strength Musharna Sonic Boom Swoobat Duskull Shaymin Deino. Fire Stoutland Giovanni Gothorita Tranquill deserunt mollit Normal. Ut aliquip ex ea commodo consequat Blitzle Totodile Stunky Typhlosion Sewaddle Goldeen. Fuchsia City Graveler Fighting in a world we must defend Chikorita.",
                },
                
            ]
        },
        {
            group: "pcb",
            projects: [
                {
                    title: "Persistance of Vision Bike Display",
                    tagline: "third tagline",
                    imgUrl: pcb,
                    iconUrl: bike_white,
                    skills: [ 
                        {
                            skillUrl: c,
                            skillAlt: "c tile"
                        },
                        {
                            skillUrl: circuit,
                            skillAlt: "circuit tile"
                        },
                        {
                            skillUrl: altium,
                            skillAlt: "altium tile"
                        },
                    ],
                    description: "Rainbow Badge Numel Strength Tranquill Registeel Herdier Seel. Poison Nincada Simisage Delibird Chimecho Ninetales Oshawott. Strength Rapidash Plain Badge Gliscor Oshawott Surskit Magikarp. Electric Pewter City Electabuzz Clamperl Electrike.",
                },
            ]
        }
    ];

    return (
        <section>
            <Container className="projects-container min-h-screen">
                <Row className="projects-row">
                    <Col className="projects-col">
                        <TrackVisibility>
                            {({ isVisible }) => 
                            <div className={isVisible ? "animate_animated animate__fadeIn": ""}>
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
"use client";

import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCarousel } from "./ProjectCarousel";
import magneto from "../assets/img/magneto.jpeg";
import magneto1 from "../assets/img/magneto1.svg";
import magneto_helment from "../assets/img/magneto_helment.svg";
import car from "../assets/img/car.svg";
import bemo from "../assets/img/bemo.jpeg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image from 'next/image'


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
                    title: "first",
                    tagline: "first tagline",
                    imgUrl: magneto_helment,
                },
                {
                    title: "second",
                    tagline: "second tagline",
                    imgUrl: magneto_helment,
                },
            ]
        },
        {
            group: "control",
            projects: [
                {
                    title: "third",
                    tagline: "third tagline",
                    imgUrl: car,
                },
                {
                    title: "fourth",
                    tagline: "fourth tagline",
                    imgUrl: car,
                },
            ]
        },
        {
            group: "pcb",
            projects: [
                {
                    title: "fifth",
                    tagline: "third tagline",
                    imgUrl: magneto1,
                },
            ]
        }
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
                                            {
                                                categories.map((category, index) => {
                                                    if (category.group === 'embed')
                                                    {
                                                        return (
                                                            <ProjectCarousel
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
                                                            <ProjectCarousel
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
                                                            <ProjectCarousel
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
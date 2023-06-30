"use client";

import { Container, Col, Row } from "react-bootstrap";
import { Skill } from "./Milestone";
import ProgressBar from 'react-bootstrap/ProgressBar';

export const About = () => {

    const skills = [
        {
            type: 'language',
            skill: 'C#',
        },
        {
            type: 'language',
            skill: 'C++',
        },
        {
            type: 'language',
            skill: 'C',
        },
        {
            type: 'language',
            skill: 'Python',
        },
        {
            type: 'language',
            skill: 'JavaScript',
        },
        {
            type: 'language',
            skill: 'Java',
        },
        {
            type: 'tool',
            skill: 'Solidworks',
        },
        {
            type: 'tool',
            skill: 'Fusion 360',
        },
        {
            type: 'tool',
            skill: 'Altium',
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
        <Container>
            <Col>
                <Row>
                    <Col>C#</Col>
                    <Col>
                        <ProgressBar animated now={60} label={`${60}%`} variant="custom-progress-bar" />
                    </Col>
                </Row>
                <Row>
                    <Col>C++</Col>
                    <Col>
                        <ProgressBar animated now={60} label={`${60}%`} variant="custom-progress-bar" />
                    </Col>
                </Row>
                <Row>
                    <Col>C</Col>
                    <Col>
                        <ProgressBar animated now={60} label={`${60}%`} variant="custom-progress-bar" />
                    </Col>
                </Row>
                <Row>
                    <Col>Python</Col>
                    <Col>
                        <ProgressBar animated now={60} label={`${60}%`} variant="custom-progress-bar" />
                    </Col>
                </Row>
                <Row>
                    <Col>JavaScript</Col>
                    <Col>
                        <ProgressBar animated now={60} label={`${60}%`} variant="custom-progress-bar" />
                    </Col>
                </Row>
                <Row>
                    <Col>Java</Col>
                    <Col>
                        <ProgressBar animated now={60} label={`${60}%`} variant="custom-progress-bar" />
                    </Col>
                </Row>
                <Row>R1</Row>
                <Row>R1</Row>
            </Col>
        </Container>
    )
}
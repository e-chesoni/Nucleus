"use client";

import { Col, Container, Row } from "react-bootstrap";

import ProgressBar from 'react-bootstrap/ProgressBar';

export const Skill = ({ skill, level }) => {
  return (
    <Container className="skill-container">
      <Col className="skill-title">{skill}</Col>
      <Col className="skill-progress-bar-container">
          <ProgressBar animated now={level} label={`${level}%`} variant="custom-progress-bar" />
      </Col>
    </Container>
  )
}
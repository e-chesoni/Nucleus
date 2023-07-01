"use client";

import { Col, Row } from "react-bootstrap";

import ProgressBar from 'react-bootstrap/ProgressBar';

export const Skill = ({ skill, level }) => {
  return (
    <Row>
      <Col>{skill}</Col>
      <Col>
          <ProgressBar animated now={level} label={`${level}%`} variant="custom-progress-bar" />
      </Col>
  </Row>
  )
}
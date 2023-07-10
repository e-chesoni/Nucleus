import { Container, Col, Row } from "react-bootstrap";
import Image from 'next/image'
import Button from 'react-bootstrap/Button';

import { NucleusButton } from "./NucleusButton";

export const ProjectCard = ({ title, tagline, imgUrl, iconUrl, skills, summary }) => {
  return (
      <Col className="project-card-col">
        <Row className="project-card-header img-gradient">
            <Image
              className="project-card-header-img"
              src={imgUrl}
              alt="img alt"
              style={{alignSelf: 'center'}}
            />
        </Row>
        <Row className="project-card-description-container">
          <Col>
            <Row className="project-card-header-icon-row">
              <Image
                className="project-card-header-icon h-20 w-20"
                src={iconUrl}
                alt="img alt"
              />
            </Row>
            <Row className="project-card-header-text">
              <h5>{title}</h5>
              <p className="project-card-tagline">{tagline}</p>
            </Row>
            <Row className="project-card-skills">
              {
                skills.map((skill, index) => {
                    return (
                      <Col>
                        <Image
                          className="d-block h-20 w-20"
                          src={skill.skillUrl}
                          alt="alt"
                        />
                      </Col>
                    )
                })
              }
            </Row>
            <Row className="project-card-description">
              <p>{summary}</p>
            </Row>
            <Row className="project-button-row">
              <NucleusButton 
                
              />
            </Row>
          </Col>
        </Row>
      </Col>
  )
}
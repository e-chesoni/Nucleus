import { Container, Col, Row } from "react-bootstrap";
import Image from 'next/image'
import Button from 'react-bootstrap/Button';

import { NucleusButton } from "./NucleusButton";

export const ProjectCard = ({group, projects}) => {

  return (
    <div>
      {
        projects.map((project, index) => {
          return (
            <Container className="project-card-container mb-5">
              <Col className="project-card-col">
                <Row className="project-card-header img-gradient">
                    <Image
                      className="project-card-header-img"
                      src={project.imgUrl}
                      alt="img alt"
                      style={{alignSelf: 'center'}}
                    />
                </Row>
                <Row className="project-card-description-container">
                  <Col>
                    <Row className="project-card-header-icon-row">
                      <Image
                        className="project-card-header-icon h-20 w-20"
                        src={project.iconUrl}
                        alt="img alt"
                      />
                    </Row>
                    <Row className="project-card-header-text">
                      <h5>{project.title}</h5>
                      <p className="project-card-tagline">{project.tagline}</p>
                    </Row>
                    <Row className="project-card-skills">
                      {
                        project.skills.map((skill, index) => {
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
                      <p>{project.summary}</p>
                    </Row>
                    <Row className="project-button-row">
                      <NucleusButton 
                        project={{project}}
                      />
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Container>
          )
        })
      }
    </div>
  )

}
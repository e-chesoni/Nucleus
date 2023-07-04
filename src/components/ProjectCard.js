import { Container, Col, Row } from "react-bootstrap";
import Image from 'next/image'

import magneto from "../assets/img/magneto.jpeg";
import magneto1 from "../assets/img/magneto1.svg";
import magneto_helment from "../assets/img/magneto_helment.svg";
import car from "../assets/img/car.svg";
import bemo from "../assets/img/bemo.jpeg";
import csharp from "../assets/img/c-sharp-skill.svg";

export const ProjectCard = ({group, projects}) => {

  return (
    <div>
      {
        projects.map((project, index) => {
          return (
            <Container className="project-card-container my-5 py-5">
              <Col className="project-card-col">
                <Row className="project-card-header">
                  <Row className="project-card-header-img row-span-1">
                    <Image
                      className=""
                      src={project.imgUrl}
                      alt="img alt"
                    />
                  </Row>
                  <Row className="project-card-header-icon">
                    <Image
                      className="h-20 w-20"
                      src={project.iconUrl}
                      alt="img alt"
                    />
                  </Row>
                </Row>
                <Row className="project-card-title">
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
                  <p>{project.description}</p>
                </Row>
              </Col>
            </Container>
          )
        })

      }
    </div>
  )

}
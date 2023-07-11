"use client";
import { Container, Col, Row } from "react-bootstrap";
import { Obstacle } from "./Obstacle";

export const How = ({ section, summary, obstacles }) => {
    return (
        <Col className="how-col">
            <Row>
                <p>{summary}</p>
            </Row>
            <Row>
                {
                    obstacles.map((obstacle, index) => {
                        return (
                            <div>
                                <h4>{obstacle.title}</h4>
                                <Obstacle
                                    key={index}
                                    {...obstacle}
                                />
                            </div>
                        )
                    })
                }
            </Row>
        </Col>
    )
}
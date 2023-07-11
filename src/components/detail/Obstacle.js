"use client";
import { Container, Col, Row } from "react-bootstrap";
import { Paragraph } from "../detail/Paragraphs";

export const Obstacle = ({ section, summary, obstacles }) => {
    return (
        <Col className="obstacle-col">
            <Row>
                <p>{summary}</p>
            </Row>
            <Row>
                {
                    obstacles.map((obstacle, index) => {
                        return (
                            <div>
                                <h4>{obstacle.title}</h4>
                                <Paragraph
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
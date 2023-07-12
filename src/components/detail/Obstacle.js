"use client";
import { Container, Col, Row } from "react-bootstrap";

export const Obstacle = ({ title, paragraphs }) => {
    return (
        <Col className="obstacle-col">
            {
                paragraphs.map((paragraph, index) => {
                    return (
                        <Row className="obstacle-row">
                            <p>{paragraph.text}</p>
                        </Row>
                    )
                })
            }
        </Col>
    )
}
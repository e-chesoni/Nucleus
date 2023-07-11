"use client";
import { Container, Col, Row } from "react-bootstrap";

export const Obstacle = ({ title, paragraphs }) => {
    console.log(title);
    return (
        <Col className="obstacle-col">
            {
                paragraphs.map((paragraph, index) => {
                    return (
                        <Row>
                            <p>{paragraph.text}</p>
                        </Row>
                    )
                })
            }
        </Col>
    )
}
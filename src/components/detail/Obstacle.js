"use client";
import { Col, Row } from "react-bootstrap";
import FadeInOnScroll from "./FadeInOnScroll";
import FadeInOnScrollDefault from "./FadeInOnScrollDefault";

export const Obstacle = ({ paragraphs }) => {
    return (
        <Col className="obstacle-col">
            {
                paragraphs.map((paragraph, index) => {
                    return (
                        <FadeInOnScrollDefault elementName="obstacle">
                            <Row className="obstacle-row">
                                <p>{paragraph.text}</p>
                            </Row>
                        </FadeInOnScrollDefault>
                    )
                })
            }
        </Col>
    )
}
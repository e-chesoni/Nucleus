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
                        <FadeInOnScrollDefault elementName="obstacle" visibilityThreshold={0.1}>
                            <div className="desc-container">
                                <div className="sticky-p">{paragraph.text}</div>
                            </div>
                        </FadeInOnScrollDefault>
                    )
                })
            }
        </Col>
    )
}
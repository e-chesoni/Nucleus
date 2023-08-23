"use client";
import { Container, Col, Row } from "react-bootstrap";
import FadeInOnScrollDefault from "./FadeInOnScrollDefault";

export const ConclusionParagraph = ({ order, text }) => {
    console.log(order);
    if (order < 4) {
        return (
            <Col className="paragraph-col">
                <FadeInOnScrollDefault elementName="ConclusionParagraph" visibilityThreshold={0.01} exitThreshold={0.01}>
                <div className="conclusion-container">
                    <div className="sticky-c">{text}</div>
                </div>
                </FadeInOnScrollDefault>

            </Col>
        )
    } else {
        return (
            <Col className="paragraph-col">
                <div className="last-conclusion-container">
                    <div className="sticky-c">{text}</div>
                </div>
            </Col>
        )
    }
    
}
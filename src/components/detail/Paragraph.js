"use client";

import { Container, Col, Row } from "react-bootstrap";
import FadeInOnScrollDefault from "./FadeInOnScrollDefault";

export const Paragraph = ({ order, text }) => {
    console.log(order);
    return (
            <Col className="paragraph-col">
                <FadeInOnScrollDefault visibleOnLoad={false} elementName="Paragraph" visibilityThreshold={0.1} exitThreshold={0.1}>
                    <div className="desc-container">
                        <div className="sticky-p">{text}</div>
                    </div>
                </FadeInOnScrollDefault>
            </Col>
    )
}
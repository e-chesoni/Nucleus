"use client";

import { Container, Col, Row } from "react-bootstrap";
import FadeInOnScrollDefault from "./FadeInOnScrollDefault";

export const Paragraph = ({ order, text }) => {
    console.log(order);
    return (
            <Col className="paragraph-col">
                <FadeInOnScrollDefault elementName="Paragraph" fadeInThreshold={1} setFadeIn={false} titleRank={0} visibleOnLoad={false} visibilityThreshold={0.1}>
                    <div className="desc-container">
                        <div className="sticky-p">{text}</div>
                    </div>
                </FadeInOnScrollDefault>
            </Col>
    )
}
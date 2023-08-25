"use client";

import { Container, Col, Row } from "react-bootstrap";
import FadeInOnScrollDefault from "./FadeInOnScrollDefault";

export const Paragraph = ({ order, text, isConclusion }) => {
    if (!isConclusion)
    {
        return (
            <Col className="paragraph-col">
                <FadeInOnScrollDefault elementName="Paragraph" fadeInThreshold={0.45} setFadeIn={true} titleRank={0} visibleOnLoad={false} visibilityThreshold={0.1}>
                    <div className="desc-container">
                        <div className="sticky-p">{text}</div>
                    </div>
                </FadeInOnScrollDefault>
            </Col>
        )
    } else {
        if (order < 4) {
            return (
                <Col className="paragraph-col">
                    <FadeInOnScrollDefault elementName="ConclusionParagraph" fadeInThreshold={0.3} setFadeIn={true} titleRank={0} visibleOnLoad={false} visibilityThreshold={0.001}>
                    <div className="conclusion-container">
                        <div className="sticky-c">{text}</div>
                    </div>
                    </FadeInOnScrollDefault>
                </Col>
            )
        } else {
            return (
                <Col className="paragraph-col">
                    <FadeInOnScrollDefault elementName="ConclusionParagraph" fadeInThreshold={0.3} setFadeIn={true} titleRank={0} visibleOnLoad={false} visibilityThreshold={0.001}>
                    <div className="last-conclusion-container">
                        <div className="sticky-c">{text}</div>
                    </div>
                    </FadeInOnScrollDefault>
                </Col>
            )
        }
    }
}
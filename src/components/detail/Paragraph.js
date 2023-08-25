"use client";

import { Col, Row } from "react-bootstrap";
import FadeInOnScrollDefault from "./FadeInOnScrollDefault";

export const Paragraph = ({ order, text, isHowDesc, isConclusion }) => {
    if (!isConclusion && !isHowDesc)
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
    } else if (isHowDesc) {
        return (
            <FadeInOnScrollDefault elementName="HowDesc" fadeInThreshold={0.40} setFadeIn={true} titleRank={0} visibleOnLoad={false} visibilityThreshold={0.0}>
                <Row>
                    <p>{text}</p>
                </Row>
            </FadeInOnScrollDefault>
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
"use client";

import { Row } from "react-bootstrap";
import FadeInOnScrollDefault from "./FadeInOnScrollDefault";

export const StickyHeader = ({ summary }) => {
    return (
        <FadeInOnScrollDefault elementName="Paragraph" fadeInThreshold={0.40} setFadeIn={true} titleRank={0} visibleOnLoad={false} visibilityThreshold={0.1}>
            <Row>
                <p>{summary}</p>
            </Row>
        </FadeInOnScrollDefault>
    )
}
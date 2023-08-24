"use client";

import { Row } from "react-bootstrap";
import FadeInOnScrollDefault from "./FadeInOnScrollDefault";

export const StickyHeader = ({ summary }) => {
    return (
        <FadeInOnScrollDefault visibleOnLoad={false} elementName="Paragraph" visibilityThreshold={0.1} exitThreshold={0.1}>
            <Row>
                <p>{summary}</p>
            </Row>
        </FadeInOnScrollDefault>
    )
}
"use client";
import { Container, Col, Row } from "react-bootstrap";
import { Obstacle } from "./Obstacle";

export const StickyHeader = ({ summary }) => {
    return (
        <Row className="sticky-header-col">
            <p>{summary}</p>
        </Row>
    )
}
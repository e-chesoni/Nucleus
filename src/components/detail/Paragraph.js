"use client";
import { Container, Col, Row } from "react-bootstrap";

export const Paragraph = ({ order, text }) => {
    console.log(order);
    return (
        <Col className="paragraph-col">
            <p>{text}</p>
        </Col>
    )
}
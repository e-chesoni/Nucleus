"use client";
import { Container, Col, Row } from "react-bootstrap";
import FadeInOnScrollDefault from "./FadeInOnScrollDefault";

export const Paragraph = ({ order, text }) => {
    console.log(order);
    return (
            <Col className="paragraph-col">
        <FadeInOnScrollDefault elementName="Paragraph">

                <p>{text}</p>
        </FadeInOnScrollDefault>

            </Col>
    )
}
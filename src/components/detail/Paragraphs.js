"use client";
import { Container, Col, Row } from "react-bootstrap";

export const Paragraph = ({ title, paragraphs }) => {
    console.log(title);
    return (
        <Col className="paragraph-col">
            {
                paragraphs.map((paragraph, index) => {
                    return (
                        <Row>
                            <p>{paragraph.text}</p>
                        </Row>
                    )
                })
            }
        </Col>
    )
}
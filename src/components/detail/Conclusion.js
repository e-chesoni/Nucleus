"use client";
import { Container, Col, Row } from "react-bootstrap";
import { Paragraph } from "./Paragraph";

export const Conclusion = ({ section, modules, paragraphs }) => {
    return (
        <Col className="build-element-col">
            <Row>
                <div>
                    {
                        paragraphs.map((paragraph, index) => {
                            return (
                                <Paragraph
                                    key={index}
                                    {...paragraph}
                                />
                            )
                        })
                    }
                    
                </div>
            </Row>
        </Col>
    )
}
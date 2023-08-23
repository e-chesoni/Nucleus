"use client";
import { Container, Col, Row } from "react-bootstrap";
import { ConclusionParagraph } from "./ConclusionParagraph";

export const Conclusion = ({ section, modules, paragraphs }) => {
    return (
        <Col className="build-element-col">
            <Row>
                <div>
                    {
                        paragraphs.map((paragraph, index) => {
                            return (
                                <ConclusionParagraph
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
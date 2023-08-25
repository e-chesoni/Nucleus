"use client";
import { Col, Row } from "react-bootstrap";
import { Paragraph } from "./Paragraph";

export const Conclusion = ({ paragraphs }) => {
    return (
        <Col className="build-element-col">
            <Row>
                <div>
                    {
                        paragraphs.map((paragraph, index) => {
                            return (
                                <Paragraph
                                    key={index}
                                    order={paragraph.order}
                                    text={paragraph.text}
                                    isConclusion={true}
                                />
                            )
                        })
                    }
                </div>
            </Row>
        </Col>
    )
}
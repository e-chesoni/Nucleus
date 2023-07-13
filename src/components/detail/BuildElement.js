"use client";
import { Container, Col, Row } from "react-bootstrap";
import { Paragraph } from "./Paragraph";

export const BuildElement = ({ section, modules, paragraphs }) => {
    return (
        <Col className="build-element-col">
            <h4 className="detail-how-sub-section-header">{section}</h4>
            <Row>
                <div>
                    <h5>Modules:</h5>
                    <ul>
                        {
                            modules.map((module, index) => {
                                return (
                                    <li>{module.name}</li>
                                )
                            })
                        }
                    </ul>
                    
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
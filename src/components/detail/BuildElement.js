"use client";
import { Container, Col, Row } from "react-bootstrap";
import { Paragraph } from "./Paragraph";
import FadeInOnScrollDefault from '@/components/detail/FadeInOnScrollDefault';

export const BuildElement = ({ section, modules, paragraphs }) => {
    return (
        <Col className="build-element-col">
            <FadeInOnScrollDefault elementName='ObstacleTitle' visibilityThreshold={0.27} exitThreshold={0.27} titleRank={4}>
                <h4>{section}</h4>
            </FadeInOnScrollDefault>
            <Row>
                <div>
                    <FadeInOnScrollDefault elementName="Paragraph" visibilityThreshold={0.1} exitThreshold={0.1}>
                    <div className="mod-container">
                        <div className="sticky-mod">
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
                        </div>
                    </div>
                    </FadeInOnScrollDefault>
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
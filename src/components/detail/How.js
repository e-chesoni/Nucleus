"use client";
import { Row } from "react-bootstrap";
import FadeInOnScrollDefault from '@/components/detail/FadeInOnScrollDefault';
import { Paragraph } from "./Paragraph";

export const How = ({ obstacles }) => {
    return (
        <Row>
            {
                obstacles.map((obstacle, index) => {
                    return (
                        <div>
                            <FadeInOnScrollDefault elementName='ObstacleTitle' fadeInThreshold={0.45} setFadeIn={true} titleRank={4} visibleOnLoad={false} visibilityThreshold={0.27}>
                                {/* className moved to FadeInOnScrollDefault File */}
                                <h4>{obstacle.title}</h4>
                            </FadeInOnScrollDefault>
                            {
                                obstacle.paragraphs.map((paragraph, index) => {
                                    return (
                                        <Paragraph
                                            key={index}
                                            order={paragraph.order}
                                            text={paragraph.text}
                                        />
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </Row>
    )
}
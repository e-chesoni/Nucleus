"use client";
import { Container, Col, Row } from "react-bootstrap";
import { Obstacle } from "./Obstacle";
import FadeInOnScrollDefault from '@/components/detail/FadeInOnScrollDefault';

export const How = ({ obstacles }) => {
    return (
        <Row>
            {
                obstacles.map((obstacle, index) => {
                    return (
                        <div>
                            <FadeInOnScrollDefault elementName='ObstacleTitle' visibilityThreshold={0.27} exitThreshold={0.27} titleRank={4}>
                                {/* className moved to FadeInOnScrollDefault File */}
                                <h4 className="">{obstacle.title}</h4>
                            </FadeInOnScrollDefault>
                            <Obstacle
                                key={index}
                                {...obstacle}
                            />
                        </div>
                    )
                })
            }
        </Row>
    )
}
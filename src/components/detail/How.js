"use client";
import { Container, Col, Row } from "react-bootstrap";
import { Obstacle } from "./Obstacle";

export const How = ({ obstacles }) => {
    return (
        <Row>
            {
                obstacles.map((obstacle, index) => {
                    return (
                        <div>
                            <h4 className="detail-how-sub-section-header">{obstacle.title}</h4>
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
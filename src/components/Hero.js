"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Hero = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Embedded Systems", "Control Systems", "Printed Circuit Boards" ];
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className='hero' id='home'>
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <div className="py-10 timeline-text"><p>&lt;Begin/&gt;</p></div>

                                    <div className='min-h-screen grid content-center'>

                                        <div className='intro grid content-center '>
                                          <h2><span className="sentence-start">Hi</span><span>, my name is <span className="name">Elaine Chesoni</span></span></h2>
                                          <div>
                                            <h2><span className="sentence-start">I</span> <span className="design-text">design</span> and <span className="develop-text">develop</span><span className="txt-rotate" period="1000" data-rotate='[ "Embedded Systems", "Control Systems", "Printed Circuit Boards" ]'> <span className="wrap">{text}</span> </span></h2>
                                          </div>
                                        </div>
                                        <div className="timeline-text"><p>Let me show you...</p></div>

                                    </div>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
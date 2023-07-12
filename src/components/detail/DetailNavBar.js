"use client";

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const DetailNavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand className="navbar-link" href="#/">&lt;<span className="navbar-brand-inner-text">e-chesoni</span>/&gt;</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                  <Nav className="navbar-text me-auto">
                    <Nav.Link href="#what" className={activeLink === 'what' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('what')}>&lt;What/&gt;</Nav.Link>
                    <Nav.Link href="#how" className={activeLink === 'how' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('how')}>&lt;How/&gt;</Nav.Link>
                    <Nav.Link href="#why" className={activeLink === 'what' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('why')}>&lt;Why/&gt;</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
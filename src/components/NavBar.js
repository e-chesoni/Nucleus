"use client";

import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

export const NavBar = () => {
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
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>&lt;Home/&gt;</Nav.Link>
                    <Nav.Link href="#professional" className={activeLink === 'professional' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('professional')}>&lt;Professional/&gt;</Nav.Link>
                    <Nav.Link href="#fun" className={activeLink === 'fun' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('fun')}>&lt;Fun/&gt;</Nav.Link>
                    <Nav.Link href="#resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>&lt;Resume/&gt;</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
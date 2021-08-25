import React, { useState } from 'react';
import { Container,Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../images/logo-white.png';
import './Navigation.css';

const Navigation = () => {

    const [navigation, setNavigation] = useState(false);

    const changeBackground = () => {
        if(window.pageYOffset > 100) {
           setNavigation(true)
        } else {
            setNavigation(false)
        }
    };

    window.addEventListener('scroll', changeBackground)

    return (
        <header className="header">
            <Navbar expand="md" variant="dark" fixed="top" className={navigation ? "p-md-3 active" : "p-md-3"}>
                <Container>
                    <Navbar.Brand href="/"><img src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                        <Nav className="me-auto">
                            <Nav.Link href="/">About</Nav.Link>
                            <NavDropdown title="Academics" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Deaf Education and Applied Studies</NavDropdown.Item>
                            <NavDropdown.Item href="/">Design and Arts</NavDropdown.Item>
                            <NavDropdown.Item href="/">Diplomacy and Governance</NavDropdown.Item>
                            <NavDropdown.Item href="/">Hotel,Restaurant and Institution Management</NavDropdown.Item>
                            <NavDropdown.Item href="/">Management and Information Technology</NavDropdown.Item>
                            <NavDropdown.Item href="/">Graduate Studies</NavDropdown.Item>
                            <NavDropdown.Item href="/">Senior High School</NavDropdown.Item>
                            <NavDropdown.Item href="/">Secondary Deaf School</NavDropdown.Item>
                            <NavDropdown.Item href="/">Benilde Antipolo</NavDropdown.Item>
                            <NavDropdown.Item href="/">Continuing Education</NavDropdown.Item>
                            </NavDropdown>
                            <Link to="/admissions" style={{textDecoration: 'none'}}>
                                <Nav.Link href="/">Admissions</Nav.Link>
                            </Link>
                            <NavDropdown title="Benildeans" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Students</NavDropdown.Item>
                            <NavDropdown.Item href="/">Faculty</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">Student Life</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                    
            </Navbar>
        </header>
       
        
         
        
    )
}

export default Navigation

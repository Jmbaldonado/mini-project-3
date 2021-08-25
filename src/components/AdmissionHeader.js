import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Logo from '../images/logo-white.png';

const AdmissionHeader = () => {
    return (
       <header>
            <Navbar expand="md" fixed="top" className="bg-green p-md-2">
                <Container>
                    <Navbar.Brand href="/" className="d-flex align-items-center"><img src={Logo} alt="" />
                        <div className="d-flex flex-column align-items-start mx-2 text-white">
                               <h3 className="nav__subtitle">De La Salle-College of Saint Benilde</h3>
                               <h2 className="nav__title">Admission Online Application</h2>
                        </div>
                    </Navbar.Brand>
                </Container>
                    
            </Navbar>
       </header>
    )
}

export default AdmissionHeader

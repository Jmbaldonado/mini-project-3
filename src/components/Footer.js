import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';
import footerLogo from '../images/footer.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <section class="background-green text-md-center">
            {/* <Container className="p-5">
                <div className=" d-flex  flex-column align-items-center justify-content-center">
                    <h2 className="filler__title">Turn your passion into a career</h2>
                    <button className="btn btn-custom-dark text-uppercase w-50">SEE COMPLETE LIST OF SPECIALIZED PROGRAMS</button>
                </div>
            </Container> */}

            <div className="filler d-flex flex-column align-items-center justify-content-center p-5 ">
                <div className="">
                    <h2 className="filler__title">Turn your passion into a career</h2>
                    <button className="btn btn-custom-dark text-uppercase">SEE COMPLETE LIST OF SPECIALIZED PROGRAMS</button>
                </div>
            </div>

            <Container fluid className="mt-5">
                <div className="row d-flex align-items-start">
                    <div className="col-md-4 d-flex flex-column align-items-center">
                        <img src={footerLogo} className="footer__logo" alt="" />
                        <h2 className="footer__title mt-3">DE LA SALLE-COLLEGE OF SAINT BENILDE</h2>
                        <p className="footer__desc"><span className="fw-bold">De La Salle-College of Saint Benilde</span> © 2021 All rights reserved.</p>
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-start justify-content-start">
                        <p className="footer__details d-flex justify-content-between align-items-center"><FontAwesomeIcon icon="map-marker-alt" className="footer__icon"/>Benilde Center for Admissions 2544 Taft Avenue, Malate, Manila, Philippines 1004</p>
                        <p className="footer__details d-flex justify-content-between align-items-center"><FontAwesomeIcon icon="envelope" className="footer__icon"/>admissions@benilde.edu.ph</p>
                        <p className="footer__details d-flex justify-content-between align-items-center"><FontAwesomeIcon icon={["fab", "facebook"]} className="footer__icon"/> DLS-CSB Admissions Center</p>
                        <p className="footer__details d-flex justify-content-between align-items-center"><FontAwesomeIcon icon={["fab", "viber"]} className="footer__icon"/> 09452788877 (Ms. Claire) / 09496683082 (Mr. Paulo) / 09452785612 (Ms. Lhor)</p>
                    </div>

                    <div className="col-md-4">
                        <div className="d-flex flex-column align-items-start">
                            <h3 className="connect__subtitle">Connect with us</h3>
                            <h2 className="connect__title">8230 - 5100</h2>
                        </div>
                        <button className="btn btn-custom-dark text-uppercase">Office Directory</button>
                        <div className="row d-flex justify-content-evenly align-items-center">
                            <div className="col-3">
                                <FontAwesomeIcon icon={["fab", "facebook-f"]} className="connect__icon"/>
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={["fab", "twitter"]} className="connect__icon"/>
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={["fab", "youtube"]} className="connect__icon"/>
                            </div>
                            <div className="col-3">
                                <FontAwesomeIcon icon={["fab", "instagram"]} className="connect__icon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
           

        </section>        
    )
}

export default Footer

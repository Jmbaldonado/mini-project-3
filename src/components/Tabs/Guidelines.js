import React from 'react';
import { Tab } from 'react-bootstrap';

const Guidelines = () => {
    return (
        <Tab.Pane eventKey="first">
                                    <div className="login__header p-3">
                                        <h2 className="header__title">Guidelines / Reminders</h2>
                                    </div>
                                    
                                    <div className="login__body p-3">
                                        <h2 className="header__subtitle">Welcome Future Benildean Student!</h2>
                                        <div className="top-announcement">
                                            <h3 className="body__title">How to access the application results?</h3>
                                                <ul>
                                                    <li>Re-login to your De La Salle-College of Saint Benilde Admissions Online Application page found on <strong>apps1.benilde.edu.ph/apply</strong></li>
                                                </ul>
                                                <ul>
                                                    <li>Click <strong>"Menu" </strong>on the upper right portion of the screen then <strong>"BEE Applicant Status"</strong> to know your application status.</li>
                                                </ul>
                                        </div>
                                        <div className="middle-announcement">
                                            <h3 className="body__title fw-bold">Dates to Remember :</h3>
                                            <strong>First Term of Academic Year (AY) 2021-2022 intake</strong>
                                            <p>First Year College, International Applicants, Deaf, and Blessed Arnould Study Assistance Program (BASAP) Applicants:</p>
                                                <ul>
                                                    <li>Regular application period : <strong> October 15, 2020 to January 15, 2021</strong> <br/>Release of results online : <strong>March 31, 2021 (First Year College and International Applicant)</strong></li>
                                                    <li>Extended application period : <strong>January 18, 2021 to June 15, 2021</strong> <br/>Release of results online : <strong>May 31, 2021 & July 15, 2021 </strong>(First Year College and International Applicant); <strong>June 30, 2021</strong> (BASAP); <strong>July 16, 2021</strong> (Deaf)</li>
                                                </ul>
                                            <p>Transferee (including International Student), Working Student and Second Degree Applicants:</p>
                                                <ul>
                                                    <li>Regular application period: <strong>April 5, 2021 to June 15, 2021</strong> <br/>Release of results online: <strong>July 15, 2021</strong></li>
                                                </ul>
                                            <p>Classes for the First Term AY 2021-2022 is on August 23, 2021.</p>
                                        </div>

                                        <div className="bottom-announcement">
                                            <h3 className="body__title fw-bold">Reminders :</h3>
                                            
                                                <ul>
                                                    <li>Please send via email <strong>undergraduate.application@benilde.edu.ph</strong> your proof of payment for the admissions processing fee in order to process your application.Non-submission of the proof of payment means no processing of application.</li>
                                                    <li>Incomplete submission of application requirements will not be processed.</li>
                                                </ul>
                                           
                                        </div>
                                       
                                    </div>
        </Tab.Pane>
    )
}

export default Guidelines

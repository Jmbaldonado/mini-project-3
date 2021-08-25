import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AdmissionHero = () => {

    const Announcement = [
        {
            id: 1,
            title: 'APPLICATION FOR 1ST TERM AY 2022-2023 IS NOW OPEN',
            descriptions: [
                {
                    id:1,
                    desc: 'The application for First Year and Transferee applicants is open until December 25, 2021 only.'
                },
            ]
        },
        
        {
            id: 2,
            title: '1ST TERM APPLICATION RESULTS',
            descriptions: [
                {
                    id:1,
                    desc: 'Re-login to your De La Salle-College of Saint Benilde Admissions Online Application page found on apps1.benilde.edu.ph/apply'
                },

                {
                    id:2,
                    desc: 'Click "Menu" on the upper right portion of the screen then "BEE Applicant Status" to know your application status.'
                },
                {
                    id:3,
                    desc: 'For admissions-related assistance, email admissions@benilde.edu.ph or call/chat us through the viber app from Mondays to Fridays from 8am to 12nn and 1pm to 5pm (excluding holidays) until August 2021.'
                },
                {
                    id:4,
                    desc: 'For scholarship results, email scholarships@benilde.edu.ph'
                }
            ]
        }
    ]

    const FAQs = [
        {
            id:1,
            title: 'Frequently Asked Questions',
            descriptions: [
                {
                    id:1,
                    desc: 'Late Application Announcement for Frosh and Transferee July 1 to 15, 2021'
                },
                {
                    id:2,
                    desc: 'How to confirm a degree program slot? (Applicable ONLY to accepted and conditionally accepted applicants.)'
                }
            ]
        },
        {
            id:2,
            title: 'List of Degree Programs',
            descriptions: [
                {
                    id:1,
                    desc: 'Degree Programs and Degree Code'
                },
                {
                    id:2,
                    desc: 'Sample Tuition and Fees SY 2019-2020'
                }
            ]
        }
    ];
    return (
        <section className="admission__hero">

            <Container className="admission__desc">
                <div className="row">
                   
                    <div className="col-md-8">

                       
                        {Announcement.map((item) => (
                            <div className="admission__item mb-2 p-4" key={item.id}>
                                <h2 className="admission__title text-uppercase">{item.title}</h2>

                                {item.descriptions.map((desc) => (
                                    
                                    <ul key={desc.id}>
                                        <li><p className="admission__itemDescription">{desc.desc}</p></li>
                                    </ul>
                                ))}
                            </div>
                        ))}

                        {FAQs.map((item) => (
                            <div className="admission__item mb-2 p-3" key={item.id}>
                                <h2 className="admission__subtitle">{item.title}</h2>

                                {item.descriptions.map((data) => (
                                    <ul key={data.id}>
                                        <li className="blue">{data.desc}</li>
                                    </ul>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="col-md-4">
                        <div className="LoginForm">
                            <div className="admission__itemHeader p-3">
                                <h2 className="admission__itemTitle text-uppercase text-center">User Login</h2>
                                </div>
                                <div className="admission__itemBody p-3">
                                    <form action="#" className="row g-3">
                                        <div className="col-md-12">
                                            <label className="form-label fw-bold">Username</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                        <div className="col-md-12">
                                            <label className="form-label fw-bold">Password</label>
                                            <input type="password" className="form-control"/>
                                        </div>
                                        <div className="col-12 d-flex justify-content-between align-items-center">
                                            <Link to="/login" style={{textDecoration: 'none'}}>
                                                <button type="button" className="btn admissionLogin__btn">Login</button>
                                            </Link>
                                            <p className="forgotPass">I forgot my password</p>
                                        </div>
                                    </form>
                                </div>

                                <div className="admission__itemFooter p-3">
                                    <div className="row">
                                        <div className="col-12 d-flex flex-md-column flex-lg-row justify-content-between align-items-center align-items-md-start">
                                            <p className="admissionFooter__desc">Do not have an active account?</p>
                                            <Link to="/register" style={{textDecoration: 'none'}}>
                                                <button className="btn admissionLogin__btn">Create Account</button>
                                            </Link>
                                        </div>
                                        <p className="admissionFooter__desc mb-0">To apply at CSB, you must first create an account. Please provide a valid e-mail address.</p>
                                    </div>
                                </div>
                       </div>

                       <div className="csbInfo my-2">
                           <div className="admission__itemHeaderLight p-3">
                                <h2 className="admission__itemTitle text-uppercase text-center">CSB OFFICE OF ADMISSIONS</h2>
                           </div>
                           <div className="admission__itemBody p-3">
                                <div className="d-flex flex-md-column flex-lg-row justify-content-evenly">
                                    <p className="admissionFooter__desc fw-bold">Contact Number :</p>
                                    <p className="admissionFooter__desc">Ms. Claire (globe) - 09452788877 <br/>Sir. Paulo (smart) - 09496683082 <br /> Ms. Lhor (globe) - 09452785612</p>
                                </div>
                                <div className="d-flex flex-md-column flex-lg-row justify-content-evenly">
                                    <p className="admissionFooter__desc fw-bold">Website :</p>
                                    <p className="admissionFooter__desc">https://www.benilde.edu.ph/</p>
                                </div>
                                <div className="d-flex flex-md-column flex-lg-row justify-content-evenly">
                                    <p className="admissionFooter__desc fw-bold">Address :</p>
                                    <p className="admissionFooter__desc">Benilde Center for Admissions <br/>2544 Taft Avenue, Malate, Manila, <br/> Philippines 1004</p>
                                </div>
                           </div>
                       </div>
                    </div>

                   
                </div>
            </Container>
        </section>
    )
}

export default AdmissionHero

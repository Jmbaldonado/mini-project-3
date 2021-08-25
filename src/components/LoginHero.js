import React, { useEffect, useState } from 'react'
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Guidelines from './Tabs/Guidelines'
import ApplicationDetails from './Tabs/ApplicationDetails'
import Personal from './Tabs/Personal'
import EntryInfo from './Tabs/EntryInfo'
import FamilyInfo from './Tabs/FamilyInfo'
import EducationalInfo from './Tabs/EducationalInfo'

const LoginHero = () => {

    // Rendered only once when app is opened
    useEffect(() => {
        getPersonalInfo();
        getEntryInfo();
        getFamilyInfo();
        getEducationInfo();
        getApplicationlInfo();
    }, [])

    // put Application Details Data
    const [applicationInfo, setApplicationInfo] = useState([]);

    const addApplicationInfo = (infos) => {
        let infoItems = [...applicationInfo, infos];
        setApplicationInfo(infoItems);
    }
    // put Personal Data
    const [personalInfo, setPersonalInfo] = useState([]);

    const addPersonalInfo = (infos) => {
        let infoItems =  [...personalInfo, infos];
        setPersonalInfo(infoItems);
    }

    // put Entry Data
    const [entryInfo, setEntryInfo] = useState([]);

    const addEntryInfo = (infos) => {
        let infoItems = [...entryInfo, infos];
        setEntryInfo(infoItems);
    }

    // put Family Data

    const [familyInfo, setFamilyInfo] = useState([]);

    const addFamilyInfo = (infos) => {
        let infoItems = [...familyInfo, infos];
        setFamilyInfo(infoItems);
    }

    // put Education Data

    const [educationInfo, setEducationInfo] = useState([]);

    const addEducationInfo = (infos) => {
        let infoItems = [...educationInfo, infos];
        setEducationInfo(infoItems);
    }

    useEffect(() => {
        
        // Save to Local Storage

        // Application Info
        const saveApplicationInfo = () => {
            localStorage.setItem("applicationInfo", JSON.stringify(applicationInfo));
        }
        saveApplicationInfo();
        //Personal Info
        const savePersonalInfo = () => {
            localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
        }
        savePersonalInfo();

        // Entry Info
        const saveEntryInfo = () => {
            localStorage.setItem("entryInfo", JSON.stringify(entryInfo));
        }
        saveEntryInfo();

        // Family Info

        const saveFamilyInfo = () => {
            localStorage.setItem("familyInfo", JSON.stringify(familyInfo));
        }
        saveFamilyInfo();

        // Education Info
        
        const saveEducationInfo = () => {
            localStorage.setItem("educationInfo", JSON.stringify(educationInfo));
        }
        saveEducationInfo();
    }, [applicationInfo,personalInfo, entryInfo,familyInfo, educationInfo]);


    // Get Data from Local Storage

    //Application Info
    const getApplicationlInfo = () => {
        if(localStorage.getItem("applicationInfo") === null) {
            localStorage.setItem("applicationInfo", JSON.stringify([]));
        } else {
            let applicationInfoLocal = JSON.parse(localStorage.getItem("applicationInfo"));
            setPersonalInfo(applicationInfoLocal);
        }
    }

    // Personal Info
    const getPersonalInfo = () => {
        if(localStorage.getItem("personalInfo") === null) {
            localStorage.setItem("personalInfo", JSON.stringify([]));
        } else {
            let infoLocal = JSON.parse(localStorage.getItem("personalInfo"));
            setPersonalInfo(infoLocal);
        }
    }

    // Entry Info
    const getEntryInfo = () => {
        if(localStorage.getItem("entryInfo") === null) {
            localStorage.setItem("entryInfo", JSON.stringify([]));
        } else {
            let entryLocal = JSON.parse(localStorage.getItem("entryInfo"));
            setEntryInfo(entryLocal);
        }
    }

    // Family Info
    const getFamilyInfo = () => {
        if(localStorage.getItem("familyInfo") === null) {
            localStorage.setItem("familyInfo", JSON.stringify([]));
        } else {
            let familyLocal = JSON.parse(localStorage.getItem("familyInfo"));
            setFamilyInfo(familyLocal);
        }
    }

    // Education Info 
    const getEducationInfo = () => {
        if(localStorage.getItem("educationInfo") === null) {
            localStorage.setItem("educationInfo", JSON.stringify([]));
        } else {
            let educationLocal = JSON.parse(localStorage.getItem("educationInfo"));
            setEducationInfo(educationLocal);
        }
    }
    return (
       <section className="admission__hero">

            <Container className="login__desc">
               <div className="login__container p-5">

                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col md={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="first" className="green-tab">Guidelines</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">Application Details</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Personal Info</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth">Entry Info</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fifth">Family Info</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="sixth">Educational Info</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Link to="/admissions" className="nav-link logout">Log Out</Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col md={9}>
                            <Tab.Content>
                                <Guidelines/>
                                <ApplicationDetails
                                    addApplicationInfo = {addApplicationInfo}
                                />
                                <Personal
                                    addPersonalInfo = {addPersonalInfo}
                                />
                                <EntryInfo
                                    addEntryInfo = {addEntryInfo}
                                />
                                <FamilyInfo
                                    addFamilyInfo = {addFamilyInfo}
                                />
                                <EducationalInfo
                                    addEducationInfo = {addEducationInfo}
                                />
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
               </div>
            </Container>
        </section>
    )
}

export default LoginHero

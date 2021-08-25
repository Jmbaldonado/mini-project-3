import React, { useEffect, useState } from 'react'
import AdmissionHeader from './components/AdmissionHeader'
import RegistrationHero from './components/RegistrationHero'

const Registration = () => {

    // render only once when app starts
    useEffect(() => {
        getRegistrationInfo();
    }, [])
    const [registrationInfo, setRegistrationInfo] = useState([]);

    const addRegistrationInfo = (infos) => {
        let infoItems = [...registrationInfo, infos];
        setRegistrationInfo(infoItems);
    }

    useEffect(() => {
        // Save to Local Storage

        const saveRegistrationInfo = () => {
            localStorage.setItem("registrationInfo", JSON.stringify(registrationInfo));
        }

        saveRegistrationInfo();
    }, [registrationInfo]);


    // get Data from Local Storage
    const getRegistrationInfo = () => {
        if(localStorage.getItem("registrationInfo") === null) {
            localStorage.setItem("registrationInfo", JSON.stringify([]));
        } else {
            let registrationLocal = JSON.parse(localStorage.getItem("registrationInfo"));
            setRegistrationInfo(registrationLocal);
        }
    }
    return (
        <div>
            <AdmissionHeader/>
            <RegistrationHero 
                addRegistrationInfo = {addRegistrationInfo}
            />
        </div>
    )
}

export default Registration

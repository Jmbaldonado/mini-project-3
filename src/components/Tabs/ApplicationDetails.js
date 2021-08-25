import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';

const ApplicationDetails = (props) => {
    const [disabled, setDisabled] = useState(true);
    const [getName, setName] = useState('Edit');
    const [getType, setType] = useState(false);
    const [state, setState] = useState({id:1, nickname: '', gender:'', currentLvl:'', academicYear:'', semester:''})
    const stateHandler = e => {
        const {name, value} = e.target;
       setState(prevState => ({...prevState, [name] : value}));
    }

    function incrementId () {
        setState(prevState => {
            return {...prevState, id: prevState.id + 1};
        })
    }

    function handleDisabled(e) {
        if(getName === 'Edit') {
            setDisabled(!disabled);
            setName('Save');
            setType(true);
            e.preventDefault();
        } else if(getName === 'Save') {
            setType(false);
            
            //prevent submitting form and saving it
            e.preventDefault();
            incrementId();
            props.addApplicationInfo(state);
            // Disabling all input field after save
            setDisabled(true);
            setName('Edit');
        }  else {
            setType(false);
            setDisabled(true);
            setName('Edit');
       }
    }
    return (
        <Tab.Pane eventKey="second">
            <div className="login__header p-3">
                <h2 className="header__title">Application Details</h2>
            </div>

            <div className="login__body p-3">
                <p> <strong className="red">Note : </strong>Don’t forget to save the form. You have 40 minutes to finish. 
                To avoid any error in your application entries, be sure you have the following ready before you create the 
                account or start accomplishing the online form:</p>

                <ul>
                    <li>Choice of degree programs;</li>
                    <li>Birth Certificate as reference to the name of the applicant;</li>
                    <li>Complete contact information of home and school address;</li>
                    <li>Parents basic and contact information;</li>
                    <li>Educational background of applicant from grade school to senior high school – name and address of school
                         and year graduated;</li>
                    <li>List of honors, awards, membership in school organizations, etc. ; and</li>
                    <li>List of conduct/deportment history if applicable.</li>
                </ul>

                <div className="row">
                    <div className="col-md-4">
                        <label className="form-label fw-bold">Applicant Number</label>
                        <input type="text" className="form-control" disabled={true} placeholder="016675" />
                    </div>
                </div>

                <p>Accomplish and print this form then submit together with all admission requirements. Only COMPLETE 
                    applications will be processed.</p>
                <p className="red">Note : This form is no longer editable once the 'Submit & Print' button has been clicked. 
                Changes will be made at the Admission Center upon submission of the hard copy. Click 'Save' button if you want to 
                review/edit the form prior to submission.</p>

                <form action="#" className="row g-3">
                    <div className="col-md-4">
                        <label className="form-label fw-bold">Applicant's Last Name</label>
                        <input type="text" className="form-control" disabled={true}placeholder="Baldonado" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-bold">Applicant's First Name</label>
                        <input type="text" className="form-control"disabled={true} placeholder="John Michael" />
                    </div>
                    <div className="col-md-4">
                        <label className="form-label fw-bold">Applicant's Middle Name</label>
                        <input type="text" className="form-control" disabled={true} placeholder="Calledo" />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Applicant's Nickname</label>
                        <input type="text" className="form-control" name="nickname" value={state.nickname} onChange={stateHandler} disabled={disabled}/>
                    </div>
                    <div className="col-md-6">
                        <label className="form-label fw-bold">Applicant's Gender</label>
                        <select className="form-select" name="gender" value={state.gender} onChange={stateHandler} disabled={disabled}>
                            <option defaultValue="selected">Choose...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-bold">Application is made as a</label>
                        <div className="form-check">
                            <input type="radio" name="currentLvl" className="form-check-input" checked={state.currentLvl === 'first_year'} value='first_year' onChange={stateHandler} disabled={disabled} />
                            <label className="form-check-label"> First Year College student</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="currentLvl" className="form-check-input" checked={state.currentLvl === 'transfer_student'} value='transfer_student' onChange={stateHandler} disabled={disabled}/>
                            <label className="form-check-label"> Transfer student</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="currentLvl" className="form-check-input"  checked={state.currentLvl === 'second_undergraduate'} value='second_undergraduate' onChange={stateHandler} disabled={disabled}/>
                            <label className="form-check-label"> 2nd Undergraduate degree student</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label className="form-label fw-bold">For Academic Year</label>
                        <select className="form-select" name="academicYear" value={state.academicYear} onChange={stateHandler} disabled={disabled}>
                            <option defaultValue="selected">Choose...</option>
                            <option value="2021-2022">2021-2022</option>
                            <option value="2022-2023">2022-2023</option>
                        </select>

                        <div className="form-check mt-3">
                            <input type="radio" name="semester" className="form-check-input"  checked={state.semester === '1st'} value='1st' onChange={stateHandler} disabled={disabled}/>
                            <label className="form-check-label">1st Trimester</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="semester" className="form-check-input" checked={state.semester === '2nd'} value='2nd' onChange={stateHandler} disabled={disabled}/>
                            <label className="form-check-label">2nd Trimester</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="semester" className="form-check-input" checked={state.semester === '3rd'} value='3rd' onChange={stateHandler} disabled={disabled}/>
                            <label className="form-check-label">3rd Trimester</label>
                        </div>
                    </div>

                    <div className="col-md-4">
                    <button type={getType ? "submit" : "button"} onClick={handleDisabled} className="btn btn-lg admissionLogin__btn mx-2 mb-1">{getName}</button>
                            <button type="button" onClick={handleDisabled} className="btn btn-lg admissionLogin__btn mx-2" disabled={disabled}>Back</button>
                    </div>
                </form>
            </div>
        </Tab.Pane>
    )
}

export default ApplicationDetails

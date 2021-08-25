import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';

const FamilyInfo = (props) => {

    const [disabled, setDisabled] = useState(true);
    const [getName, setName] = useState('Edit');
    const [getType, setType] = useState(false);
    const [state, setState] = useState({id:1, fatherName: '', fatherAddress:'', fatherCitizenship:'', fatherEmail: '', fatherContact:'',
    motherName:'', motherAddress:'', motherCitizenship:'', motherEmail:'', motherContact:'', livingStatus: '', benildeEmployee:''});

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
            props.addFamilyInfo(state);
        
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
        <Tab.Pane eventKey="fifth">
            <div className="login__header p-3">
                <h2 className="header__title">Family Information</h2>
            </div>
            <div className="login__body p-3">

                <form className="row g-3">
                    <div className="col-md-4">
                        <p className="fw-bold">Father Infomation</p>

                        <label className="form-label fw-bold">Father's Name</label>
                        <input type="text" className="form-control" name="fatherName" value={state.fatherName} onChange={stateHandler} disabled={disabled}/>

                        <label className="form-label fw-bold">Father's Address</label>
                        <textarea className="form-control" name="fatherAddress" value={state.fatherAddress} onChange={stateHandler} disabled={disabled}/>

                        <label className="form-label fw-bold">Father's Citizenship</label>
                            <select className="form-select" name="fatherCitizenship" value={state.fatherCitizenship} onChange={stateHandler} disabled={disabled}>
                                <option defaultValue="selected">Choose...</option>
                                <option value="Filipino">Filipino</option>
                                <option value="Non-Filipino">Non-Filipino</option>
                            </select>

                        <label className="form-label fw-bold">Father's Email Address</label>
                        <input type="email" className="form-control" name="fatherEmail" value={state.fatherEmail} onChange={stateHandler} disabled={disabled} />
                        <label className="form-label fw-bold">Father's Contact Number</label>
                        <input type="text" className="form-control" name="fatherContact" value={state.fatherContact} onChange={stateHandler} disabled={disabled}/>
                    </div>
                    <div className="col-md-4">
                        <p className="fw-bold">Mother's Infomation</p>

                        <label className="form-label fw-bold">Mother's Name</label>
                        <input type="text" className="form-control" name="motherName" value={state.motherName} onChange={stateHandler} disabled={disabled}/>

                        <label className="form-label fw-bold">Mother's Address</label>
                        <textarea className="form-control" name="motherAddress" value={state.motherAddress} onChange={stateHandler} disabled={disabled}/>

                        <label className="form-label fw-bold">Mother's Citizenship</label>
                            <select className="form-select" name="motherCitizenship" value={state.motherCitizenship} onChange={stateHandler} disabled={disabled}>
                                <option defaultValue="selected">Choose...</option>
                                <option value="Filipino">Filipino</option>
                                <option value="Non-Filipino">Non-Filipino</option>
                            </select>

                        <label className="form-label fw-bold">Mother's Email Address</label>
                        <input type="email" className="form-control" name="motherEmail" value={state.motherEmail} onChange={stateHandler} disabled={disabled}/>
                        <label className="form-label fw-bold">Mother's Contact Number</label>
                        <input type="text" className="form-control" name="motherContact" value={state.motherContact} onChange={stateHandler} disabled={disabled}/>
                    </div>

                    <div className="col-md-4">
                        <label className="form-label fw-bold">Are you living with parents?</label>
                        <div className="form-check mt-3">
                            <input type="radio" name="livingStatus" className="form-check-input" checked={state.livingStatus === 'yes'} value='yes' onChange={stateHandler} disabled={disabled}/>
                            <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="livingStatus" className="form-check-input" checked={state.livingStatus === 'no'} value='no' onChange={stateHandler} disabled={disabled}/>
                            <label className="form-check-label">No, Please accomplish the <a href="/">Benilde Legal Guardianship Form</a></label>
                        </div>
                        <label className="form-label fw-bold">Is your father or mother an employee of Benilde?</label>
                        <div className="form-check mt-3">
                            <input type="radio" name="benildeEmployee" className="form-check-input" checked={state.benildeEmployee === 'yes'} value='yes' onChange={stateHandler} disabled={disabled}/>
                            <label className="form-check-label">Yes</label>
                        </div>
                        <div className="form-check">
                            <input type="radio" name="benildeEmployee" className="form-check-input" checked={state.benildeEmployee === 'no'} value='no' onChange={stateHandler} disabled={disabled}/>
                            <label className="form-check-label">No</label>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <button type={getType ? "submit": "button"} onClick={handleDisabled} className="btn admissionLogin__btn mx-2">{getName}</button>
                        <button type="button" onClick={handleDisabled} className="btn admissionLogin__btn mx-2" disabled={disabled}>Back</button>
                    </div>

                </form>
               
            </div>
        </Tab.Pane>
    )
}

export default FamilyInfo

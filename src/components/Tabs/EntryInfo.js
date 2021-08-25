import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';

const EntryInfo = (props) => {

    const [disabled, setDisabled] = useState(true);
    const [getName, setName] = useState('Edit');
    const [getType, setType] = useState(false);
    const [state, setState] = useState({id:1, firstChoice: '', secondChoice: '', thirdChoice: ''});

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
            props.addEntryInfo(state);

            // Disabling all input field after save
            setDisabled(true);
            setName('Edit');
            
       }
       else {
            setType(false);
            setDisabled(true);
            setName('Edit');
       }
    }
    return (
        <Tab.Pane eventKey="fourth">
            <div className="login__header p-3">
                <h2 className="header__title">Entry Information</h2>
            </div>
            <div className="login__body p-3">
                <form className="row g-3">
                    <div className="col-md-6">
                        <p className="fw-bold">Degree Program</p>

                        <label className="form-label fw-bold">1st Choice</label>
                        <input type="text" className = "form-control" hidden defaultValue = {state.id}/>
                            <select className="form-select" name="firstChoice" value={state.firstChoice} onChange={stateHandler} disabled={disabled}>
                                <option defaultValue="selected">Choose...</option>
                                <option value="AB-DIA">BACHELOR OF ARTS IN DIPLOMACY AND INTERNATIONAL AFFAIRS</option>
                                <option value="AB-FDM">BACHELOR OF ARTS MAJOR IN FASHION DESIGN AND MERCHANDISING</option>
                                <option value="BSBA-BM">BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN BUSINESS MANAGEMENT</option>
                                <option value="BS-REM">BACHELOR OF SCIENCE IN REAL STATE MANAGEMENT</option>
                            </select>
                        <label className="form-label fw-bold">2nd Choice</label>
                            <select className="form-select" name="secondChoice" value={state.secondChoice} onChange={stateHandler} disabled={disabled}>
                                <option defaultValue="selected">Choose...</option>
                                <option value="AB-DIA">BACHELOR OF ARTS IN DIPLOMACY AND INTERNATIONAL AFFAIRS</option>
                                <option value="AB-FDM">BACHELOR OF ARTS MAJOR IN FASHION DESIGN AND MERCHANDISING</option>
                                <option value="BSBA-BM">BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN BUSINESS MANAGEMENT</option>
                                <option value="BS-REM">BACHELOR OF SCIENCE IN REAL STATE MANAGEMENT</option>
                            </select>
                        <label className="form-label fw-bold">3rd Choice</label>
                            <select className="form-select" name="thirdChoice" value={state.thirdChoice} onChange={stateHandler} disabled={disabled}>
                                <option defaultValue="selected">Choose...</option>
                                <option value="AB-DIA">BACHELOR OF ARTS IN DIPLOMACY AND INTERNATIONAL AFFAIRS</option>
                                <option value="AB-FDM">BACHELOR OF ARTS MAJOR IN FASHION DESIGN AND MERCHANDISING</option>
                                <option value="BSBA-BM">BACHELOR OF SCIENCE IN BUSINESS ADMINISTRATION MAJOR IN BUSINESS MANAGEMENT</option>
                                <option value="BS-REM">BACHELOR OF SCIENCE IN REAL STATE MANAGEMENT</option>
                            </select>
                    </div>
                    <div className="col-md-6">
                        <p className="fw-bold">Degree Code</p>
                        <label className="form-label fw-bold">1st Choice</label>
                        <input type="text"  value={state.firstChoice} className="form-control" disabled={true}/>
                        <label className="form-label fw-bold">2nd Choice</label>
                        <input type="text"  value={state.secondChoice} className="form-control" disabled={true}/>
                        <label className="form-label fw-bold">3rd Choice</label>
                        <input type="text" value={state.thirdChoice} className="form-control" disabled={true}/>
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

export default EntryInfo

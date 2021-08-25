import React, { useState } from 'react'
import { Tab } from 'react-bootstrap'

const Personal = (props) => {

   const [disabled, setDisabled] = useState(true);
   const [getName, setName] = useState('Edit');
   const [getType, setType] = useState(false);
   const [state, setState] = useState({id: 1, mailing: '', zipMail: '', permanent: '', zipPermanent: '', birthdate: '', POB: '',
    age: '', citizenship: '', civilStatus: '', religion: '', emailAddress: '', cellphone: '', telephone: ''});

   const stateHandler = e => {
       const {name, value} = e.target;
       setState(prevState => ({...prevState, [name] : value}));
   }

   function incrementId () {
       setState(prevState => {
           return {...prevState, id: prevState.id + 1};
       })
   }
   function handleDisabled (e) {
       if(getName === 'Edit') {
           setDisabled(!disabled);
           setType(true);
           setName('Save');
           e.preventDefault();
           
        } else if(getName === 'Save') {
            setType(false);
            
            //prevent submitting form and saving it
            e.preventDefault();
            incrementId();
            props.addPersonalInfo(state);

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
        <Tab.Pane eventKey="third">
            <div className="login__header p-3">
                <h2 className="header__title">Personal Information</h2>
            </div>
            <div className="login__body p-3">
                    <form className="row g-3">
                        <div className="col-md-8">
                            <input type="text" className = "form-control" hidden defaultValue = {state.id}/>
                            <label className="form-label fw-bold">Mailing Address</label>
                            <textarea className="form-control" name="mailing" value={state.mailing} onChange={stateHandler} disabled={disabled}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">ZIP Code</label>
                            <input type="text" className="form-control" name="zipMail" value={state.zipMail} onChange={stateHandler} disabled={disabled}/>
                        </div>
                        <div className="col-md-8">
                            <label className="form-label fw-bold">Permanent Address</label>
                            <textarea className="form-control" name="permanent" value={state.permanent} onChange={stateHandler} disabled={disabled}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">ZIP Code</label>
                            <input type="text" className="form-control" name="zipPermanent" value={state.zipPermanent} onChange={stateHandler} disabled={disabled}/>
                        </div>

                        <div className="col-md-4">
                            <label className="form-label fw-bold">Date of Birth</label>
                            <input type="date" className="form-control" name="birthdate" value={state.birthdate} onChange={stateHandler} disabled={disabled}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Place of Birth</label>
                            <input type="text" className="form-control" name="POB" value={state.POB} onChange={stateHandler} disabled={disabled}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Age</label>
                            <input type="text" className="form-control" name="age" value={state.age} onChange={stateHandler} disabled={disabled} />
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Citizenship</label>
                                <select className="form-select" name="citizenship" value={state.citizenship} onChange={stateHandler} disabled={disabled}>
                                    <option defaultValue="selected">Choose...</option>
                                    <option value="Filipino">Filipino</option>
                                    <option value="Non-Filipino">Non-Filipino</option>
                                </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Civil Status</label>
                                <select className="form-select" name="civilStatus" value={state.civilStatus} onChange={stateHandler} disabled={disabled}>
                                    <option defaultValue="selected">Choose...</option>
                                    <option value="Single">Single</option>
                                    <option value="Married">Married</option>
                                </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Religion</label>
                                <select className="form-select" name="religion" value={state.religion} onChange={stateHandler} disabled={disabled}>
                                    <option defaultValue="selected">Choose...</option>
                                    <option value="catholic">Roman Catholic</option>
                                    <option value="non-catholic">Non-Roman Catholic</option>
                                </select>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Email Address</label>
                            <input type="email" className="form-control" name="emailAddress" value={state.emailAddress} onChange={stateHandler} disabled={disabled}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Cellphone No.</label>
                            <input type="text" className="form-control" name="cellphone" value={state.cellphone} onChange={stateHandler} disabled={disabled}/>
                        </div>
                        <div className="col-md-4">
                            <label className="form-label fw-bold">Telephone No.</label>
                            <input type="text" className="form-control" name="telephone" value={state.telephone} onChange={stateHandler} disabled={disabled}/>
                        </div>
                        <div className="col-md-4">
                            <button  type={getType ? 'submit' : 'button'} onClick={handleDisabled} className="btn admissionLogin__btn mx-2">{getName}</button>
                            <button  type="button" onClick={handleDisabled} className="btn admissionLogin__btn mx-2"  disabled={disabled}>Back</button>
                        </div>
                    </form>
                </div>
        </Tab.Pane>
    )
}

export default Personal

import React, { useState } from 'react'; 
import { Container } from 'react-bootstrap';
import { Link, Redirect, useHistory } from 'react-router-dom';

const RegistrationHero = (props) => {
    const history = useHistory();
    const [state, setState] = useState({id:1, givenname:'', middlename:'', lastname:'', username:'', password:'', 
                                        confirmPassword:'', suffix: '', secretQuestion:'', secretAnswer:''});

    const stateHandler = e => {
        const {name, value} = e.target;
        setState(prevState => ({...prevState, [name] : value}));
    }

    function incrementId() {
        setState(prevState => {
            return {
                ...prevState, id: prevState.id + 1
            }
        })
    }

    const submitHandler = e => {
        e.preventDefault();
        incrementId();
        if(props.addRegistrationInfo(state)) {
            <Redirect to='/admissions'/>
        }
        
    }
    return (
        <section className="admission__hero">

            <Container className="registration__desc">
                <div className="row">
                    <div className="col-md-12">
                      <div className="RegistrationForm">
                          <div className="registration__header p-2">
                              <h2 className="header__title text-uppercase text-center">REGISTER ADMISSION PORTAL ACCOUNT</h2>
                          </div>

                            <div className="body__header p-2">
                                <p className="body__headerDesc"><strong className="red">Note : </strong>Be sure that your registered email is active and correctly typed. Do not create double or multiple accounts. Create and use only one account. Remember your password and passphrase. Forgotten password and passphrase will cause a delay in the retrieval of your application results later on.</p>
                            </div>
                          <div className="registration__body p-3">
                              <form action="#" className="row g-3">
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold">Applicant’s Last Name</label>
                                        <input type="text" className="form-control" name="lastname" value={state.lastname} onChange={stateHandler}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold">Applicant’s Given Name</label>
                                        <input type="text" className="form-control" name="givenname" value={state.givenname} onChange={stateHandler}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold">Applicant’s Middle Name</label>
                                        <input type="text" className="form-control" name="middlename" value={state.middlename} onChange={stateHandler}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold">Username <small className="red">(Please use a valid email address)</small></label>
                                        <input type="text" className="form-control" name="username" value={state.username} onChange={stateHandler}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold">Password</label>
                                        <input type="password" className="form-control" name="password" value={state.password} onChange={stateHandler}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold">Confirm Password</label>
                                        <input type="password" className="form-control" name="confirmPassword" value={state.confirmPassword} onChange={stateHandler}/>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold">Suffix</label>
                                        <select className="form-select" name="suffix" value={state.suffix} onChange={stateHandler}>
                                            <option defaultValue="selected">Choose...</option>
                                            <option value="Sr.">Sr.</option>
                                            <option value="Jr.">Jr.</option>
                                            <option value="I">I</option>
                                            <option value="II">II</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <label className="form-label fw-bold">Secret Question</label>
                                        <select className="form-select" name="secretQuestion" value={state.secretQuestion} onChange={stateHandler}>
                                            <option defaultValue="selected">Choose...</option>
                                            <option value="question1">What is the name of your favorite grandparent?</option>
                                            <option value="question2">What was the name of your elementary school?</option>
                                            <option value="question3">What was the name of your favorite teacher?</option>
                                            <option value="question4">Who is your favorite superhero?</option>
                                        </select>
                                    </div>

                                    <div className="col-md-4">
                                        <label className="form-label fw-bold">Secret Answer</label>
                                        <input type="text" className="form-control" name="secretAnswer" value={state.secretAnswer} onChange={stateHandler}/>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <div className="d-grid gap-2 col-md-4 mx-2">
                                            <button type="submit" onClick={submitHandler} className="btn btn-lg admissionLogin__btn">Register</button>
                                        </div>
                                        
                                        <div className="d-grid gap-2 col-md-4 mx-2">
                                        <Link to="/admissions" className="btn btn-lg admissionLogin__btn">
                                                Back
                                            </Link>
                                        </div>
                                        
                                    </div>
                              </form>
                          </div>
                      </div>
                    </div>
                   
                </div>
            </Container>
        </section>
    )
}

export default RegistrationHero

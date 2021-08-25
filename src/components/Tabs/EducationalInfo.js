import React, { useState } from 'react';
import { Tab } from 'react-bootstrap';

const EducationalInfo = (props) => {
    const [disabled, setDisabled] = useState(true);
    const [getName, setName] = useState('Edit');
    const [getType, setType] = useState(false);
    const [state, setState] = useState({id:1, grade6Name: '', grade6Address: '', grade6Year: '', grade7Name: '', grade7Address: '', grade7Year: '',
                                        grade8Name: '', grade8Address: '', grade8Year: '', grade9Name: '', grade9Address: '', grade9Year: '',
                                        grade10Name: '', grade10Address: '', grade10Year: '', grade11Name: '', grade11Address: '', grade11Year: '',
                                        grade12Name: '', grade12Address: '', grade12Year: '',strand: ''});

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
            props.addEducationInfo(state);
        
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
        <Tab.Pane eventKey="sixth">
            <div className="login__header p-3">
                <h2 className="header__title">Educational Information</h2>
            </div>

            <div className="login__body p-3">
                <form className="row g-3">
                    <table className="table align-middle text-center">
                        <thead className="table__header">
                            <tr>
                                <th>Indicator</th>
                                <th>Grade Level</th>
                                <th>Name of School</th>
                                <th>Address of School</th>
                                <th>Year Graduated / SY Attended</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>Grade School</td>
                                <td>Grade 6</td>
                                <td><input type="text" className="form-control" placeholder="Name of School" name="grade6Name" value={state.grade6Name} onChange={stateHandler} disabled={disabled}/></td>
                                <td><input type="text" className="form-control" placeholder="Address of School" name="grade6Address" value={state.grade6Address} onChange={stateHandler} disabled={disabled} /></td>
                                <td>
                                    <select className="form-select" name="grade6Year" value={state.grade6Year} onChange={stateHandler} disabled={disabled}>
                                        <option defaultValue="selected">Choose...</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="4">Junior High School</td>
                                <td>Grade 7</td>
                                <td><input type="text" className="form-control" placeholder="Name of School" name="grade7Name" value={state.grade7Name} onChange={stateHandler} disabled={disabled}/></td>
                                <td><input type="text" className="form-control" placeholder="Address of School" name="grade7Address" value={state.grade7Address} onChange={stateHandler} disabled={disabled} /></td>
                                <td>
                                    <select className="form-select" name="grade7Year" value={state.grade7Year} onChange={stateHandler} disabled={disabled}>
                                        <option defaultValue="selected">Choose...</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                    </select>
                                </td>
                            </tr>

                            <tr>
                                <td>Grade 8</td>
                                <td><input type="text" className="form-control" placeholder="Name of School" name="grade8Name" value={state.grade8Name} onChange={stateHandler} disabled={disabled}/></td>
                                <td><input type="text" className="form-control" placeholder="Address of School" name="grade8Address" value={state.grade8Address} onChange={stateHandler} disabled={disabled} /></td>
                                <td>
                                    <select className="form-select" name="grade8Year" value={state.grade8Year} onChange={stateHandler} disabled={disabled}>
                                        <option defaultValue="selected">Choose...</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Grade 9</td>
                                <td><input type="text" className="form-control" placeholder="Name of School" name="grade9Name" value={state.grade9Name} onChange={stateHandler} disabled={disabled}/></td>
                                <td><input type="text" className="form-control" placeholder="Address of School" name="grade9Address" value={state.grade9Address} onChange={stateHandler} disabled={disabled} /></td>
                                <td>
                                    <select className="form-select" name="grade9Year" value={state.grade9Year} onChange={stateHandler} disabled={disabled}>
                                        <option defaultValue="selected">Choose...</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Grade 10</td>
                                <td><input type="text" className="form-control" placeholder="Name of School" name="grade10Name" value={state.grade10Name} onChange={stateHandler} disabled={disabled}/></td>
                                <td><input type="text" className="form-control" placeholder="Address of School" name="grade10Address" value={state.grade10Address} onChange={stateHandler} disabled={disabled} /></td>
                                <td>
                                    <select className="form-select" name="grade10Year" value={state.grade10Year} onChange={stateHandler} disabled={disabled}>
                                        <option defaultValue="selected">Choose...</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td rowSpan="2">Senior High School</td>
                                <td>Grade 11</td>
                                <td><input type="text" className="form-control" placeholder="Name of School" name="grade11Name" value={state.grade11Name} onChange={stateHandler} disabled={disabled}/></td>
                                <td><input type="text" className="form-control" placeholder="Address of School" name="grade11Address" value={state.grade11Address} onChange={stateHandler} disabled={disabled} /></td>
                                <td>
                                    <select className="form-select" name="grade11Year" value={state.grade11Year} onChange={stateHandler} disabled={disabled}>
                                        <option defaultValue="selected">Choose...</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>Grade 12</td>
                                <td><input type="text" className="form-control" placeholder="Name of School" name="grade12Name" value={state.grade12Name} onChange={stateHandler} disabled={disabled}/></td>
                                <td><input type="text" className="form-control" placeholder="Address of School" name="grade12Address" value={state.grade12Address} onChange={stateHandler} disabled={disabled} /></td>
                                <td>
                                    <select className="form-select" name="grade12Year" value={state.grade12Year} onChange={stateHandler} disabled={disabled}>
                                        <option defaultValue="selected">Choose...</option>
                                        <option value="2021">2021</option>
                                        <option value="2020">2020</option>
                                        <option value="2019">2019</option>
                                        <option value="2018">2018</option>
                                        <option value="2017">2017</option>
                                        <option value="2016">2016</option>
                                        <option value="2015">2015</option>
                                        <option value="2014">2014</option>
                                        <option value="2013">2013</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="d-flex align-items-start">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Senior High School Strand/Track</label>
                            <select className="form-select" name="strand" value={state.strand} onChange={stateHandler} disabled={disabled}>
                                <option defaultValue="selected">Choose...</option>
                                <option value="STEM">ACAD - STEM</option>
                                <option value="ABM">ACAD - ABM</option>
                                <option value="HUMSS">ACAD - HUMSS</option>
                                <option value="GAS">ACAD - GAS</option>
                                <option value="TVL">TVL</option>
                                <option value="SPORTS">SPORTS</option>
                            </select>
                        </div>

                        <div className="col-md-6 d-flex flex-column flex-md-row align-items-start">
                            <button type={getType ? "submit" : "button"} onClick={handleDisabled} className="btn btn-lg admissionLogin__btn mx-2 mb-1">{getName}</button>
                            <button type="button" onClick={handleDisabled} className="btn btn-lg admissionLogin__btn mx-2" disabled={disabled}>Back</button>
                        </div>
                    </div>
                </form>
            </div>
        </Tab.Pane>
    )
}

export default EducationalInfo

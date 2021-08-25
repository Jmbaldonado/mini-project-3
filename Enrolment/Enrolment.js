import React from 'react';
import {Grid} from '@material-ui/core';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import EnrolValidate from './EnrolValidate';
import Validate from './Validate';

const Enrolment = () => {
    const { handleChange, handleSubmit, values,errors} = EnrolValidate(Validate);
    const schoolStyle={background:'black',color:"white", height:'20vh',padding:'5px'}
    const imageStyle={padding:'5px', margin:'5px',position:'relative',top:'10px'}
    const info ={position:'relative', left:'135px',top:'-100px',fontFamily: 'Noto Sans JP'}
    const sis ={position:'relative', left:'145px',top:'-80px',fontFamily: 'Rock Salt', fontSize:'2.5rem'}

    
  return (
    <div>
      
      <div style={{background:'white'}}>
        <Grid style={schoolStyle}> 
                <img src="/school.PNG" alt="school" height="100" width="120" style={imageStyle}/>
                <h1 style={sis}>SIS</h1>
                <p style={info}>SCHOOL INFORMATION SERVICE</p>
        </Grid>
        
            <p style={{textAlign:'center',fontSize:'30px'}}>APPLICATION FOR ADMISSION</p>
          <div style={{margin:'20px'}}>
            <form  onSubmit={handleSubmit} className='form'>
            
                <Row>
                    <Col sm>
                        Term Applied
                        <Form.Select onChange={handleChange} value={values.termApplied} name='termApplied'>
                            <option >Open this select menu</option>
                            <option value="1st Semester 2021-2022">1st Semester 2021-2022</option>
                            <option value="2nd Semester 2021-2022">2nd Semester 2021-2022</option>
                        </Form.Select>
                    </Col>
                    <Col sm>
                    Student Type
                        <Form.Select onChange={handleChange} value={values.studentType} name='studentType'>
                            <option>Type</option>
                            <option value="University Graduate/Completer">University Graduate/Completer</option>
                            <option value="New Student/Pupil">New Student/Pupil</option>
                            <option value="Transferee">Transferee</option>
                            <option value="Cross-Enrollee">Cross-Enrollee</option>
                        </Form.Select>
                    </Col>
                    
                    <Col sm>
                    Program Applied
                        <Form.Select onChange={handleChange} value={values.programApplied} name='programApplied'>
                            <option>None</option>
                            <option value="BS in Electronics Engineering">BS in Electronics Engineering</option>
                            <option value="BS in Electrical Engineering">BS in Electrical Engineering</option>
                            <option value="BS in Accountancy">BS in Accountancy</option>
                            <option value="BS in Biology">BS in Biology</option>
                        </Form.Select>
                    </Col>
                </Row>
                   
                <Row>
                    <Col sm>
                    Last Name
                        <Form.Control type="text" placeholder="Last Name" name='LastName'
                        onChange={handleChange} value={values.LastName}
                        />
                        {errors.LastName && <p style={{color: 'red'}}>{errors.LastName}</p>}
                    </Col>
                    <Col sm>
                    First Name
                        <Form.Control type="text" placeholder="First Name" name='FirstName'
                        onChange={handleChange} value={values.FirstName}
                        />
                        {errors.FirstName && <p style={{color: 'red'}}>{errors.FirstName}</p>}
                    </Col>
                    <Col sm>
                    Middle Name
                        <Form.Control type="text" placeholder="Middle Name" name='MiddleName'
                        onChange={handleChange} value={values.MiddleName}
                        />
                        {errors.MiddleName && <p style={{color: 'red'}}>{errors.MiddleName}</p>}
                    </Col>
                </Row>
                    
                <Row>
                    <Col sm>
                    Gender
                        <Form.Select onChange={handleChange} value={values.gender} name='gender'>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </Form.Select>
                    </Col>
                    <Col sm>
                    Date of Birth
                        <Form.Control type="date" onChange={handleChange} value={values.dateOfBirth} name='dateOfBirth'/>
                    </Col>
                    <Col sm>
                    Civil Status
                        <Form.Select onChange={handleChange} value={values.civilStatus} name='civilStatus'>
                            <option value="Single">Single</option>
                            <option value="Married">Married</option>
                            <option value="Separated">Separated</option>
                            <option value="Widower">Widower</option>
                        </Form.Select>
                    </Col>
                </Row>
                
                <Row>
                    <Col sm>
                    Religion
                        <Form.Select onChange={handleChange} value={values.religion} name='religion'>
                            <option>Not in the list...</option>
                            <option value="Roman Catholic">Roman Catholic</option>
                            <option value="Jehova's Witness">Jehova's Witness</option>
                            <option value="Church of Christ">Church of Christ</option>
                        </Form.Select>
                    </Col>
                    
                    <Col sm>
                    Nationality
                        <Form.Select onChange={handleChange} value={values.nationality} name='nationality'>
                            <option value="Filipino">Filipino</option>
                            <option value="American">American</option>
                            <option value="Canadian">Canadian</option>
                            <option value="Australian">Australian</option>
                        </Form.Select>
                    </Col>
                    
                </Row>
                    
                <Row>
                    <Col sm>
                    Landline No
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.landLineNo} name='landLineNo'
                        />
                        {errors.landLineNo && <p style={{color: 'red'}}>{errors.landLineNo}</p>}
                    </Col>
                    <Col sm>
                    Mobile Number
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.mobileNumber} name='mobileNumber'
                        />
                        {errors.mobileNumber && <p style={{color: 'red'}}>{errors.mobileNumber}</p>}
                    </Col>
                    <Col sm>
                    Email Address
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.emailAddress} name='emailAddress'
                        />
                        {errors.emailAddress && <p style={{color: 'red'}}>{errors.emailAddress}</p>}
                    </Col>
                </Row>
                
                <br/>
                <Row>
                <h3>GUARDIAN</h3>
    
                    <Col sm>
                    Guardian's Name
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.guardianName} name='guardianName'
                        />
                        {errors.guardianName && <p style={{color: 'red'}}>{errors.guardianName}</p>}
                    </Col>
                    <Col sm>
                    Guardian's Relationship
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.guardianRelation} name='guardianRelation'
                        />
                        {errors.guardianRelation && <p style={{color: 'red'}}>{errors.guardianRelation}</p>}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    Guardian's Address
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.guardianAddress} name='guardianAddress'
                        />
                        {errors.guardianAddress && <p style={{color: 'red'}}>{errors.guardianAddress}</p>}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    Guardian's Landline #
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.guardianLandLine} name='guardianLandLine'
                        />
                        {errors.guardianLandLine && <p style={{color: 'red'}}>{errors.guardianLandLine}</p>}
                    </Col>
                    <Col sm>
                    Guardian's Mobile #
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.guardianMobile} name='guardianMobile'
                        />
                        {errors.guardianMobile && <p style={{color: 'red'}}>{errors.guardianMobile}</p>}
                    </Col>
                    <Col sm>
                    Guardian's Email
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.guardianEmail} name='guardianEmail'
                        />
                        {errors.guardianEmail && <p style={{color: 'red'}}>{errors.guardianEmail}</p>}
                    </Col>
                </Row>
                <br/>
                <h3>EDUCATIONAL BACKGROUND</h3>
                <Row>
                    <Col sm={10}>
                    Elementary School Graduated
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.elemSchoolGraduated} name='elemSchoolGraduated'
                        />
                        {errors.elemSchoolGraduated && <p style={{color: 'red'}}>{errors.elemSchoolGraduated}</p>}
                    </Col>
                    <Col sm={2}>
                    SY Completed
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.elemSchoolCompleted} name='elemSchoolCompleted'
                        />
                        {errors.elemSchoolCompleted && <p style={{color: 'red'}}>{errors.elemSchoolCompleted}</p>}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    Elementary Address
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.elemSchoolAddress} name='elemSchoolAddress'
                        />
                        {errors.elemSchoolAddress && <p style={{color: 'red'}}>{errors.elemSchoolAddress}</p>}
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm={10}>
                    Junior High School Graduated
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.juniorHighSchoolGraduated} name='juniorHighSchoolGraduated'
                        />
                        {errors.juniorHighSchoolGraduated && <p style={{color: 'red'}}>{errors.juniorHighSchoolGraduated}</p>}
                    </Col>
                    <Col sm={2}>
                    SY Completed
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.juniorHighSyCompleted} name='juniorHighSyCompleted'
                        />
                        {errors.juniorHighSyCompleted && <p style={{color: 'red'}}>{errors.juniorHighSyCompleted}</p>}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    Junior High School Address
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.juniorHighAddress} name='juniorHighAddress'
                        />
                        {errors.juniorHighAddress && <p style={{color: 'red'}}>{errors.juniorHighAddress}</p>}
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm={10}>
                    Senior High School Graduated
                        <Form.Control type="text" placeholder=" " 
                         onChange={handleChange} value={values.seniorHighGraduated} name='seniorHighGraduated'
                         />
                         {errors.seniorHighGraduated && <p style={{color: 'red'}}>{errors.seniorHighGraduated}</p>}
                    </Col>
                    <Col sm={2}>
                    SY Completed
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.seniorHighSyCompleted} name='seniorHighSyCompleted'
                        />
                        {errors.seniorHighSyCompleted && <p style={{color: 'red'}}>{errors.seniorHighSyCompleted}</p>}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    Senior High School Address
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.seniorHighAddress} name='seniorHighAddress'
                        />
                        {errors.seniorHighAddress && <p style={{color: 'red'}}>{errors.seniorHighAddress}</p>}
                    </Col>
                    
                </Row>
                <Row>
                    <Col sm={10}>
                    Last School Attended
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.lastSchoolAttended} name='lastSchoolAttended'
                        />
                        {errors.lastSchoolAttended && <p style={{color: 'red'}}>{errors.lastSchoolAttended}</p>}
                    </Col>
                    <Col sm={2}>
                    Last SY Completed
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.lastSchoolSyAttended} name='lastSchoolSyAttended'
                        />
                        {errors.lastSchoolSyAttended && <p style={{color: 'red'}}>{errors.lastSchoolSyAttended}</p>}
                    </Col>
                </Row>
                <Row>
                    <Col sm>
                    School Address
                        <Form.Control type="text" placeholder=" " 
                        onChange={handleChange} value={values.schoolAddress} name='schoolAddress'
                        />
                        {errors.schoolAddress && <p style={{color: 'red'}}>{errors.schoolAddress}</p>}
                    </Col>
                    
                </Row>
                <br/>
                <Col md={6}>
                <Button onClick={ ()=> values()} type="submit" value="Submit" variant="primary" size="md" > Submit  </Button>
                </Col>
            </form>
            </div>
        </div>
        
      
    </div>
    
  )
}
export default Enrolment;
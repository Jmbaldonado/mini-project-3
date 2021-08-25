import React from 'react';
import {Avatar, Grid,Paper,TextField,Button} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Login from './Login';
import validate from './validateInfo';



const Form =()=> {
    const { handleChange, handleSubmit, values,errors} = Login(validate);   
    const paperStyle={padding:20, height:'65vh',background:'#59aa9ba8'}
    const avatarStyle={background:'green'}
    const btnstyle={margin:'8px 0'}
    const gridstyle={margin:"20px auto"}

    
    return(
        <div style={{background:'#59aa9ba8'}}>
            <form onSubmit={handleSubmit} className='form' >
                <Grid container spacing={2} style={gridstyle}>
                    <Grid item xs={2}>
                        <Paper ></Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper style={paperStyle}>
                            <Grid align='center'>
                                <Avatar style={avatarStyle}><LockIcon/></Avatar>
                                <h2>Sign In</h2>
                            </Grid>
                            <TextField 
                                label='ID Number' 
                                placeholder='Enter ID Number' 
                                id='idNumber' 
                                name='idNumber' onChange={handleChange} value={values.iDnumber} fullWidth
                            />
                             {errors.idNumber && <p>{errors.idNumber}</p>}
                            <TextField 
                                label='Password' 
                                placeholder='Enter Password' 
                                type='password' 
                                id='password' 
                                name='password' onChange={handleChange} value={values.password} fullWidth 
                            />
                             {errors.password && <p>{errors.password}</p>}
                            < FormControlLabel
                                control={
                                <Checkbox
                                    name="checkedB"
                                    color="primary"
                                />
                                }
                                label="Rember Me"
                            />
                            <Button type='Submit' color='primary' variant="contained" style={btnstyle} fullWidth >Sign in</Button>
                            
                        </Paper>
                    </Grid>   
                </Grid> 
            </form>
            
        </div>
    )
}

export default Form;
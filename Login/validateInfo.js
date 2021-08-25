export default function validateInfo(values){

    let errors = {};

    if (!values.idNumber){
        errors.idNumber ="ID number required";
        
    } 
    if(!values.password){
        errors.password ="Password Required";
        
    } 
    if (values.idNumber !=='123' && values.password ==='user') {
        alert('Incorrect ID number')
        return false
    }
    if (values.idNumber ==='123' && values.password !=='user') {
        alert('Incorrect password!')
        return false
    }
    if (values.idNumber !=='123' && values.password !=='user') {
        alert('Incorrect ID number and password!')
        return false
    }
    if (values.idNumber ==='123' && values.password ==='user') {
        alert('You are successfully Logged in')
        return true;
    }
    
    return errors;
}

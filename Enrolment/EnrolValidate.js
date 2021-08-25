
import { useState, useEffect } from 'react';


const EnrolValidate = (validate) => {
    const [values, setValues] = useState(()=>{
    const saved = localStorage.getItem("values");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
   
  useEffect (()=>{
      window.localStorage.setItem('values',JSON.stringify(values))
  },[values]);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    
  };


  return { handleChange, handleSubmit, values, errors };
};

export default EnrolValidate;
export default function Validate(values){

    let errors = {};

     
    if (!values.LastName){
        errors.LastName ="Last Name required!";
        
    } 
    if(!values.FirstName){
        errors.FirstName ="First Name Required!";
        
    } 
    if(!values.MiddleName){
        errors.MiddleName ="Middle Name Required!";
        
    } 
    if(!values.landLineNo){
        errors.landLineNo ="Land line number Required!";
        
    }
    if(!values.mobileNumber){
        errors.mobileNumber ="Middle Name Required!";
        
    }
    if(!values.emailAddress){
        errors.emailAddress ="Email Address Required!";
        
    }
    if(!values.guardianName){
        errors.guardianName ="Guardian Name Required!";
        
    }
    if(!values.guardianRelation){
        errors.guardianRelation ="Guardian Relation Required!";
        
    }
    if(!values.guardianAddress){
        errors.guardianAddress ="Guardian Address Required!";
        
    }
    if(!values.guardianLandLine){
        errors.guardianLandLine ="Guardian Land line number Required!";
        
    }
    if(!values.guardianMobile){
        errors.guardianMobile ="Guardian mobile number Required!";
        
    }
    if(!values.guardianEmail){
        errors.guardianEmail ="Guardian Email Address Required!";
        
    }
    if(!values.elemSchoolGraduated){
        errors.elemSchoolGraduated ="Elementary School Graduated Required!";
        
    }
    if(!values.elemSchoolCompleted){
        errors.elemSchoolCompleted ="Middle Name Required!";
        
    }
    if(!values.elemSchoolAddress){
        errors.elemSchoolAddress ="Elementary School Address Required!";
        
    }
    if(!values.juniorHighSchoolGraduated){
        errors.juniorHighSchoolGraduated ="Junior High School Graduated Required!";
        
    }
    if(!values.juniorHighSyCompleted){
        errors.juniorHighSyCompleted ="Junior High School SY Completed Required!";
        
    }
    if(!values.juniorHighAddress){
        errors.juniorHighAddress ="Junior High School Address Required!";
        
    }
    if(!values.seniorHighGraduated){
        errors.seniorHighGraduated ="Senior High School Graduated Required!";
        
    }
    if(!values.seniorHighSyCompleted){
        errors.seniorHighSyCompleted ="Senior High School SY Completed Required!";
        
    }
    if(!values.seniorHighAddress){
        errors.seniorHighAddress ="Senior High School Address Required!";
        
    }
    if(!values.lastSchoolAttended){
        errors.lastSchoolAttended ="Last School Attended Required!";
        
    }
    if(!values.lastSchoolSyAttended){
        errors.lastSchoolSyAttended ="Last School SY Attended Required!";
        
    }
    if(!values.schoolAddress){
        errors.schoolAddress ="School Address Required!";
        
    }

    return errors;
}
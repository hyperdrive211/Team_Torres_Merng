module.exports.validateUserRegistration = (
    username, 
    email, 
    password, 
    confirmPassword
) => {
    const errors = {}; 
    if(username.trim() === ''){
        errors.username = 'Username must not be empty'; 
    }
    if(email.trim() === ''){
        errors.email = 'Email must not be empty'; 
    } else {
        const regEx = /^([0-9a-zA-Z]([-,\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
        if(!email.match(regEx)){
            errors.email = "Email must be a valid email address"; 
        } 
    }
    if(password.trim() === ''){
        errors.password = "Password must not be empty"; 
    } else if(password !== confirmPassword){
            errors.password = "Passwords must match"; 
    }

    return {
        errors, 
        valid: Object.keys(errors).length < 1
    }  
};

module.exports.validateUserLogin = (username, password) => {
    const errors = {}; 
    if(username.trim() === ''){
        errors.username = 'Username must not be empty'; 
    }
    if(password.trim() === ''){
        errors.password = "Password must not be empty"; 
    }

    return {
        valid: Object.keys(errors).length < 1,
        errors, 
    }
}

module.exports.validateNewLesson = (lessonName, lessonType, lessonDescription, lessonVidLink) => {
     const errors = {};
     if(lessonName.trim() === ''){
         errors.lessonName = 'Lesson Name must not be empty'; 
     }
     if(lessonType.trim() === ''){
         errors.lessonType = 'Lesson Type must be selected'; 
     }
     if(lessonDescription.trim() === ''){
         errors.lessonDescription = 'Lesson Description must not be empty'; 
     }  
     if(lessonVidLink.trim() === ''){
         errors.lessonVidLink = 'Lesson Vid Link must not be empty'; 
     }
     if(!lessonVidLink.trim().includes("embed")){
         errors.lessonVidLink = 'Lesson Vid Link must be an embed link, '
     }
     
     
     return {
         valid: Object.keys(errors).length < 1,
         errors
     }

}
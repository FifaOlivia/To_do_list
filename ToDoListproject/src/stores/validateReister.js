import validator from 'validator';

const validateReister = (data) => {
    let errors = {};

    const { email, password, password_confirmation } = data;

 if(localStorage.users){
    let lsUsers = localStorage.users;
    lsUsers = JSON.parse(lsUsers);
    let index = lsUsers.findIndex(user => user.email === email);
    if(index > -1){
        errors.email = "Email already exist!";
    }
 }

    if(!validator.isEmail(email)){
        errors.email = "please enter a valid address."
    }
    

    if(validator.isEmpty(email)) {
        errors.email = "Email field is required";
    }


    if(validator.isEmpty(password)) {
        errors.password = "password field is required";
    }

    if(!validator.equals(password, password_confirmation)) {
        errors.password_confirmation = "password should match !";
    }

    if(validator.isEmpty(password_confirmation)) {
        errors.password = "password field is required";
    }
}

export default validateReister;
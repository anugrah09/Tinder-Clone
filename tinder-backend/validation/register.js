import Validator from 'validator'
import isEmpty from 'is-empty'

function validateRegisterInput(data) {
    // console.log(data);
    let errors = {};
    data.username = !isEmpty(data.username) ? data.username : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    if (Validator.isEmpty(data.username)) {
        errors.name = "Name field is required";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    // console.log(errors)
    return {
        errors,
        isValid: isEmpty(errors)
    };
}
export default validateRegisterInput
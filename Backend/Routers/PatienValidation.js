const joi = require('@hapi/joi')

const registerPatValidation = data =>{
    const validation = joi.object({
        name:joi.string().min(4).required(),
        email:joi.string().required().email(),
        password:joi.string().min(4).required(),
        address : joi.string().required(),
        city : joi.string().required(),
        phoneNumber : joi.string().required(),
        accountBanc: joi.string().required(),
    
    })
    return validation.validate(data);
}
const loginPatValidation = data =>{
    const validation = joi.object({
        email:joi.string().required().email(),
        password:joi.string().min(4).required(),

    })
    return validation.validate(data);
}
module.exports.registerPatValidation = registerPatValidation;
module.exports.loginPatValidation = loginPatValidation ;
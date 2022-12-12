// const Joi = require('joi');

// const schema = Joi.object({
//     email:Joi.string().min(3).max(255).required().email(),
//     password: Joi.string().min(3).max(255).required(),
//     age: Joi.number().min(16).max(99).required()
// })

// let user = {email: 'a', password: 'b', age: 15};
// // const validator = (scheama) => (data) => {
// //     return schema.validate(data, {abortEarly: false});
// // }
// const {error, value} = schema.validate(user, {abortEarly: false});
// // const {error} = schema.validate(user, {abortEarly: false})
// // console.log(error.details[0].message);

// for (let i = 0; i < error.details.length; i++) {
//     console.log(error.details[i].message);
// }

// console.log(error);
// console.log(value);

// const { error, value} = validator()
// const Joi = require('joi');
// const mongoose = require('mongoose');

// const schema = Joi.object({
//     email: Joi.string().min(3).max(255).required(),
//     password: Joi.string().min(3).max(255).required(),
//     age: Joi.number().min(16).required(),

// })

// let user = { email: 'a', password: 'b', age: 15 }

// const { error, value } = schema.validate(user, { abortEarly: false })
//     // console.log(error)
// for (let i = 0; i < error.details.length; i++) {
//     console.log(error.details[i].message)
// }
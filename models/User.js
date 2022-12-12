// Récupération des fonction du package Mongoose dans la constante "Mongoose"
const mongoose = require('mongoose');
// Récupération du package ""mongoose-unique-validator"" dans la constante "uniqueValidator"
const uniqueValidator = require('mongoose-unique-validator');
// Recupération du package bcrypt dans la constante "bcrypt"
const bcrypt = require('bcrypt')

// Déclaration de la constante "UserSchema" qui va appeler la fonction Schema de mongoose pour créer un schéma de données "UserSchema"
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minLength: [3, 'Veuillez entrer 3 lettres minimum'],
        maxLength: 255
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 255
    },
    // confirm_password: {
    //     type: String,
    //     required: true,
    //     minLength: 3,
    //     maxLength: 255,
    //     validate: {
    //         validator: function(v) {
    //             return v == this.password
    //         },
    //         message: 'les champs password et {PATH} doivent etres egaux !'
    //     }
    // },
    // age: {
    //     type: Number,
    //     min: 12,
    //     max: 99,
    //     validate: {
    //         validator: function(v) {
    //             return v % 1 == 0
    //         },
    //         message: 'l\'age est forcement un entier '
    //     }
    // },
    // phone: {
    //     type: String,
    //     required: true,
    //     minLength: 3,
    //     maxLength: 255,
    //     validate: function() {
    //         return this.age > 16
    //     }
    // },
    // hobbies: { type: Array },
    // isAdmin: Boolean


});

UserSchema.plugin(uniqueValidator, { message: 'le champ {PATH} existe deja' });

UserSchema.pre('save', function(next) {
    let user = this;
    bcrypt.hash(user.password, 10, async function(err, hash) {
        if (err) return next(err)
        user.password = hash;
        next();
    })
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    let user = this;
    bcrypt.compare(candidatePassword, user.password, function(err, match) {
        if (err) return cb(err);
        cb(null, match)
    })
}






module.exports = mongoose.model('User', UserSchema)
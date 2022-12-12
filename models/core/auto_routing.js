const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const autoRouting = new mongoose.Schema({
    name: {
            type: String,
            required: [true, 'Ce champ est requis'],
            minLength: [3, 'ce champs doit contenir a minima 3 caracteres'],
            maxLength: [255, 'ce champs doit contenir a max 5 caracteres'],
            lowercase: true
        },
})

mongoose.export(mongoose.model('autoRouting', autoRouting));
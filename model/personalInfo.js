const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Name: {
        required: true,
        type: String
    },
    Email: {
        required: true,
        type: String
    },
    Contact_No: {
        required: true,
        type: String
    },
    About: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('personalDetails', dataSchema)
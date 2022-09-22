const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Name: {
        required: true,
        type: String
    },
    
    Company: {
        required: true,
        type: String
    },
    Job_Title: {
        required: true,
        type: String
    },
    
    Referral_Date: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('recommendations', dataSchema)
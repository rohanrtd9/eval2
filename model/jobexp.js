const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    Company_name: {
        required: true,
        type: String
    },
    Job_title: {
        required: true,
        type: String
    },
    Job_duration: {
        required: true,
        type: String
    },
    Projects_done: {
        required: true,
        type: String
    }
})

module.exports = mongoose.model('jobexp', dataSchema)
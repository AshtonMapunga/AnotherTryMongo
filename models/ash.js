const mongoose = require('mongoose')
const Ashtable = mongoose.Schema({
    appointmentDate: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    }


})

module.exports = mongoose.model('Ashtable', Ashtable)
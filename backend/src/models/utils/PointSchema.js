const mongoose = require('mongoose')

const PointSchaema = mongoose.Schema({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number],
        required: true
    }
})

module.exports = PointSchaema
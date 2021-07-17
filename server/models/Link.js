const { Schema, model } = require('mongoose')


const linkSchema = new Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
        unique: true,
    },
    code: {
        type: String,
        required: true,
        unique: true,
    },
    visited: {
        type: Number,
        default: 0,
    },
    visitors: [{
        type: String,
        ref: 'User'
    }]
})

module.exports = model('Link', linkSchema)
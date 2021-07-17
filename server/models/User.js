const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    hashPassword: {
        type: String,
        required: true,
        minLength: 6
    },
    links: [{
        type: String,
        ref: 'Link'
    }],
})

module.exports = model('User', userSchema)
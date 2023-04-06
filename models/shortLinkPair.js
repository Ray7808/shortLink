const mongoose = require('mongoose')

const shortLinkPairSchema = new mongoose.Schema({
    inputLink: {
        type: String,
        required: true,
    },
    outputLink: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('shortLinkPair', shortLinkPairSchema)

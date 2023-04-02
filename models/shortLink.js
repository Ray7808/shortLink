const mongoose = require("mongoose")

const shortLinkSchema = new mongoose.Schema({
    inputLink: {
        type: String,
        required: true,
    },
    outputLink: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("shortLink", shortLinkSchema)

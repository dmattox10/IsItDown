const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    url: String,
    up: Boolean,
    timesChecked: { type: Number, default: 0 },
    times: Array,
    timesDown: { type: Number, default: 0 }
})

module.exports = mongoose.model('Url', urlSchema)
const mongoose = require('mongoose');

let MigraineSchema = new mongoose.Schema({
    start: Date,
    end: Date,
    symptoms: [],
    painlevel: Number,
    triggers: [],
    remedies: [],
    notes: String
})

let MigraineModel = mongoose.model('migraine', MigraineSchema)

module.exports = MigraineModel;
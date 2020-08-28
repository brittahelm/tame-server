const mongoose = require('mongoose');

let MigraineSchema = new mongoose.Schema({
    start: Date,
    end: Date,
    symptoms: [],
    painlevel: Number,
    triggers: [],
    remedies: [],
    faveRemedy: String,
    notes: String,
    userID: String
})

let MigraineModel = mongoose.model('migraine', MigraineSchema)

module.exports = MigraineModel;
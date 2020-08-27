const mongoose = require('mongoose');

let RemedySchema = new mongoose.Schema({
    name: String,
    description: String,
    rating: Number
})

let RemedyModel = mongoose.model('remedy', RemedySchema)

module.exports = RemedyModel;
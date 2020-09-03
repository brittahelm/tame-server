const mongoose = require('mongoose');

let RemedySchema = new mongoose.Schema({
    name: String,
    description: String,
    rating: Number,
    userID: String,
    likers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
})

let RemedyModel = mongoose.model('remedy', RemedySchema)

module.exports = RemedyModel;
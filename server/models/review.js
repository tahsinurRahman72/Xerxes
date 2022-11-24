const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uuid = require('uuid');

const review = new Schema({
    reviewId: {type: String, default: uuid.v4},
    firstName: String,
    lastName: String,
    email: String,
    message: String,
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now}
}, {collection: 'review'});

module.exports = mongoose.model('review', review)
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const uuid = require('uuid');

const package = new Schema({
    packageId: {type: String, default: uuid.v4},
    namOfPlace: String,
    duration: Number,
    startDay: String,
    endDay: String,
    priceOfPackage: Number,
    tourDescription: String,
    image: String,
    created: {type: Date, default: Date.now},
    modified: {type: Date, default: Date.now}
}, {collection: 'package'});

module.exports = mongoose.model('package', package)
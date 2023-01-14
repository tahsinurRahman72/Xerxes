const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uuid = require('uuid')

const pdf = new Schema ({
    pdfId: {
        type: String, 
        default: uuid.v4
    },
    source: {
        file: { type: Buffer, required: true }
      }
}, {collection: 'pdf'});

module.exports = mongoose.model('pdf', pdf)
const express = require('express');
const router = express.Router();
const Grid = require('gridfs-stream');
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path');
const pdfsPath = path.join(process.cwd(), 'pdfs');
let gfs, gridfsBucket

let {PythonShell} = require('python-shell');
mongoose.connection.once('open', () => {
    //Init Stream
    gridfsBucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
      bucketName: 'uploads'
    })
    gfs = Grid(mongoose.connection.db, mongoose.mongo)
    gfs.collection('uploads')
})

router.get('/files/:filename', (req,res) => {
    
    gfs.files.findOne({filename: req.params.filename}, (err,file) => {
      if (!file || file.length === 0) {
        return res.status(404).json({
          err: 'No file exists'
        })
      }
      if (file.contentType === 'application/pdf') {
        const readstream = gridfsBucket.openDownloadStreamByName(file.filename)
        const writestream = fs.createWriteStream(path.join(pdfsPath, file.filename))
        readstream.pipe(writestream)
        writestream.on('finish', () => {
            let options = {
                args: [path.join(pdfsPath, file.filename)]
            }
            PythonShell.run("F:/BRAC Undergraduate Courses/Thesis/Project/pdfGuardian/server/python_modules/ATX1.py", options, function(err, result) {
                res.json(result)
            })
        })
      } else {
        res.status(404).json({
          err: 'Not a PDF File'
        })
      }
    })
  })
  module.exports = router
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
      // res.json(file)
      if (file.contentType === 'application/pdf') {
        const readstream = gridfsBucket.openDownloadStreamByName(file.filename)
        readstream.pipe(fs.createWriteStream(path.join(pdfsPath, file.filename)))
        readstream.on('end', () => {
            res.end()
        });

      } else {
        res.status(404).json({
          err: 'Not a PDF File'
        })
      }

      // let options = {
      //   mode: 'text',
      //   pythonOptions: ['-u'], // get print results in real-time
      //   func: 'ATX1.0.run',
      //   args: ['F:/BRAC Undergraduate Courses/Thesis/Project/pdfGuardian/server/pdfs/375c0295a75bfe2770db6c2c94842d03.pdf']
      // };

      // PythonShell.run("ATX1.0.py", options, function(err, result) {
      //   res.json(result)
      // })

    })
  })

  module.exports = router
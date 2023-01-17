const express = require('express');
const router = express.Router();
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');

const storage = new GridFsStorage({
    url: process.env.DB_CONNECT_STRING,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString('hex') + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: 'uploads'
          };
          resolve(fileInfo);
        });
      });
    }
  });
  const upload = multer({ storage });

router.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

module.exports = router
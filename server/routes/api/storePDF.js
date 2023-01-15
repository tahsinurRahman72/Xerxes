const express = require('express');
const aws = require('aws-sdk');
const multer = require('multer');
const router = express.Router();

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

router.post('/scan_pdf', (req, res) => {
  // configure the AWS SDK with your access key and secret key
  aws.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY
  });
  
  // create an S3 object
  const s3 = new aws.S3();
  
  // Create the parameters for calling createBucket
  var bucketParams = {
    Bucket : 'XerxesBucket'
  };
  
  // call S3 to create the bucket
  s3.createBucket(bucketParams, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.Location);
    }
  });
  // get the file and file name from the request body
  const file = req.file.buffer;
  const fileName = req.body.fileName;
  
  // create the parameters for the S3 upload
  const params = {
    Bucket: 'XerxesBucket',
    Key: fileName,
    Body: file,
    ContentType: 'application/pdf'
  };
  
  // upload the file to S3
  s3.upload(params, (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error uploading file to S3' });
    } else {
      res.json({ message: 'File uploaded to S3 successfully', data });
    }
  });
});

module.exports = router;

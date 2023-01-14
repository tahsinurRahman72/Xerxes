require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const multer = require("multer")
const {GridFsStorage} = require("multer-gridfs-storage")
var cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/pdf', require('./routes/api/storePDF'))


// mongoose.connect(
//     process.env.DB_CONNECT_STRING, 
//     { useNewUrlParser: true, useUnifiedTopology: true},
//     (req,res) =>{
//         console.log('Connected to database')
//     })
//     var db = mongoose.connection;
// app.listen(process.env.PORT, ()=>{
//     console.log(`Server listening on ${process.env.PORT}`)
// })

mongoose.connect(
process.env.DB_CONNECT_STRING, 
{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then((response => {
    console.log('Connected to database')
}))
.catch ((error) => {
handleError(error)
})
process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error.message);
});
 
//creating bucket
let bucket;
mongoose.connection.on("connected", () => {
  var db = mongoose.connections[0].db;
  bucket = new mongoose.mongo.GridFSBucket(db, {
    bucketName: "newBucket"
  });
//   console.log(bucket);
});
 
//to parse json content
app.use(express.json());
//to parse body from url
app.use(express.urlencoded({
  extended: false
}));
 
app.listen(process.env.PORT, function () {
  console.log(`Application live on localhost: ${process.env.PORT}`);
});
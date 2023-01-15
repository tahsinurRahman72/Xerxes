require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
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
 
app.listen(process.env.PORT, function () {
  console.log(`Application live on localhost: ${process.env.PORT}`);
});
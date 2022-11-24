const express = require('express')
const route = express.Router()
const packages = require('../../models/package')

route.delete('/packages/:id', (req,res)=> {
    packages.deleteOne(req.params.packageId, (err, doc) =>{
        if(!err) {
            res.status(200).json({
                message: 'Deleted Package',
                package: doc
            })
        }
        else{
            res.status(500).json({
                message: err
            })            
        }
    })
})

module.exports = route 
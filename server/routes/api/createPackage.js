const express = require('express')
const route = express.Router()
const createPackage = require('../../models/package')

route.post('/create_package', async(req,res) =>{
    try {
        const created_pack = new createPackage(req.body)
        await created_pack.save()
        res.send(created_pack)
        // console.log(created_pack)
    } catch (error) {
        res.send({
            message: error
        })
    }
})

module.exports = route
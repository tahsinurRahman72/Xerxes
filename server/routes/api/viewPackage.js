const express = require('express')
const route = express.Router()
const viewPackage = require('../../models/package')

route.get('/packages', async(req,res)=>{
        try {
            async function showPackages(){
                const view_pack = await viewPackage.find({})
    
                return view_pack
            }
    
            showPackages().then((data)=>{
                res.json(data)
            }).catch((error)=>{
                res.json(error)
            })
        } catch (error) {
            res.json({
                msg: 'Error: ', error
            })
        }
})

module.exports = route
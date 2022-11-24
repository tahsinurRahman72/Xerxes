const express = require('express')
const route = express.Router()
const viewPackage = require('../../models/package')

route.get('/packages/:id', async(req,res)=>{
        try {
            async function showPackagesById(){
                const view_pack_by_ID = await viewPackage.find(req.params.packageId)
    
                return view_pack_by_ID
            }
    
            showPackagesById().then((data)=>{
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
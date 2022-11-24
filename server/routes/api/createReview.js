const express = require('express')
const route = express.Router()
const reviewSchema = require('../../models/review')

route.post('/leave_review', async(req,res)=>{
    try {
        const leave_aReview = new reviewSchema(req.body)
        await leave_aReview.save()
        res.send(leave_aReview)
    }
    catch (error) {
        res.send({
            message: error
        })
    }
})

module.exports = route
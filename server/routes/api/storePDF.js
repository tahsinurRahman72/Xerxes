const express = require('express')
const route = express.Router()
const multer = require("multer")

const fileFilter = (req, file, cb) => {
    const allow = ["file/pdf"]
    if(!allow.includes(file.mimetype)) {
        const e = new Error("Incorrect File Format")
        e.code = "INCORRECT FILETYPE"

        return cb(e, false)
    }

    cb(null, true)
}

const upload = multer({
    dest: './uploads',
    fileFilter
})

route.post('/scan_pdf', upload.single('file'), async(req,res) => {
    try{
        const pdfInstance = {file: req.file}
        await pdfInstance.save()
        res.send(pdfInstance)
        console.log('success')
    } catch (error) {
        res.send({
            message: error
        })
    }
})

module.exports = route
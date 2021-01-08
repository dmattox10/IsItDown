const express = require('express')
const Cors = require('cors')
const ExpressBrute = require('express-brute')
const validUrl = require('valid-url')
const Url = require('../models/url')
const checker = require('../tools/checker')
const saver = require('../tools/saver')

const subRouter = express.Router()
const store  = new ExpressBrute.MemoryStore()
const bruteforce = new ExpressBrute(store)

subRouter.post('/', Cors(), bruteforce.prevent, (req, res) => {

    const url = req.body.longUrl
    let info = {}
    checker.getTime(url).then(time => {
        info.url = url
        console.log(time)
        if (time === 69420) {
            info.up = false
        }
        else {
            info.up = true
            info.time = time
        }
        saver.save(info)
        let filter = { url: {'$regex' : url, '$options' : 'i'} }
        Url.findOne(filter).then(result => {
            return res.status(201).json(result)
        })

    })
    
    
})

module.exports = subRouter
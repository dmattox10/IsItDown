const express = require('express')
const Cors = require('cors')
const ExpressBrute = require('express-brute')

const checker = require('../tools/checker')
const saver = require('../tools/saver')

const subRouter = express.Router()
const store  = new ExpressBrute.MemoryStore()
const bruteforce = new ExpressBrute(store)

subRouter.post('/', Cors(), bruteforce.prevent, async (req, res) => {

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
        saver.save(info).then(response => {
            res.status(201).json(response)
        })
        
    })
    

})

module.exports = subRouter
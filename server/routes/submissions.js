const express = require('express')
const Cors = require('cors')
const ExpressBrute = require('express-brute')
const validUrl = require('valid-url')

const checker = require('../tools/checker')
const saver = require('../tools/saver')

const subRouter = express.Router()
const store  = new ExpressBrute.MemoryStore()
const bruteforce = new ExpressBrute(store)

subRouter.post('/', Cors(), bruteforce.prevent, async (req, res) => {

    const url = req.body.url
    let info = {}
    if (validUrl.isUri(url)) {
        let time = await checker.getTime(url)
        info.url = url
        if (time === 69420) {
            info.up = false
        }
        else {
            info.up = true
            info.time = time
        }
        let response = await saver.save(info)
        res.status(201).json(response)
    }
    else {
        let response = { message: 'Please enter a valid URL' }
        res.status(404).json(response)
    }

})
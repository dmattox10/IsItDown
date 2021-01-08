// TODO add most down URL to stats
// TODO add most checked URl to stats, filtering out manual requests for that URL?
const express = require('express')
const Cors = require('cors')
const Url = require('../models/url')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

const statsRouter = express.Router()

statsRouter.get('/', Cors(), (req, res) => {
    db.update('visits', n => n + 1)
    .write()
    const urlsList = Url.estimatedDocumentCount()
    urlsList.then(count => {
        console.log(count)
        db.set('contents', count).write()
    })
    
    const visitors = db.get('visits').value()
    const allUrls = db.get('contents').value()

    res.status(200).json({
        visits: visitors,
        total: allUrls
    })
})

module.exports = statsRouter
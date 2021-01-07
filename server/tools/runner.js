const Url = require('../models/url')
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)

const checker = require('./checker')
const saver = require('./saver')

exports.testEntries = () => {

    Url.find({}).then(results => {
        results.forEach( async result => {
            let info = {}
            checker.getTime(result.url).then(time => {
                info.url = result.url
                if (time === 69420) {
                    info.up = false
                }
                else {
                    info.up = true
                    info.time = time
                }
                saver.save(info)
            })
            
        })
        
    })
}
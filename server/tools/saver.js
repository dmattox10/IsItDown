const Url = require('../models/url')

exports.save = async info => {

    let filter = { url: {'$regex' : info.url, '$options' : 'i'} }
    let update = {}
    if (info.up) {
        update = {
            url: info.url, 
            up: info.up,
            $inc: { timesChecked : 1 },
            $push: { times: info.time }
        }
    }
    else {
        update = {
            url: info.url,
            up: info.up,
            $inc: { timesDown : 1 }
        }
    }
    Url.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true
    }).then(result => {
        console.log(result)
    })
    
}
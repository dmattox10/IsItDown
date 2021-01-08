const Url = require('../models/url')

exports.save = async info => {

    const filter = { url: {'$regex' : info.url, '$options' : 'i'} } // Hopefully this regex works, my second one ever
    let update = {}
    if (info.up) {
        update = { 
            up: info.up,
            $inc: { timesChecked : 1 },
            $push: { times: info.time }
        }
    }
    else {
        update = {
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
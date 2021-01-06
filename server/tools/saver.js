const Url = require('../models/url')

exports.save = async info => {

    const filter = { url: info.url }
    if (info.up) {
        let update = { 
            up: info.up,
            $inc: { timesChecked : 1 },
            $push: { times: info.time }
        }
        let query = await Url.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true
        })
    
        return query
    }
    else {
        let update = {
            up: info.up,
            $inc: { 'timesDown' : 1 }
        }
        let query = await Url.findOneAndUpdate(filter, update, {
            new: true,
            upsert: true
        })
    
        return query
    }
    
}
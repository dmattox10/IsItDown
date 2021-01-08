const resTime = require('res-time')
const isReachable = require('is-reachable')

exports.getTime = async url => {
    if (await isReachable(url)) {
        return new Promise((resolve, reject) => {
            resTime({host: url})
            .then(time => {
                resolve(time)
            })
            .catch(err => {
                console.log(url)
                console.error(err.message)
                resolve(69420) // Thanks Elon!
            })
        })
    }
    else {
        return 69420
    }

}
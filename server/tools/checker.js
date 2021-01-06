const resTime = require('res-time')

exports.getTime = async url => {
    
    resTime({host: url})
        .then(time => {
            return time
        })
        .catch(err => {
            console.error(err.message)
            return 69420 // Thanks Elon!
        })

}
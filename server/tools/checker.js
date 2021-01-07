const resTime = require('res-time')

exports.getTime = url => {

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
    
    // resTime({host: url})
    //     .then(time => {
    //         return time
    //     })
    //     .catch(err => {
    //         console.log(url)
    //         console.error(err.message)
    //         return 69420 // Thanks Elon!
    //     })

}
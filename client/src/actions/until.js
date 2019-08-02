const until = promise => 
        promise
        .then(data => [null, data])
        .catch(err => [err])

export default until;
function join_data( guardian=[], gnews=[]){
    
    return [
        ...guardian,
        ...gnews
    ]
}

module.exports = { join_data }
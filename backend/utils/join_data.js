function join_data( guardianday =[], guardianweek=[], gnewsday=[], gnewsweek=[]){
    
    console.log(guardianday, guardianweek, gnewsday, gnewsweek)

    return [
        ...guardianday,
        ...guardianweek,
        ...gnewsday, 
        ...gnewsweek
    ]
}

module.exports = { join_data }
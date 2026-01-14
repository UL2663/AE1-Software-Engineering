function standardiseGN(data){
    return{
        title: data.title,
        publishedAt: data.publishedAt
    };
}

function standardiseGuardian(data){
    return{
        title: data.webTitle,
        publishedAt:data.webPublicationDate
    };
}

module.exports = { standardiseGuardian, standardiseGN};
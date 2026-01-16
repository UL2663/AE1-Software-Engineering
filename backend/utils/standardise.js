const punctuation = /[\.,?!]/g;
const spaces = /\s+/g
function standardiseGN(data){
    return{
        title: standardiseTitle(data.title),
        publishedAt: data.publishedAt
    };
}

function standardiseGuardian(data){
    return{
        title: standardiseTitle(data.webTitle),
        publishedAt:data.webPublicationDate
    };
}

function standardiseTitle(text){
    return text.toLowerCase().replace(punctuation, "")    
}
module.exports = { standardiseGuardian, standardiseGN, standardiseTitle };
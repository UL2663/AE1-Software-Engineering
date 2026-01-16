const { stripTokens, tokenizeTitles } = require("./analyse")

const punctuation = /[\.,?!]/g;
const spaces = /\s+/g
function standardiseGN(data){
    return{
        title: standardiseTitle(data.title),
        publishedAt: data.publishedAt,
        tokens: stripTokens(tokenizeTitles(standardiseTitle(data.title)))
    };
}

function standardiseGuardian(data){
    return{
        title: standardiseTitle(data.webTitle),
        publishedAt:data.webPublicationDate,
        tokens: stripTokens(tokenizeTitles(standardiseTitle(data.webTitle)))
    };
}

function standardiseTitle(text){
    return text.toLowerCase().replace(punctuation, "").replace(spaces, " ")   
}
module.exports = { standardiseGuardian, standardiseGN, standardiseTitle };
const extrawords = new Set(["the","and","or","in","as","is","are","from","by","at","with","on","for","to","its", "a"])

function stripTokens(text){
    return text.filter(text=> !extrawords.has(text)) //manages edge cases of really short titles 
}

function tokenizeTitles(text){
    return text.split(" ")}

module.exports = { stripTokens, tokenizeTitles}
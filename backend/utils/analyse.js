const extrawords = new Set(["the","and","or","in","as","is","are","from","by","at","with","on","for","to","its", "a"])

function stripTokens(text){
    return text.filter(text=> !extrawords.has(text)) //manages edge cases of really short titles 
}

function tokenizeTitles(text){
    return text.split(" ")}

function countTokens(data){
    return data.reduce((acc,data)=>{ //reduce used for consolidating array values, acc for 'accumulating'
        data.tokens.forEach(token => {
            acc[token] = (acc[token] || 0) + 1;
        });
        return acc;
    }, {});  
}

module.exports = { stripTokens, tokenizeTitles, countTokens}
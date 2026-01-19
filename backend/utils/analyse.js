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

function paretoValues(data){
    const total = Object.values(data).reduce((a,b)=> a+b, 0);
    let cumulative = 0;

    return Object.entries(data)
    .sort((a,b)=> b[1] - a[1])
    .map(([kw, count]) => { 
        cumulative += count;
        return {
            kw,
            count, 
            cumulative: Math.round((cumulative/total)*100)
        };
    });
}

module.exports = { stripTokens, tokenizeTitles, countTokens, paretoValues}
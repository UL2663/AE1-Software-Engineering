const extrawords = new Set(["the","and","or","in","as","is","are","from","by","at","with","on","for","to","its", "a", "of", "ai", "it","it's","its","this","an","has","how","why","us","be","but","his","was","not", "-","says","–","what"])

const AI_categories = { //aware that these may need to be added to over time  
  politics: ["trump", "government", "bill", "policy", "election", "labor", "law", "regulation","war"],

  education: ["education", "learning", "skills", "training", "university", "programme", "students"],

  industry: ["manufacturing", "industry", "economy", "business", "jobs", "employment", "market"],

  health: ["pharma", "pharmaceutical", "medical", "medicine", "health", "drug", "clinical"],

  morals_ethics: ["ethics", "social", "society", "faith", "religion", "speech", "rights", "fairness", "pope", "imam","rights"]
}

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

function mapDates(data){
    const counts = {};
    data.forEach(item =>{
        const day = item.publishedAt.slice(0,10);
        counts[day] = (counts[day]||0)+1;
    })
    return counts;
}

function paretoValues(data){
    const total = Object.values(data).reduce((a,b)=> a+b, 0);
    let cumulative = 0;

    return Object.entries(data)
    .sort((a,b)=> b[1] - a[1])
    .map(([date, count]) => { 
        cumulative += count;
        return {
            date,
            count, 
            cumulative: Math.round((cumulative/total)*100)
        };
    });
}

function radar_funct(data){
    const out = {};
    for (const [category, kws] of Object.entries(AI_categories)) {
        out[category] = kws.reduce(
            (sum, kw) => sum + (data[kw]||0), 0);
    }
    return out
}

function topToken(data){
    return Object.entries(data).reduce((max, current)=> current [1] > max[1] ? current : max );
}

module.exports = { stripTokens, tokenizeTitles, countTokens, paretoValues, radar_funct, mapDates, topToken}
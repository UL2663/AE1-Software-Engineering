function formatPareto(values){
    return{
        labels: values.map(p => p.kw),
        
        datasets: [{
            type:"bar",
            label:"Frequency",
            data: values.map(p => p.count),
            yAxisID:"y"
        },
        {
            type: "line",
            label: "Cumulative %",
            data: values.map(p => p.cumulative),
            yAxisID: "y1"
        }]
    }
}

function formatRadar(values){
    return{
        labels: Object.keys(values),
        datasets : [ 
            {label: "Distribution of Themes",
                data: Object.values(values)
            }]
    };
}

function getCount(values){
    return { amount_of_entries: Object.keys(values).length }
}

module.exports = { formatPareto , formatRadar, getCount}
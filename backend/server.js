// backend server JS file 
//imports 
const { standardiseGN, standardiseGuardian } = require("./utils/standardise")
const { join_data } = require("./utils/join_data")
const { paretoValues, radar_funct } = require("./utils/analyse") 
const { formatPareto, formatRadar, getCount } = require("./utils/format_data")
const express = require('express');
const path = require('path');

//set contants and variables for the session
const app = express();
const port = process.env.PORT || 3500;
var msdayhours = 1000*60*60*12;
var last_week = Date.now() - msdayhours*7;
var last_month = Date.now() - last_week * 7;
var iso_last_week = new Date(last_week).toISOString();
var iso_last_month = new Date(last_month).toISOString();
var split_week = iso_last_week.split('T')[0];
var split_month = iso_last_month.split('T')[0];

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '..','/public')));

//get functions 


async function fetchGN({q, from}) {
    const params = new URLSearchParams({
        q: q, // 'AI OR artificial intelligence OR machine learning',
        lang: 'en',
        from: from, //iso_last_day,
        max: '10',
        token: process.env.NEWS_API_KEY
       })
     
    const response = await fetch(`https://gnews.io/api/v4/search?${params}`);

    const data = await response.json();     //read json to js object 
    return data.articles 
    }

async function fetchGuardian({q, from}) {
    const params = new URLSearchParams({
        q: q, // , 
        'page-size':'50',
        'from-date': from, // split_month,
        'show-fields':'headline',
        'api-key': process.env.GUARDIAN_API_KEY,
       })
     
    const response = await fetch(`https://content.guardianapis.com/search?${params}`);
    const data = await response.json();
    return data.response.results}


app.get('/api/ManAI_Analysis', async (req, res) => { 
    try{ 
        //fetch 

         const[rawGuardianmonth, rawGNmonth, rawGuardianWeek, rawGNWeek] = await Promise.all([
            fetchGuardian({q:'("artificial intelligence") AND (Manufacturing OR Pharmaceuticals)', from: split_month}),
            fetchGN({q:'"(artificial intelligence OR AI) AND Manufacturing OR Pharmaceuticals"', from:iso_last_month}),
            fetchGuardian({q:'("artificial intelligence") AND (Manufacturing OR Pharmaceuticals)', from: split_week}),
            fetchGN({q:'"(artificial intelligence OR AI) AND Manufacturing OR Pharmaceuticals"', from:iso_last_week})        ])
    
        //standardise
        var standardisedGuardianmonth = rawGuardianmonth.map(standardiseGuardian);
        var standardisedGuardianWeek = rawGuardianWeek.map(standardiseGuardian);
        var standardisedGNmonth = rawGNmonth.map(standardiseGN);
        var standardisedGNWeek = rawGNWeek.map(standardiseGN);

        //combine all
        const combined_week = join_data(standardisedGuardianmonth,standardisedGuardianWeek, standardisedGNmonth, standardisedGNWeek) 
        const combined_month = join_data(standardisedGuardianmonth, standardisedGNmonth)
         //format to chart.js data types
        const charts = {pareto_week: formatPareto(paretoValues(combined_week)),
                        radar_week : formatRadar(radar_funct(combined_week)),
                        pareto_month: formatPareto(paretoValues(combined_month)),
                        radar_month : formatRadar(radar_funct(combined_month))};
        const count_month = getCount(combined_month)
        const count_week = getCount(combined_week)
         res.json({
            meta: {
                "count_week": count_week,
                "count_month": count_month,
                from: split_month},
                charts
         })} 
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with the server"})
    }})


app.get('/api/AI_Analysis', async (req, res) => { 
    try{ 
        //fetch 

         const[rawGuardianmonth, rawGNmonth, rawGuardianWeek, rawGNWeek] = await Promise.all([
            fetchGuardian({q:'"artificial intelligence" OR "machine learning"', from: split_month}),
            fetchGN({q:'AI OR artificial intelligence OR machine learning', from:iso_last_month}),
            fetchGuardian({q:'"artificial intelligence" OR "machine learning"', from: split_week}),
            fetchGN({q:'AI OR artificial intelligence OR machine learning', from:iso_last_week})])
    
        //standardise
        var standardisedGuardianmonth = rawGuardianmonth.map(standardiseGuardian);
        var standardisedGuardianWeek = rawGuardianWeek.map(standardiseGuardian);
        var standardisedGNmonth = rawGNmonth.map(standardiseGN);
        var standardisedGNWeek = rawGNWeek.map(standardiseGN);

        //combine all
        const combined_week = countTokens(join_data(standardisedGuardianWeek, standardisedGNWeek));
        const combined_month = countTokens(join_data(standardisedGuardianmonth, standardisedGNmonth));
         //format to chart.js data types
        const charts = {pareto_week: formatPareto(paretoValues(combined_week)),
                        radar_week : formatRadar(radar_funct(combined_week)),
                        pareto_month: formatPareto(paretoValues(combined_month)),
                        radar_month : formatRadar(radar_funct(combined_month))};
        const count_month = getCount(combined_month)
        const count_week = getCount(combined_week)
         res.json({
            meta: {
                "count_week": count_week,
                "count_month": count_month,
                from: split_month},
                charts
         })} 
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with the server"})
    }})
    //routing 
app.get(/\/$|\/Mainpage(\.html)?/, (req,res) => {  // regex to handle variations of mainpage 
    res.sendFile(path.join(__dirname, '..', 'Mainpage.html'));
});

app.use((req,res) => { 
    res.status(404).sendFile(path.join(__dirname, '..', '404.html'))});

app.listen(port, () => console.log('server running on port', port));
// backend server JS file 
//imports 
const { standardiseGN, standardiseGuardian } = require("./utils/standardise")
const express = require('express');
const path = require('path');

//set contants and variables for the session
const app = express();
const port = process.env.PORT || 3500;
var msdayhours = 1000*60*60*12;
var last_day = Date.now() - msdayhours;
var last_week = Date.now() - msdayhours*7;
var iso_last_day = new Date(last_day).toISOString();
var iso_last_week = new Date(last_week).toISOString();
var split_day = iso_last_day.split('T')[0];
var split_week = iso_last_week.split('T')[0];

app.use(express.json());
app.use(express.static(path.join(__dirname, '..','/public')));

app.get('/api/AIgnews', async (req, res) => { 
    try {
       const params = new URLSearchParams({
        q: 'AI OR artificial intelligence OR machine learning',
        lang: 'en',
        from: iso_last_day,
        max: '10',
        token: process.env.NEWS_API_KEY
       })
     
    const response = await fetch(`https://gnews.io/api/v4/search?${params}`);

    const data = await response.json();     //read json to js object 
    var standardised = data.articles.map(standardiseGN) //standardise output
    res.json(standardised)} //respond with standardised json
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with AI News"})
    }
});

app.get('/api/ManAIPharmagnews', async (req, res) => { 
    try {
       const params = new URLSearchParams({
        q: "(artificial intelligence OR AI) AND Manufacturing OR Pharmaceuticals", // OR has higher precedence so should work, ref docs 
        lang: 'en',
        from: iso_last_day,
        max: '10',
        token: process.env.NEWS_API_KEY
       })
     
    const response = await fetch(`https://gnews.io/api/v4/search?${params}`);

    const data = await response.json();
    var standardised = data.articles.map(standardiseGN);
    res.json(standardised)} 
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with AI Pharma News"})
    }
});

app.get('/api/WeekAIgnews', async (req, res) => { 
    try {
       const params = new URLSearchParams({
        q: 'AI OR artificial intelligence OR machine learning',
        lang: 'en',
        from: iso_last_week,
        max: '10',
        token: process.env.NEWS_API_KEY
       })
     
    const response = await fetch(`https://gnews.io/api/v4/search?${params}`);

    const data = await response.json();
    var standardised = data.articles.map(standardiseGN)
    res.json(standardised)}
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with AI News"})
    }
});

app.get('/api/WeekManAIPharmagnews', async (req, res) => { 
    try {
       const params = new URLSearchParams({
        q: "(artificial intelligence OR AI) AND Manufacturing OR Pharmaceuticals", // OR has higher precedence so should work, ref docs 
        lang: 'en',
        from: iso_last_week,
        max: '10',
        token: process.env.NEWS_API_KEY
       })
     
    const response = await fetch(`https://gnews.io/api/v4/search?${params}`);

    const data = await response.json();
    var standardised = data.articles.map(standardiseGN)
    res.json(standardised)}

    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with AI Pharma News"})
    }
});

// GUARDIAN APIS 
app.get('/api/ManAIPharmaGuardian', async (req, res) => { 
    try {
       const params = new URLSearchParams({
        q: '("artificial intelligence") AND (Manufacturing OR Pharmaceuticals)', 
        'page-size':'50',
        'from-date': split_day,
        'show-fields':'headline',
        'api-key': process.env.GUARDIAN_API_KEY,

       })
     
    const response = await fetch(`https://content.guardianapis.com/search?${params}`);

    const data = await response.json();
    var rawOut  = data.response.results;
    var standardised = rawOut.map(standardiseGuardian);// guardian works slightly different because of output format
    res.json(standardised)}
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with Guardian AI Pharma News"})
    }
});

app.get('/api/AIGuardian', async (req, res) => { 
    try {
       const params = new URLSearchParams({
        q: '"artificial intelligence" OR "machine learning"', 
        'page-size':'50',
        'from-date': split_day,
        'show-fields':'headline',
        'api-key': process.env.GUARDIAN_API_KEY,
       })
     
    const response = await fetch(`https://content.guardianapis.com/search?${params}`);

    const data = await response.json();
    var rawOut  = data.response.results;
    var standardised = rawOut.map(standardiseGuardian);// guardian works slightly different because of output format
    res.json(standardised)}
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with Guardian AI News"})
    }
});

app.get('/api/ManAIPharmaGuardianweek', async (req, res) => { 
    try {
       const params = new URLSearchParams({
        q: '("artificial intelligence") AND (Manufacturing OR Pharmaceuticals)', 
        'page-size':'50',
        'from-date': split_week,
        'show-fields':'headline',
        'api-key': process.env.GUARDIAN_API_KEY,

       })
     
    const response = await fetch(`https://content.guardianapis.com/search?${params}`);

    const data = await response.json();
    var rawOut  = data.response.results;
    var standardised = rawOut.map(standardiseGuardian);// guardian works slightly different because of output format
    res.json(standardised)}
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with Guardian AI Pharma News"})
    }
});

app.get('/api/AIGuardianWeek', async (req, res) => { 
    try {
       const params = new URLSearchParams({
        q: '"artificial intelligence" OR "machine learning"', 
        'page-size':'50',
        'from-date': split_week,
        'show-fields':'headline',
        'api-key': process.env.GUARDIAN_API_KEY,
       })
     
    const response = await fetch(`https://content.guardianapis.com/search?${params}`);

    const data = await response.json();
    var rawOut  = data.response.results;
    var standardised = rawOut.map(standardiseGuardian);// guardian works slightly different because of output format
    res.json(standardised)}
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with Guardian AI News"})
    }
});


app.get(/\/$|\/Mainpage(\.html)?/, (req,res) => {  // regex to handle variations of mainpage 
    res.sendFile(path.join(__dirname, '..', 'Mainpage.html'));
});

app.use((req,res) => { 
    res.status(404).sendFile(path.join(__dirname, '..', '404.html'))});

app.listen(port, () => console.log('server running on port', port));
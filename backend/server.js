// backend server JS file 
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3500;
var msdayhours = 1000*60*60*12;
var last_day = Date.now() - msdayhours;
var iso_last_day = new Date(last_day).toISOString();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..','/public')));

app.get('/api/AInews', async (req, res) => { 
    try {
       const params = new URLSearchParams({
        q: 'q = "AI OR \"artificial intelligence\" OR \"machine learning\"',
        lang: 'en',
        from: iso_last_day,
        max: '10',
        token: process.env.NEWS_API_KEY
       })
     
    const response = await fetch(`https://gnews.io/api/v4/search?${params}`);

    const data = await response.json();
    res.json(data)}
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with AI News"})
    }
});

app.get('/api/ManAIPharmanews', async (req, res) => { 
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
    res.json(data)}
    
    catch (err) { console.error(err);
        res.status(500).json({error: "There is an issue with AI Pharma News"})
    }
});

app.get(/\/$|\/Mainpage(\.html)?/, (req,res) => {  // regex to handle variations of mainpage 
    res.sendFile(path.join(__dirname, '..', 'Mainpage.html'));
});

app.use((req,res) => { 
    res.status(404).sendFile(path.join(__dirname, '..', '404.html'))});

app.listen(port, () => console.log('server running on port', port));
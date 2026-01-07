// backend server JS file 
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());

app.use(express.static(path.join(__dirname, '..','/public')));

app.get(/\/$|\/mainpage(\.html)?/, (req,res) => {  // regex to handle variations of mainpage 
    res.sendFile(path.join(__dirname, '..', 'Mainpage.html'));
});

app.use((req,res) => { 
    res.status(404).sendFile(path.join(__dirname, '..', '404.html'))});

app.listen(port, () => console.log('server running on port', port));
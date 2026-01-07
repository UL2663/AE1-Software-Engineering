function getManAI()
 {console.log("call");
    fetch("https://ae1-software-engineering.onrender.com/api/ManAIPharmanews")
    .then(res => res.json())
    .then(data => { 
         console.log(data.articles);})
    }

function getAI() {
    {console.log("call2")}
    fetch("https://ae1-software-engineering.onrender.com/api/AInews")    
    .then(res => res.json())
    .then(data => { 
         console.log(data.articles);
    })
}
function getManAI()
{console.log("call Man AI");
    fetch("https://ae1-software-engineering.onrender.com/api/ManAIPharmanews")
    .then(res =>{             //adding error checking 
     console.log("status = ", res.status)
    return res.json();
})
    .then(data => { 
         console.log(data);
     })
     .catch(err => {
          console.error("fetch error:", err)
     })
    }

function getAI() 
    {console.log("call AI");
    fetch("https://ae1-software-engineering.onrender.com/api/AInews")    
    .then(res =>{             //adding error checking 
     console.log("status = ", res.status)
    return res.json();
})
    .then(data => { 
         console.log(data);
     })
     .catch(err => {
          console.error("fetch error:", err)
     })
    }
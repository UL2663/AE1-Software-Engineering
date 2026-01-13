function getManAI()
    {console.log("call Man AI");
    getManAIWeek();
    fetch("/api/ManAIPharmagnews")
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
    getAIweek();
    fetch("/api/AIgnews")    
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

function getAIweek() 
    {console.log("call AI");
    fetch("/api/WeekAIgnews")    
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

function getManAIWeek()
{console.log("call Man AI");
    fetch("/api/WeekManAIPharmagnews")
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

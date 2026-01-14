//DAILY CALLS 
//gnews
function getManAI_GN()
    {console.log("call Man AI");
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

function getAI_GN() 
    {console.log("call AI");
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
//guardian 
function getAI_Guardian(){
    {console.log("call AI Guardian");
        fetch("/api/AIGuardian")
    .then(res =>{             //adding error checking 
     console.log("status = ", res.status)
    return res.json();
})
    .then(data => { 
         console.log(data.response.results);
     })
     .catch(err => {
          console.error("fetch error:", err)
     })
    }
}

function getManAI_Guardian(){
    {console.log("call Man AI Guardian");
        fetch("/api/ManAIPharmaGuardian")
    .then(res =>{             //adding error checking 
     console.log("status = ", res.status)
    return res.json();
})
    .then(data => { 
         console.log(data.response.results);
     })
     .catch(err => {
          console.error("fetch error:", err)
     })
    }
}
//WEEKLY CALLS
//gnews
function getAIweek_GN() 
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

function getManAIWeek_GN()
{console.log("call Man AI week");
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

//GUARDIAN 

function getAI_GuardianWeek(){
    {console.log("call AI Guardian week");
        fetch("/api/AIGuardianWeek")
    .then(res =>{             //adding error checking 
     console.log("status = ", res.status)
    return res.json();
})
    .then(data => { 
         console.log(data.response.results);
     })
     .catch(err => {
          console.error("fetch error:", err)
     })
    }
}

function getManAI_GuardianWeek(){
    {console.log("call Man AI Guardian");
        fetch("/api/ManAIPharmaGuardianWeek")
    .then(res =>{             //adding error checking 
     console.log("status = ", res.status)
    return res.json();
})
    .then(data => { 
         console.log(data.response.results);
     })
     .catch(err => {
          console.error("fetch error:", err)
     })
    }
}

function getAI(){
    getAI_GN();
    getAIweek_GN();
    getAI_Guardian();
    getAI_GuardianWeek();
};

function getManAI(){
    getManAI_GN();
    getManAIWeek_GN();
    getManAI_Guardian();
    getAI_GuardianWeek();
}
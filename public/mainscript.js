//DAILY CALLS 
//gnews
function getManAI_GN()
    {;
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
    {
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
    {
        fetch("/api/AIGuardian")
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
}

function getManAI_Guardian(){
    {
        fetch("/api/ManAIPharmaGuardian")
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
}
//WEEKLY CALLS
//gnews
function getAIweek_GN() 
    {
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
{
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
    {
        fetch("/api/AIGuardianWeek")
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
}

function getManAI_GuardianWeek(){
    {   fetch("/api/ManAIPharmaGuardianweek")
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
    getManAI_GuardianWeek();
}
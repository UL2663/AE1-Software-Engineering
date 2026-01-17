function getAI(){
      {fetch("/api/AI_Analysis")
        .then(res => res.json())
        .then(data => {
            //draw paretos
            //draw radars
            //make text cards 

            console.log(data)
        })  
        .catch(err => {
          console.error("fetch error:", err)
     })}}

function getManAI(){
      {fetch("/api/ManAI_Analysis")
        .then(res => res.json())
        .then(data => {
            //draw paretos
            //draw radars
            //make text cards 

            console.log(data)
        })  
        .catch(err => {
          console.error("fetch error:", err)
     })}}

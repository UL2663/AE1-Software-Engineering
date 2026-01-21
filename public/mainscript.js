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
          drawPareto(data.charts.pareto_week,"weekly_pareto")
          drawPareto(data.charts.pareto_month,"monthly_pareto")

          drawRadar(data.charts.radar_week, "weekly_radar")
          drawRadar(data.charts.radar_month, "monthly_radar")
            //draw paretos
            //draw radars
            //make text cards 

            console.log(data)
        })  
        .catch(err => {
          console.error("fetch error:", err)
     })}}

function drawPareto(chartData, id) {
  const element = document.getElementById(id)
  
  return new Chart(element, {
    data: chartData,
    options: {
      scales: {
        y: {beginAtZero: true },
        y1: { beginAtZero: true,
          position: "right",
          max: 100
        }
      }
    }
  });
}

function drawRadar(chartData, id) {
  const element = document.getElementById(id)
  
  return new Chart(element, {
    type: "radar",
    data: chartData,
    options: {
      scales: {
        y: {beginAtZero: true },
        y1: { beginAtZero: true,
          position: "right",
          max: 100
        }
      }
    }
  });
}
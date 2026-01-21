function getAI(){
      {fetch("/api/AI_Analysis")
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
  const element = document.getElementById(id);
  var chart_obj = Chart.getChart(id)
  if(chart_obj){
    chart_obj.destroy()
  }

  return new Chart(element, {
    data: chartData,
    options: {
      responsive: true,
      interaction:{ mode: "index", intersect: false },
      scales: {
        y: {beginAtZero: true,
          title: {display:true, text: "frequency"}
        },
        y1: { beginAtZero: true,
          position: "right",
          max: 100,
          grid: {drawOnChartArea: false},
          title: {display: true, text: "Cumulative %"}
        }
      }
    }
  });
}

function drawRadar(chartData, id) {
  const element = document.getElementById(id)
  
  var chart_obj = Chart.getChart(id)
  if(chart_obj){
    chart_obj.destroy()
  }

  return new Chart(element, {
    type: "radar",
    data: chartData,
    options: {
      responsive:true
      }
    })}
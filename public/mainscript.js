function getAI(){
       const chartcontainer = document.getElementById("figures")
      chartcontainer.style.display="grid"
      chartcontainer.scrollIntoView()
    
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
          makeCard(data.meta.count_week.amount_of_entries, data.meta.from_week, data.meta.top_week, "card_one")
          makeCard(data.meta.count_month.amount_of_entries, data.meta.from_month, data.meta.top_month, "card_two")
            console.log(data)

            console.log(data)
        })  
        .catch(err => {
          console.error("fetch error:", err)
     })}}

function getManAI(){
      const chartcontainer = document.getElementById("figures")
      chartcontainer.style.display="grid"
        chartcontainer.scrollIntoView()
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
          makeCard(data.meta.count_week.amount_of_entries, data.meta.from_week, data.meta.top_week, "card_one")
          makeCard(data.meta.count_month.amount_of_entries, data.meta.from_month, data.meta.top_month, "card_two")
          
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

function makeCard(count, date, top_token, id){
  const element = document.getElementById(id)
  element.innerHTML= "<h3> Total articles from \n" + date + ": </h3> <h2 id='value'> " + count + " </h2><h3> Most Common Token : </h3><h2 id='value'> " + top_token + " </h2>"
    }
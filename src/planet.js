export const planetChartData = {
    type: "line",
    data: {
      labels: ["January", "febuary", "March", "April", "may", "june", "july", "August", "september","october", "november", "December"],
      datasets: [
        {
         
          data: [0, 0, 1, 2, 79, 82, 27, 14],
          backgroundColor: "rgba(54,73,93,.5)",
          borderColor: "#36495d",
          borderWidth: 3
        },
       
      ]
    },
    options: {
      responsive: true,
      lineTension: 1,
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              padding: 25
            }
          }
        ]
      }
    }
  };
  
  export default planetChartData;
// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["", "", "", "", "", "", "", "", "", "", "", "", "","", "", "", "", "", "", "", "", "", "", "", "", ""],
    datasets: [{
      label: "Threat",
      lineTension: 0.3,
      backgroundColor: "rgba(2,117,216,0.2)",
      borderColor: "rgba(2,117,216,1)",
      pointRadius: 3,
      pointBackgroundColor: "rgba(2,117,216,1)",
      pointBorderColor: "rgba(255,255,255,0.8)",
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(2,117,216,1)",
      pointHitRadius: 50,
      pointBorderWidth: 2,
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 5
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          maxTicksLimit: 5
        },
        gridLines: {
          color: "rgba(0, 0, 0, .125)",
        }
      }],
    },
    legend: {
      display: false
    }
  }
});



setInterval(function(){

  myLineChart.data.datasets[0].data.shift();


  if (Math.floor(Math.random() * 10) < 7)
  {
    var aux = myLineChart.data.datasets[0].data[24] + (Math.floor(Math.random() * 6) - 3);
    //var aux = myLineChart.data.datasets[0].data[24] + 100;
  }

  else
  {
    var aux = myLineChart.data.datasets[0].data[24] + (Math.floor(Math.random() * 20) - 10);
  }

  if (aux < 0){
    aux = 0;
  }
  else if (aux > 70)
  {
    aux = 70;
  }
  myLineChart.data.datasets[0].data.push(aux);


  var d = new Date();

  myLineChart.data.labels.shift();
  myLineChart.data.labels.push(d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds());


  myLineChart.update();


}, 5000);

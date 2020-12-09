// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Tiger Nixon", "Gloria Little", "Bruno Nash", "Haley Kennedy", "Michelle House", "Michael Silva"],
    datasets: [{
      label: "Threat Level",
      backgroundColor: "rgba(2,117,216,1)",
      borderColor: "rgba(2,117,216,1)",
      data: [15000, 11400, 10200, 8900, 8900, 8800],
    }],
  },
  options: {
    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          maxTicksLimit: 6
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 20000,
          maxTicksLimit: 5
        },
        gridLines: {
          display: true
        }
      }],
    },
    legend: {
      display: false
    }
  }
});


/*
setInterval(function(){

  len = myBarChart.data.datasets[0].data.length;

  for (i = 0; i < len; i++) {
    if (Math.floor(Math.random() * 10) < 10)
    {
      var aux = myBarChart.data.datasets[0].data[i] + (Math.floor(Math.random() * 1000) - 500);

      if (aux < 0){
        aux = 0;
      }
      else if (aux > 20000)
      {
        aux = 20000;
      }

      myBarChart.data.datasets[0].data[i] = aux;

    }

    //myBarChart.data.datasets[0].data[i] = 0;



  }

  myBarChart.update();


}, 1000);
*/

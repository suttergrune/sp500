
graph1 = function (dataframe) {

  Chart.pluginService.register({
    beforeDraw: function (chart, easing) {
      if (chart.config.options.chartArea && chart.config.options.chartArea.backgroundColor) {
        let ctx = chart.chart.ctx;
        let chartArea = chart.chartArea;
        //console.log(chartArea.bottom - chartArea.top);
        ctx.save();
        ctx.fillStyle = chart.config.options.chartArea.backgroundColor;
        ctx.fillRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, 173);
        ctx.restore();
      }
    }
  });

  let lineChart = document.getElementById('graph1').getContext('2d');

  const date = dataframe['Date'];
  const close = dataframe['Close'];
  const open = dataframe['Open'];


  const daily_return = [];
  for (let i = 1; i < close.length; i++) {
    let x = 100 * (close[i] - open[i]) / open[i];
    daily_return.push(x);
  }


  // Global Options
  Chart.defaults.global.defaultFontFamily = 'Helvetica';
  Chart.defaults.global.defaultFontSize = 18;
  Chart.defaults.global.defaultFontColor = '#777';

  let priceChart = new Chart(lineChart, {
    type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
      labels: date,
      datasets: [{
        label: 'Index',
        data: daily_return,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        pointRadius: 0,
        fill: false,
        borderColor: 'rgba(54, 162, 235, 0.6)',
        borderWidth: 2
      }]
    },
    elements: {
      point: {
        pointStyle: 'line'
      }
    },
    options: {
      title: {
        display: true,
        text: 'Binary Classification by Daily Percent Change >=0.3%',
        fontSize: 25
      },
      legend: {
        display: false,
        position: 'right',
        labels: {
          fontColor: '#000'
        }
      },
      layout: {
        padding: {
          left: 30,
          right: 30,
          bottom: 0,
          top: 0
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          type: 'time',
          time: {
            displayFormats: {
              quarter: 'MMM YYYY'
            }
          },
          scaleLabel: {
            display: true,
            labelString: '',
          }
        }],
      },
      chartArea: {
        backgroundColor: 'rgba(84, 211, 97, 0.5)'
      }
    }
  });
}

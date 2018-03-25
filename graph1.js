
graph1 = function(dataframe){

let lineChart = document.getElementById('graph1').getContext('2d');

const date = dataframe['Date'];
const close = dataframe['Close'];

// Global Options
Chart.defaults.global.defaultFontFamily = 'Helvetica';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let priceChart = new Chart(lineChart, {
	type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data: {
		labels: date,
		datasets: [{
			label: 'Time',
			data: close,
			backgroundColor: 'rgba(54, 162, 235, 0.6)',
			pointRadius: 0
		}]
	},
	elements:{
		point:{
			pointStyle: 'line'
		}
	},
	options: {
		title: {
			display: true,
			text: 'S&P 500 Index (2015)',
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
			padding:{
				left:30,
				right:30,
				bottom:0,
				top:0
			}
		},
		tooltips:{
			enabled:false
		},
		scales:{
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
		}
	}
});


};
graph6 = function(dataframe){

let line = document.getElementById('graph6').getContext('2d');

const date = dataframe['Date'];
const ema_12 = dataframe['EMA_12'];
const ema_26 = dataframe['EMA_26'];

// Global Options
Chart.defaults.global.defaultFontFamily = 'Helvetica';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let rsi = new Chart(line, {
	type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data: {
		labels: date,
		datasets: [{
			label: '12-Day EMA',
			data: ema_12,
			backgroundColor: 'rgba(255, 99, 132, 0.6)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(255, 99, 132, 0.6)',
			borderWidth: 4
		},
		{
			label: '26-Day EMA',
			data: ema_26,
			backgroundColor: 'rgba(54, 162, 235, 0.6)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(54, 162, 235, 0.6)',
			borderWidth: 4
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
			text: 'Exponential Moving Average (EMA)',
			fontSize: 25
		},
		legend: {
			display: true,
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
            }]

		}
	}
});


};
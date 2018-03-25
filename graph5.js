graph5 = function(dataframe){

let line = document.getElementById('graph5').getContext('2d');

const date = dataframe['Date'];
const rsi_10 = dataframe['RSI_10'];
const rsi_14 = dataframe['RSI_14'];
const rsi_30 = dataframe['RSI_30'];

// Global Options
Chart.defaults.global.defaultFontFamily = 'Helvetica';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let rsi = new Chart(line, {
	type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data: {
		labels: date,
		datasets: [{
			label: '10-Day RSI',
			data: rsi_10,
			backgroundColor: 'rgba(75, 192, 192, 0.6)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(75, 192, 192, 0.6)',
			borderWidth: 4
		},
		{
			label: '14-Day RSI',
			data: rsi_14,
			backgroundColor: 'rgba(255, 206, 86, 0.8)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(255, 206, 86, 0.8)',
			borderWidth: 4
		},
		{
			label: '30-Day RSI',
			data: rsi_30,
			backgroundColor: 'rgba(255, 99, 132, 0.6)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(255, 99, 132, 0.6)',
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
			text: 'Relative Strength Index (RSI)',
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
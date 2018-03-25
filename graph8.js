graph8 = function(dataframe){

let lineChart = document.getElementById('graph8').getContext('2d');

const date = dataframe['Date'];
const momentum = dataframe['Momentum'];
const macd = dataframe['MACD_12-26'];
const williams = dataframe['Williams%R'];
const cci = dataframe['CCI'];
const atr = dataframe['ATR'];

// Global Options
Chart.defaults.global.defaultFontFamily = 'Helvetica';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let priceChart = new Chart(lineChart, {
	type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data: {
		labels: date,

		datasets: [{
			label: 'ATR',
			data: atr,
			backgroundColor: 'rgba(75, 192, 192, 0.6)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(75, 192, 192, 0.6)',
			borderWidth: 4
		},
		{
			label: '12-26 Day MACD',
			data: macd,
			backgroundColor: 'rgba(153, 102, 255, 0.6)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(153, 102, 255, 0.6)',
			borderWidth: 4
		},
		{
			label: 'Momentum',
			data: momentum,
			backgroundColor: 'rgba(54, 162, 235, 0.6)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(54, 162, 235, 0.6)',
			borderWidth: 4
		},
		{
			label: 'Williams %Range',
			data: williams,
			backgroundColor: 'rgba(255, 206, 86, 0.8)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(255, 206, 86, 0.8)',
			borderWidth: 4
		},
		{
			label: 'CCI',
			data: cci,
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
			text: 'More Indicators',
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
graph4 = function(dataframe){

let lineChart = document.getElementById('graph4').getContext('2d');

const date = dataframe['Date'];
const returns = dataframe['Return'];
const roi_10 = dataframe['ROI_10'];
const roi_20 = dataframe['ROI_20'];
const roi_30 = dataframe['ROI_30'];

// Global Options
Chart.defaults.global.defaultFontFamily = 'Helvetica';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let priceChart = new Chart(lineChart, {
	type: 'line', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data: {
		labels: date,
		datasets: [{
			label: '1-Day ROI',
			data: returns,
			backgroundColor: 'rgba(75, 192, 192, 0.6)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(75, 192, 192, 0.6)',
			borderWidth: 4
		},
		{
			label: '10-Day ROI',
			data: roi_10,
			backgroundColor: 'rgba(153, 102, 255, 0.6)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(153, 102, 255, 0.6)',
			borderWidth: 4
		},
		{
			label: '20-Day ROI',
			data: roi_20,
			backgroundColor: 'rgba(255, 206, 86, 0.8)',
			pointRadius: 0,
			fill: false,
			borderColor: 'rgba(255, 206, 86, 0.8)',
			borderWidth: 4
		},
		{
			label: '30-Day ROI',
			data: roi_30,
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
			text: 'Return on Investment (ROI)',
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
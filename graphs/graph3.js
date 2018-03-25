graph3 = function(dataframe) {

let pieChart = document.getElementById('graph3').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

const date = dataframe['Date'];
const classify = dataframe['Class'];
let count1 = 0;
let count2 = 0;
for(let i=1; i<classify.length; i++){
  if(classify[i]==1)
  	count1=count1+1;
  else
  	count2=count2+1;
}
const classes = [count1, count2];

let classChart = new Chart(pieChart, {
	type: 'pie', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data: {
		labels: ['Favorable Days', 'Unfavorable Days'],
		datasets: [{
			label: 'Population',
			data: classes,
			backgroundColor: [
				'rgba(84, 211, 97, 0.6)',
				'rgba(237, 27, 27, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            //hoverBorderWidth: 3,
            hoverBorderColor: '#000',
            hoverBackgroundColor: [
            	'rgba(84, 211, 97, 0.8)',
				'rgba(237, 27, 27, 0.8)'
            ]
		}]
	},
	options: {
		title: {
			display: true,
			fontSize: 25
		},
		legend: {
			display: true,
			position: 'right',
			labels: {
				fontColor: '#000'
			}
		},
		tooltips: {
		  callbacks: {
		    label: function(tooltipItem, data) {
		      //get the concerned dataset
		      var dataset = data.datasets[tooltipItem.datasetIndex];
		      //calculate the total of this data set
		      var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
		        return previousValue + currentValue;
		      });
		      //get the current items value
		      var currentValue = dataset.data[tooltipItem.index];
		      //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
		      var precentage = Math.floor(((currentValue/total) * 100)+0.5);

		      return precentage + "%";
		    }
		  }
		}
	}
});

}
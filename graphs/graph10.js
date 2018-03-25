graph10 = function(dataframe) {

let pieChart = document.getElementById('graph10').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Helvetica';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

const pred_classes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
      1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0,
      1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1,
      0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let count1 = 0;
let count2 = 0;
for(let i=1; i<pred_classes.length; i++){
  if(pred_classes[i]==1)
  	count1=count1+1;
  else
  	count2=count2+1;
}
const classes = [count1, count2];

let classChart = new Chart(pieChart, {
	type: 'pie', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data: {
		labels: ['Favorable Days (99)', 'Unfavorable Days (419)'],
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
			text: 'Predictions (12/09/2015 - 12/29/2017)',
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
		      let dataset = data.datasets[tooltipItem.datasetIndex];
		      //calculate the total of this data set
		      let total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
		        return previousValue + currentValue;
		      });
		      //get the current items value
		      let currentValue = dataset.data[tooltipItem.index];
		      //calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
		      let precentage = Math.floor(((currentValue/total) * 100)+0.5);

		      return precentage+"%";
		    }
		  }
		}
	}
});

}
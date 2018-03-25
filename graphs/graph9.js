graph9 = function(dataframe){

let line = document.getElementById('graph9').getContext('2d');

let date = dataframe['Date2'];
let datelen = date.length
console.log(datelen);
let pred_classes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
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
let predlen = pred_classes.length;
console.log(predlen);
if(datelen<predlen){
	pred_classes = pred_classes.slice(predlen-datelen);
	predlen = pred_classes.length;
}
else{
	date = date.slice(datelen-predlen);
	datelen = date.length;
}

let open = dataframe['Open2'];
let close = dataframe['Close2'];
open = open.slice(open.length-datelen);
close = close.slice(close.length-datelen);
console.log(datelen+", "+predlen+", "+open.length+", "+close.length);
let ones_dates = [];
let ones_roi = [];
let count = [];
let counter = 1;
for(let k=0; k<datelen; k++){
	if(pred_classes[k]==1){
		ones_dates.push(date[k]);
		let roi = 100*(close[k]-open[k])/open[k];
		ones_roi.push(roi); 
		count.push(counter++);
	}
}
console.log(ones_dates.length+", "+ones_roi.length);
console.log(ones_dates.length+", "+ones_roi.length);


//const ema_12 = dataframe['EMA_12'];
//const ema_26 = dataframe['EMA_26'];

// Global Options
Chart.defaults.global.defaultFontFamily = 'Helvetica';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let y_pred = new Chart(line, {
	type: 'bar', //bar, horizontalBar, pie, line, doughnut, radar, polarArea
	data: {
		labels: ones_dates,
		datasets: [
		{
			label: 'Percent Change of Favorable Days in 2017',
			data: ones_roi,
			backgroundColor: 'rgba(54, 162, 235, 0.6)',
			pointRadius: 0,
			fill: true,
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
			text: 'Daily Percent Change of Predicted Favorable Days in 2017',
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
                /*type: 'time',
                time: {
                    displayFormats: {
                        quarter: 'MMM YYYY'
                    }
                },*/
                barThickness: 50,
                scaleLabel: {
        			display: true,
        			labelString: '',
        		}
            }]

		}
	}
});


};
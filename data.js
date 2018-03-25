
const data = {
	'Date':[],
	'Open':[],
	'High':[],
	'Low':[],
	'Close':[],
	'Class':[],
	'Return':[],
	'ROI_10':[],
	'ROI_20':[],
	'ROI_30':[],
	'Momentum':[],
	'EMA_12':[],
	'EMA_26':[],
	'RSI_10':[],
	'RSI_14':[],
	'RSI_30':[],
	'MACD_12-26':[],
	'Williams%R':[],
	'CCI':[],
	'ATR':[],
	'Date2':[],
  'Open2':[],
  'Close2':[]
};	

d3.csv("finaldata.csv", function(df){
    const end2015 = df.length-504;
		for(let i=1006; i<end2015; i++){
  			data['Date'].push(df[i]['Date']);
  			data['Open'].push(Number(df[i]['Open']));
  			data['High'].push(Number(df[i]['High']));
  			data['Low'].push(Number(df[i]['Low']));
  			data['Close'].push(Number(df[i]['Close']));
  			data['Momentum'].push(Number(df[i]['Momentum']));
  			data['Return'].push(Number(df[i]['Return']));
  			data['ROI_10'].push(Number(df[i]['10 Day ROI']));
  			data['ROI_20'].push(Number(df[i]['20 Day ROI']));
  			data['ROI_30'].push(Number(df[i]['30 Day ROI']));
  			data['RSI_10'].push(Number(df[i]['10_day_RSI']));
  			data['RSI_14'].push(Number(df[i]['14_day_RSI']));
  			data['RSI_30'].push(Number(df[i]['30_day_RSI']));
  			data['EMA_12'].push(Number(df[i]['EMA_12']));
  			data['EMA_26'].push(Number(df[i]['EMA_26']));
  			data['Class'].push(Number(df[i]['Class']));
  			data['MACD_12-26'].push(Number(df[i]['MACD_12_26']));
  			data['Williams%R'].push(Number(df[i]['Williams']));
  			data['ATR'].push(Number(df[i]['ATR_14']));
  			data['CCI'].push(Number(df[i]['CCI']));
  	};

    console.log(df[1487]['Date']);
    const end = df.length;
    for(let j=1500; j<end; j++){
        data['Date2'].push(df[j]['Date']);
        data['Open2'].push(Number(df[j]['Open']));
        data['Close2'].push(Number(df[j]['Close']));
    };

  	graph1(data);
  	graph2(data);
  	graph3(data);
  	graph4(data);
  	graph5(data);
  	graph6(data);
  	graph8(data);
		graph10(data);
    graph9(data);
});
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://d3js.org/d3.v3.min.js" charset="utf-8"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-csv/0.8.3/jquery.csv.min.js"></script>
  <script src="https://momentjs.com/downloads/moment.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <title>S&P 500 Analysis</title>
  <style>
    p {
      font-size:1.5em;
      text-align: center;
    }
  </style>
</head>
<body>
  <br><br>
  <div class="container">
  	<div class="row">
        <h3 style="text-align: center;">Created by Sutter Grune</h3>
  	</div>
  	<br><br>
  	<div class="row">
  		<h1 id="test" style="text-align:center;">Determining Ideal Days for Stock Market Day Trading: 24-Hour Binary Classification on S&P 500 Index</h1><br><br><br>
      <p>These charts visualize the process of implementing the Naive Bayes algorithm to predict the performance of the stock market. The S&P 500's performance during the years 2011-2015 was used for the training data, while it's 2016-2017 performance was used for testing the algorithm. <a href="https://github.com/ranaroussi/fix-yahoo-finance" target="_blank">Fix-Yahoo-Finance</a> was used for the collection of raw data. Python was used for indicator calculations as well as the Naive Bayes implementation. The Chart.js Javascript library was used for creating the charts. Although the training data spans 2011-2015, the following 6 charts visualize the data only of 2015, for the sake of simplicity and clarity.</p>
  	</div>
  </div>
  <br><br><br><br>
  <div class="container" style="width: 1000px; max-width:90vw; margin-left:auto; margin-right:auto;">
    <canvas id="graph1"></canvas>
  </div>
  <br><br><br><br>
  <div class="container">
    <p>The training data was classified according to a binary criteria. Days with a positive daily percent change greater than or equal to 0.3% were classified as "favorable" days for trading. All other days were classified as "unfavorable." In the chart below, the green rectangle represents the favorable region. The next chart (pie chart) compares the number of favorable days to the number of unfavorable days in 2015.</p>
  </div><br><br>
  <div class="container" style="width: 1000px; max-width:90vw; margin-left:auto; margin-right:auto;">
    <canvas id="graph2"></canvas>
  </div>
  <div class="container" style="width: 500px; max-width:90vw; margin-left:auto; margin-right:auto;">
    <canvas id="graph3"></canvas>
  </div>
  <br><br><br><br><br><br>
  <div class="container">
    <p>Fourteen different technical indicators were calculated for each day to provide data for the Naive Bayes algorithm. The following four charts illustrate the indicator values for 2015.</p>
  </div><br><br>
  <div class="container" style="width: 1000px; max-width:90vw; margin-left:auto; margin-right:auto;">
    <canvas id="graph4"></canvas>
  </div>
  <br><br><br><br>
  <div class="container" style="width: 1000px; max-width:90vw; margin-left:auto; margin-right:auto;">
    <canvas id="graph5"></canvas>
  </div>
  <br><br><br><br>
  <div class="container" style="width: 1000px; max-width:90vw; margin-left:auto; margin-right:auto;">
    <canvas id="graph6"></canvas>
  </div>
  <br><br><br><br>
  <div class="container" style="width: 1000px; max-width:90vw; margin-left:auto; margin-right:auto;">
    <canvas id="graph8"></canvas>
  </div>
  <br><br><br><br><br><br>
  <div class="container">
    <p>After calculating the indicators for each day, the Naive Bayes algorithm was implemented. Using the 2011-2015 training data, which included each day's classification and indicator values, the Naive Bayes algorithm predicted the S&P 500's performance by classifying the days in 2016-2017. The two charts below illustrate the predictions. The pie chart below compares the number of favorable days to the number unfavorable days predicted in 2016-2017. The bar graph illustrates the actual daily percent change of all the favorable days predicted in 2017. For all 14 days that were predicted to be "favorable" days for trading in 2017, only three of them had a negative daily percent change.</p>
  </div><br><br>
  <div class="container" style="width: 500px; max-width:90vw; margin-left:auto; margin-right:auto;">
    <canvas id="graph10"></canvas>
  </div>
  <div class="container" style="width: 1000px; max-width:90vw; margin-left:auto; margin-right:auto;">
    <canvas id="graph9"></canvas>
  </div>
  <br><br><br><br><br><br>

  	<script src="data.js"></script>
  	<script src="graphs/graph1.js"></script>
  	<script src="graphs/graph2.js"></script>
  	<script src="graphs/graph3.js"></script>
  	<script src="graphs/graph4.js"></script>
  	<script src="graphs/graph5.js"></script>
  	<script src="graphs/graph6.js"></script>
  	<script src="graphs/graph8.js"></script>
  	<script src="graphs/graph10.js"></script>
  	<script src="graphs/graph9.js"></script>
</body>
</html>

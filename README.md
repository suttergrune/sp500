# Determining Ideal Days for Stock Market Day Trading: 24-Hour Binary Classification on S&P 500 Index

https://sp500predict.herokuapp.com/

These charts visualize the process of implementing the Naive Bayes algorithm to predict the performance of the stock market. The S&P 500's performance during the years 2011-2015 was used for the training data, while it's 2016-2017 performance was used for testing the algorithm. Fix-Yahoo-Finance was used for the collection of raw data. Python was used for indicator calculations as well as the Naive Bayes implementation. The Chart.js Javascript library was used for creating the charts.

There are many strategies that a day trader can exercise in order to make gains in the stock market. Some day traders trade on a daily basis and rely on determining the best time windows to buy and sell for each day. In contrast, other day traders rely on choosing particular days that indicate strong potential for positive returns, and make gains by buying stock in the morning and selling that stock in the afternoon. This is the type of day trader that would find this type of stock analysis useful. The code can be applied by collecting price data up to a particular day, and using that data to classify the next day as a favorable day to trade (1) or an unfavorable day to trade (0). If the next day is classified as a favorable day for trading, it would indicate that the day trader should buy stock in the morning once the market opens, as that day is likely to have significant returns according to our criteria.




Fix-Yahoo-Finance: https://github.com/ranaroussi/fix-yahoo-finance

Naive Bayes: https://en.wikipedia.org/wiki/Naive_Bayes_classifier

Chart.js: http://www.chartjs.org/
